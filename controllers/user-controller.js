const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

const HttpError = require('../models/http-error');
const User = require('../schemas/user-schema');

const saveUser = async (req, res, next) => {
    console.log('Adding the user');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return next(new HttpError('Invalid inputs! Please check again.', 422));
    }

    const { name, email, password, role } = req.body;

    const newUser = new User({
        userid: uuid(),
        name,
        email,
        password,
        role
    });
    console.log(newUser);
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await newUser.save({ session: session });
        await session.commitTransaction();
    } catch (err) {
        const error = new HttpError(
            'Error occured while saving user details. Please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ User: saveUser });
};

exports.saveUser = saveUser;