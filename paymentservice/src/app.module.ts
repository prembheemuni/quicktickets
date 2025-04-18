import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config/payment.config';
import ConsulService from './consul/consul.service';

@Module({
  imports: [
    PaymentModule,
    SequelizeModule.forRoot({
      ...databaseConfig.development,
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ConsulService],
})
export class AppModule {}
