import { Injectable, OnModuleInit } from '@nestjs/common';
import { Producer, KafkaClient } from 'kafka-node';
import { ServerConfig } from 'src/config/server.config';
@Injectable()
export class KafkaService implements OnModuleInit {
  private client: KafkaClient;
  private producer: Producer;
  constructor() {
    this.client = new KafkaClient({ kafkaHost: ServerConfig.KAFKA_HOST });
    this.producer = new Producer(this.client);
  }

  onModuleInit() {
    console.log();
    this.producer.on('ready', () => {
      console.log('kafka producer is ready');
    });

    this.producer.on('error', (err) => {
      console.log(err);
    });
  }

  async sendMessage(topic: string, message: string) {
    const payload = [{ topic, messages: message, partition: 0 }];

    return new Promise((resolve, reject) => {
      this.producer.send(payload, (err, data) => {
        if (err) {
          console.log('Error while sending the message', err);
          reject(new Error(err));
        } else {
          console.log('Message sent to kafka');
          resolve(data);
        }
      });
    });
  }
}
