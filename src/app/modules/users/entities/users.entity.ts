import { IsOptional } from '@nestjs/class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../../../../infrastructure/adapters/models/roles.model';
import { IsEnum } from 'class-validator';

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

  @IsEnum(Role)
  @IsOptional()
  @Prop({ trim: true, enum: Role, default: Role.SELLER })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.toJSON = function () {
  const { _id, __v, password, createdAt, updatedAt, ...record } =
    this.toObject();

  return record;
};
