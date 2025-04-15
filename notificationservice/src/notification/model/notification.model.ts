import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'notifications' })
export class Notification extends Model {
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
  userId: string;

  @Column({
    type: DataType.ENUM('booking_confirmation', 'payment_success'),
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message: string;

  @Column({
    type: DataType.ENUM('pending', 'sent'),
    allowNull: false,
  })
  status: string;
}
