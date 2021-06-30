const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { uuid } = require('uuidv4');

const HttpError = require('../models/http-error');
const User = require('../schemas/user-schema');
const Payment = require('../schemas/payment-schema');
const Role = require('../_helpers/role');
const config = require('../config.json');

const authenticate = async ({ email, password }) => {
    let user = null;
    try{
        user = await User.findOne({ email: email });
      } catch(err) {
        const error = new HttpError(
          'Something went wrong, could not find user.',
          500
        );
        return error;
      }

      const match = await bcrypt.compare(password, user.password);
      if(match) {
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
      } else {
        return res.json({success: false, message: 'passwords do not match'});
      }
}

const saveUser = async (req, res, next) => {
    console.log('Adding the user');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return next(new HttpError('Invalid inputs! Please check again.', 422));
    }

    const { name, email, password, role, document, paymentForm } = req.body;

    let existingUser;
    try{
      existingUser = await User.findOne({ email: email});
    } catch(err) {
      const error = new HttpError(
        'Something went wrong, could not sign up.',
        500
      );
      return next(error);
    }

    if(existingUser) {
        const error = new HttpError(
          'User already exists, please sign in.',
          422
        );
        return next(error);
      }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const newUser = new User({
        userid: uuid(),
        name,
        email,
        password: hashedPassword,
        role,
        document: document || {},
        payments: []
    });

    let newPayment = null;
    if(paymentForm) {
        newPayment = new Payment({
            payment_id: uuid(),
            amount: paymentForm.amount,
            paymentDate: new Date(),
            cardDetails: {
                cardNo: paymentForm.cardNo,
                expDate: paymentForm.expDate,
                cvv: paymentForm.cvv
            },
            userid: ''
        })
    }
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        if(paymentForm) {
            newUser.payments.push(newPayment);
            newPayment.userid = newUser._id;
            await newPayment.save({ session: session });
        }
        await newUser.save({ session: session });
        await session.commitTransaction();
    } catch (err) {
        const error = new HttpError(
            'Error occured while saving details. Please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ User: saveUser });
};

const savePayment = async (req, res, next) => {

  const { userid, paymentForm } = req.body;
  let existingUser = null;
  try {
    existingUser = await User.findOne({ _id: userid});
  } catch(err) {
    const error = new HttpError(
      'Something went wrong, could not save details.',
      500
    );
    return next(error);
  }
  if(existingUser) {
    const newPayment = new Payment({
      payment_id: uuid(),
      amount: paymentForm.amount,
      paymentDate: new Date(),
      cardDetails: {
          cardNo: paymentForm.cardNo,
          expDate: paymentForm.expDate,
          cvv: paymentForm.cvv
      },
      userid
    })
  
    try {
      const session = await mongoose.startSession();
      session.startTransaction();
      await newPayment.save({ session: session });
      await User.updateOne({_id: userid}, { $push: { payments: newPayment._id } },(err, res) => {});
      await session.commitTransaction();
    } catch (err) {
      const error = new HttpError(
          'Error occured while saving details. Please try again.',
          500
      );
      return next(error);
    }
    let updatedUser = null;
    try {
      updatedUser = await User.findOne({ _id: userid});
    } catch(err) {
      const error = new HttpError(
        'Something went wrong..',
        500
    );
      return next(error);
    }
    res.status(201).json({ "user": updatedUser });
  }

}

exports.authenticate = authenticate;
exports.saveUser = saveUser;
exports.savePayment = savePayment;