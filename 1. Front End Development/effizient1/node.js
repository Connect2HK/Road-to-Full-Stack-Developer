const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    // Send an email (you need to configure your email provider here)
    const transporter = nodemailer.createTransport({
        service: 'YourEmailServiceProvider',
        auth: {
            user: 'your_email@example.com',
            pass: 'your_password',
        },
    });

    const mailOptions = {
        from: 'your_email@example.com',
        to: email,
        subject: 'Confirmation Email',
        text: 'Thank you for your submission. Your message: ' + message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Email could not be sent.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
