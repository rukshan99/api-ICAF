const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

const HttpError = require('../models/http-error');
const User = require('../schemas/user-schema');
const Payment = require('../schemas/payment-schema');

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

    const newUser = new User({
        userid: uuid(),
        name,
        email,
        password,
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
    console.log(newPayment);
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

exports.saveUser = saveUser;