import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.createNotification(createNotificationDto);
  }

  @Get()
  findAll() {
    return this.notificationService.findAllNotifications();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationService.findOneNotification(id);
  }
}
