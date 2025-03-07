import { SESClient } from "@aws-sdk/client-ses";
import { SendEmailCommand } from "@aws-sdk/client-ses";


const sesOptions = {
    region: process.env.AWS_SES_REGION,
    credentials: {
        accessKeyId: process.env.AWS_SES_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SES_SECRET_KEY,
    }
};

const sesClient = new SESClient(sesOptions);

const createSendEmailCommand = (toAddress) => {
    return new SendEmailCommand({
        Destination: {
            /* required */
            CcAddresses: [
                /* more items */
            ],
            ToAddresses: [
                toAddress,
                /* more To-email addresses */
            ],
        },
        Message: {
            /* required */
            Body: {
                /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: "<h1>This is body of email</h1>",
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "This is body",
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Waitq Notification",
            },
        },
        Source: process.env.AWS_SES_SENDER,
        ReplyToAddresses: [
            /* more items */
        ],
    });
};

export const sendEmail = async (recipient) => {
    console.log('inside sendemail');
    const sendEmailCommand = createSendEmailCommand(recipient);
    try {
        return await sesClient.send(sendEmailCommand);
    } catch (error) {
        console.log(error);
    }
    // try {
    //     const res = await awsSES.sendEmail(params).promise();
    //     console.log('Email has been sent', res)
    // } catch (err) {
    //     console.log(err);
    // }
}