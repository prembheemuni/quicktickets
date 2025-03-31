import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'payments' })
export class Payment extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  bookingId: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.ENUM('initiated', 'completed', 'failed'),
    allowNull: false,
  })
  status: 'initiated' | 'completed' | 'failed';

  @Column({
    type: DataType.ENUM('credit_card', 'upi', 'net_banking'),
    allowNull: false,
  })
  paymentMethod: 'credit_card' | 'upi' | 'net_banking';
}
