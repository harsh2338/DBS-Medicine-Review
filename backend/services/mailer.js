var nodemailer = require("nodemailer");

let testAccount = nodemailer.createTestAccount();

let transporter = nodemailer.createTransport({
    host: ,
    port: 465,
    secure: true,
    auth: {
        user: testAccount.user,
        pass: testAccount.pass,
    },
});

module.exports = transporter;
