import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { fullname, email, message } = req.body;

      // Authenticate with Google Sheets API
      const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS!),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });
      const spreadsheetId = process.env.SPREADSHEET_ID;
      const sheetName = 'Sheet1';

      // Append the row with form data
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A:D`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[new Date().toISOString(), fullname, email, message]],
        },
      });

      // Send email using Nodemailer
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: 'kushagra6434@gmail.com',
        subject: `New Form Submission: ${fullname}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <h2 style="color: #0056b3;">New Form Submission</h2>
            <p><strong>Name:</strong> ${fullname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd;">${message}</p>
            <p style="font-size: 0.9em; color: #666;">Submitted at: ${new Date().toLocaleString()}</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ status: 'success', message: 'Data successfully saved' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ status: 'error', message: error.message});
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
