/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, message } = req.body
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_EMAIL_ADDRESS,
            pass: process.env.GMAIL_PASSWORD,
        },
    })

    try {
        await transporter.sendMail({
            from: email,
            subject: `Contact form from ${name}`,
            to: 'mnaufalrafianto@gmail.com',
            html: `
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
      <style>
        /* Reset CSS */
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ol,
        ul {
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, sans-serif;
          line-height: 1.4;
          color: #333;
        }

        /* Email Content */
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }

        .email-header {
          background-color: #f6f6f6;
          padding: 20px;
          text-align: center;
        }

        .email-body {
          padding: 20px;
          background-color: #fff;
          border: 1px solid #ddd;
        }

        .email-message {
          margin-top: 20px;
        }

        .email-footer {
          padding: 20px;
          text-align: center;
          background-color: #f6f6f6;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h1>Contact Form Submission</h1>
        </div>
        <div class="email-body">
          <h2>Hi there,</h2>
          <p>You have received a new email from a your website contact form submission:</p>
          <div class="email-message">
            <h3>Details:</h3>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
            </ul>
            <h3>Message:</h3>
            <p>${message}</p>
          </div>
        </div>
        <div class="email-footer">
          <p>This email was sent via the contact form on your website.</p>
        </div>
      </div>
    </body>
  </html>
`,
        })
    } catch (error: any) {
        console.log(error.message)
    }
    res.status(200).json(req.body)
}
