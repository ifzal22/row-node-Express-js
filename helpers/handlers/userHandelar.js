/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const data = require('../../lib/data');
const hash = require('../utilitis');

const handler = {};

handler.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._user[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._user = {};

handler._user.post = (requestProperties, callback) => {
    const firstName = typeof requestProperties.body.firstName === 'string' && requestProperties.body.firstName.trim().length > 0 ? requestProperties.body.firstName : false;

    const lastName = typeof requestProperties.body.lastName === 'string' && requestProperties.body.lastName.trim().length > 0 ? requestProperties.body.lastName : false;

const phone = typeof requestProperties.body.phone === 'string' && requestProperties.body.phone.trim().length === 11 ? requestProperties.body.phone : false;

const password = typeof requestProperties.body.password === 'string' && requestProperties.body.password.trim().length === 11 ? requestProperties.body.password : false;

const tosAgrement = typeof requestProperties.body.tosAgrement === 'boolean' && requestProperties.body.tosAgrement.trim().length > 0 ? requestProperties.body.tosAgrement : false;

if (firstName && lastName && phone && password && tosAgrement) {
    // make sure that user alredy exist
    data.read('users', phone, (err1, user) => {
        if (err1) {
const userObjects = {
    firstName,
    lastName,
    phone,
password: hash(password),
tosAgrement,
};
data.create('users', phone, userObjects, (err2) => {
if (!err2) {
callback(200, {
    message: 'user was created successfull',
});
} else {
    callback(500, { error: 'could not create user' });
}
});
        } else {
            callback(500, {
                error: 'server error',
            });
        }
    });
} else {
    callback(400, {
        error: 'you have a problem in your request',
    });
}
};

handler._user.get = (requestProperties, callback) => {

};
handler._user.put = (requestProperties, callback) => {

};
handler._user.delete = (requestProperties, callback) => {

};

module.exports = handler;
