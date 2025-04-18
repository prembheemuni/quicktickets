import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ServerConfig } from './config/server.config';

@Injectable()
export class AppService {
  constructor(private readonly mailService: MailerService) {}
  getHello(): string {
    return 'Hello World!';
  }

  sendMail(email: string, message: string) {
    this.mailService.sendMail({
      from: ServerConfig.EMAIL_USER,
      to: email,
      subject: 'User Created',
      text: message,
    });
  }
}
