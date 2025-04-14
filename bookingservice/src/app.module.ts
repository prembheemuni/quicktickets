import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config/booking.config';

@Module({
  imports: [
    BookingModule,
    SequelizeModule.forRoot({
      ...databaseConfig.development,
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
