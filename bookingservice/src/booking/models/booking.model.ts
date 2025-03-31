import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'bookings' })
export class Booking extends Model {
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
    type: DataType.UUID,
    allowNull: false,
  })
  showdetailsId: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  seats: string[];

  @Column({
    type: DataType.ENUM('pending', 'confirmed', 'cancelled'),
    allowNull: false,
  })
  status: 'pending' | 'confirmed' | 'cancelled';

  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  paymentId?: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;
}
