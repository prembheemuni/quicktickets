import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';

import { MongooseModule } from '@nestjs/mongoose';
import { ServerConfig } from './common/config/server.config';
import ConsulService from './consul/consul.service';

@Module({
  imports: [MovieModule, MongooseModule.forRoot(ServerConfig.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService, ConsulService],
})
export class AppModule {}
