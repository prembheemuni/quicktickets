import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import ConsulService from './consul/consul.service';
import { ServerConfig } from './config/server.config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly consulService: ConsulService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  async serviceHealth() {
    let result = await this.consulService
      .getConsul()
      .catalog.service.nodes(ServerConfig.APPLICATION_SERVICE_NAME)
      .catch((err) => {
        throw new HttpException('Consul Error', HttpStatus.SERVICE_UNAVAILABLE);
      });

    const uniqueId = `${ServerConfig.APPLICATION_SERVICE_NAME}-${ServerConfig.PORT}`;
    const serviceNode =
      result && result.find((each) => each.ServiceID === uniqueId);
    const serviceUrl = `http://${serviceNode.ServiceAddress}:${serviceNode.ServicePort}`;
    return serviceUrl;
  }
}
