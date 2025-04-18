import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { KafkaService } from 'src/kafka/kafka.service';

@Module({
  imports: [SequelizeModule.forFeature([User]), AuthModule],
  controllers: [UserController],
  providers: [UserService, KafkaService],
})
export class UserModule {}
