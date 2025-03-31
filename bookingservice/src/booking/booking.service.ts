import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './models/booking.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking) private readonly bookingModel: typeof Booking,
  ) {}

  async getAllBookings(): Promise<Booking[]> {
    return await this.bookingModel.findAll();
  }

  async createBooking(booking: CreateBookingDto): Promise<Booking> {
    return await this.bookingModel.create({
      ...booking,
    });
  }

  async getBookingById(id: string): Promise<Booking | null> {
    return await this.bookingModel.findOne({ where: { id: id } });
  }

  async updateBookingById(
    id: string,
    booking: UpdateBookingDto,
  ): Promise<[number, Booking[]] | null> {
    return await this.bookingModel.update(
      { ...booking },
      { where: { id: id }, returning: true },
    );
  }

  async removeBookingById(id: string): Promise<number> {
    return await this.bookingModel.destroy({ where: { id: id } });
  }
}
