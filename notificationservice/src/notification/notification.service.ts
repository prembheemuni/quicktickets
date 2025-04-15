import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Notification } from './model/notification.model';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification)
    private readonly notificationService: typeof Notification,
  ) {}
  async createNotification(
    notification: CreateNotificationDto,
  ): Promise<Notification> {
    return await this.notificationService.create({ ...notification });
  }

  async findAllNotifications(): Promise<Notification[]> {
    return await this.notificationService.findAll();
  }

  async findOneNotification(id: string): Promise<Notification | null> {
    return await this.notificationService.findOne({ where: { id: id } });
  }
}
