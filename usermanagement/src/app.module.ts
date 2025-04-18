import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config/user.config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import ConsulService from './consul/consul.service';
import { KafkaService } from './kafka/kafka.service';

@Module({
  imports: [
    UserModule,
    SequelizeModule.forRoot({
      ...databaseConfig.development,
      autoLoadModels: true,
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConsulService, KafkaService],
})
export class AppModule {}
