import { Model, DataType, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './User';

@Table({
  modelName: 'Post',
})
    
export default class Post extends Model<Post> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  postId: string;
    
  @ForeignKey(() => User)
  @Column(
   {    type: DataType.UUID,}
  )
  userId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'here should be your post'
  })
  content: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  rating: number;

   @BelongsTo(() => User)
  user: User;

}


