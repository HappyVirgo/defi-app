import type {NextApiRequest, NextApiResponse} from 'next'

require('dotenv').config();

interface IResponseData {
    msg: string;
    error: boolean;
    data?: any;
};

const defaultData: IResponseData = {
    msg: '',
    error: false
};

export default async (req: NextApiRequest, res: NextApiResponse<IResponseData>) => {
    let data: IResponseData = defaultData;
    if (req.method == 'POST') {

        const body = req.body;
        console.log("Body: ", body);

        // Input data
        const name = body.name;
        const email = body.email;
        const message = body.message;
        if (!name || !email || !message) {
            data.error = true;
            data.msg = 'Validation failed. Please fill data correctly.';
        }

        if (!data.error) {
            try
            {
                const fromEmail = process.env.FROM_EMAIL;
                const adminEmail = process.env.ADMIN_EMAIL;

                // SMT setting
                const host = process.env.SMTP_HOST;
                const user = process.env.SMTP_USER;
                const pwd = process.env.SMTP_PWD;
                const port = process.env.SMTP_PORT;

                // @todo
                // data.data = {host, user, pwd, port};
                console.log("Starting to send: ", host, user, pwd, port);

                let nodemailer = require('nodemailer');
                const transporter = nodemailer.createTransport({
                    port: port,
                    host: host,
                    auth: {
                        user: user,
                        pass: pwd,
                    },
                    secure: true,
                });

                // send an email to user
                const mailData = {
                    from: `"The Defi Network" <${fromEmail}>`,
                    to: `${email}`,
                    subject: `The Defi Netowork - Thanks for contact`,
                    text: `Hi ${name},\n We received your contact. We will get back to you shortly. \n Your message: ` + message + " \nThanks\nThe Defi Network",
                    html: `
                        Hi ${name}, <br />
                        <p>We received your contact. We will get back to you shortly.</p>
                        <hr />
                        <p><b>Your Message: </b></p>
                        <p>${message}</p>
                        <hr />
                        <p>Thanks</p>
                        <p>The Defi Network</p>
                    `
                }

                await transporter.sendMail(mailData);

                // send an email to user
                if (!data.error) {
                    const mailData = {
                        from: `"The Defi Network" <${fromEmail}>`,
                        to: `${adminEmail}`,
                        cc: 'likigoldenstar@gmail.com',
                        subject: `New Contact has just received`,
                        text: `Hi Hi Administrator, \n We received the new contact. \n${name}, ${email}, ${message}`,
                        html: `
                        Hi Administrator, <br />
                        <p>We received the new contact.</p>
                        <hr />
                        <p><b>Contact Detail: </b></p>
                        <p><b>Name:</b> ${name}</p>
                        <p><b>Email Address:</b> ${email}</p>
                        <p><b>Message:</b> <br />${message}</p>
                        <hr />
                    `
                    }
                    await transporter.sendMail(mailData);
                }
                data.msg = "Email has been sent successfully.";
            } catch (e) {
                console.log(e);
                data.error = true;
                data.msg = "Failed to send an email.";
            }
        }
    }
    console.log("API result: ", data);
    res.status(200).json(data);
}
