import { Model, DataType, Table, Column, Index, HasMany } from 'sequelize-typescript';
import Post from './Post';

@Table({
  modelName: 'User',
})
    
export default class User extends Model<User> {
  
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Index({
    using: 'BTREE',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'John'
  })
  firstName: string;

    @Index({
    using: 'BTREE',
    order: 'ASC',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'Doe'
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  phoneNumber: string;

  @HasMany(() => Post)
   posts: Post[];
}


