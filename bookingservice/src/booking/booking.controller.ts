import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.createBooking(createBookingDto);
  }

  @Get()
  findAll() {
    return this.bookingService.getAllBookings();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const booking = await this.bookingService.getBookingById(id);
    if (booking === null) {
      throw new NotFoundException();
    }
    return booking;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    const booking = await this.bookingService.updateBookingById(
      id,
      updateBookingDto,
    );
    if (booking === null) {
      throw new NotFoundException();
    }
    return booking;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const booking = this.bookingService.removeBookingById(id);
    if (booking === null) {
      throw new NotFoundException();
    }
    return booking;
  }
}
