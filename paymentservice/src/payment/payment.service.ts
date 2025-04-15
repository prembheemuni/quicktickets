import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './models/payment.model';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment) private readonly paymentModel: typeof Payment,
  ) {}

  async getAllPayments(): Promise<Payment[]> {
    return await this.paymentModel.findAll();
  }

  async createPayment(payment: CreatePaymentDto): Promise<Payment> {
    return await this.paymentModel.create({
      ...payment,
    });
  }

  async getPaymentById(id: string): Promise<Payment | null> {
    return await this.paymentModel.findOne({ where: { id: id } });
  }

  async updatePaymentById(
    id: string,
    payment: UpdatePaymentDto,
  ): Promise<[number, Payment[]] | null> {
    return await this.paymentModel.update(
      { ...payment },
      { where: { id: id }, returning: true },
    );
  }

  async removePaymentById(id: string): Promise<number> {
    return await this.paymentModel.destroy({ where: { id: id } });
  }
}
