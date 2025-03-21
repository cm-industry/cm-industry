import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, subject, message } = req.body;

  try {
    // Настраиваем транспорт для SMTP (пример для Fastmail)
    const transporter = nodemailer.createTransport({
      host: 'smtp.fastmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // ваш логин
        pass: process.env.EMAIL_PASS, // ваш пароль
      },
    });

    // Отправляем письмо
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'info@cm-industry.net', // на какой адрес присылать
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Message: ${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending mail:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
