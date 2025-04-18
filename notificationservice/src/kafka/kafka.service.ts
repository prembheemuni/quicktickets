import { Injectable, OnModuleInit } from '@nestjs/common';
import { KafkaClient, Consumer } from 'kafka-node';
import { ServerConfig } from 'src/config/server.config';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class KafkaService implements OnModuleInit {
  private client: KafkaClient;
  private consumer: Consumer;
  constructor(private readonly mailService: MailerService) {
    this.client = new KafkaClient({ kafkaHost: ServerConfig.KAFKA_HOST });
    this.consumer = new Consumer(
      this.client,
      [{ topic: 'user-topic', partition: 0 }],
      { autoCommit: true },
    );
  }

  sendMail(email: string, message: string) {
    console.log(email, 'as mail');
    this.mailService.sendMail({
      from: ServerConfig.EMAIL_USER,
      to: email,
      subject: 'User Created',
      text: message,
    });
  }

  async onModuleInit() {
    this.consumer.on('message', (message) => {
      console.log('Received message from kafka:', message.value);
      const userDetails = JSON.parse(message.value as string);
      this.sendMail(userDetails.email, 'New User created successfully');
    });
    this.consumer.on('error', (err) => {
      console.log(err);
    });
  }
}
