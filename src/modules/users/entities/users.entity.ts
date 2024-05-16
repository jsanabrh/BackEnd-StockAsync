import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ unique: true, trim: true })
  userIdentification: string;

  @Prop({ trim: true })
  userName: string;

  @Prop({ trim: true })
  userLastName: string;

  @Prop({ trim: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.toJSON = function () {
  const { _id, __v, password, createdAt, updatedAt, ...record } =
    this.toObject();

  return record;
};
