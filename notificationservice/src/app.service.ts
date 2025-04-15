import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ServerConfig } from './config/server.config';

@Injectable()
export class AppService {
  constructor(private readonly mailService: MailerService) {}
  getHello(): string {
    return 'Hello World!';
  }

  sendMail() {
    const message = 'hi hello how are you';

    console.log('im here');

    this.mailService.sendMail({
      from: ServerConfig.EMAIL_USER,
      to: 'prem8309090125@gmail.com',
      subject: `How to Send Emails with Nodemailer`,
      text: message,
    });
  }
}
