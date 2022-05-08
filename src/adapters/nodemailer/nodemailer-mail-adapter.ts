import nodemailer from 'nodemailer';
import { brotliDecompressSync } from 'zlib';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "572c74bab79e13",
    pass: "ad303a22d216a0"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Héliton Oliveira <heliton.oliveira88@gmail.com>',
    subject,
    html: body,
  });
  };
}
