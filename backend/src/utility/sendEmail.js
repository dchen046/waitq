import NodeMailer from 'nodemailer';

const transporter = NodeMailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASS
    }
});

export const sendEmail = (toAddress, business) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: toAddress,
        subject: 'Waitq Notification',
        text: `Testing notifications from ${business}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ', info.response);
        }
    })
}
