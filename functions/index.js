const functions = require("firebase-functions");

exports.sendUserEmail = functions.database.ref('order/{pushID}')
    .onCreate(orderItem => console.log(orderItem));