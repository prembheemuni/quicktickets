import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import Consul from 'consul';
import { ServerConfig } from 'src/config/server.config';

@Injectable()
export default class ConsulService implements OnModuleInit, OnModuleDestroy {
  private consul: Consul;

  constructor() {
    this.consul = new Consul({
      host: ServerConfig.CONSUL_HOST,
      port: ServerConfig.CONSUL_PORT,
    });
  }

  async onModuleInit() {
    await this.registerService();
  }

  async onModuleDestroy() {
    await this.deRegisterService();
  }

  getConsul() {
    return this.consul;
  }

  private async registerService() {
    await this.consul.agent.service.register({
      id: `${ServerConfig.APPLICATION_SERVICE_NAME}-${ServerConfig.PORT}`,
      name: ServerConfig.APPLICATION_SERVICE_NAME,
      address: ServerConfig.APPLICATION_HOST_NAME,
      port: parseInt(ServerConfig.PORT as string),
      check: {
        name: ServerConfig.APPLICATION_SERVICE_NAME,
        interval: '10s',
        timeout: '5s',
        http: `http://${ServerConfig.APPLICATION_HOST_NAME}:${ServerConfig.PORT}/health`,
      },
    });
  }

  private async deRegisterService() {
    await this.consul.agent.service.deregister(
      ServerConfig.APPLICATION_SERVICE_NAME,
    );
  }
}
