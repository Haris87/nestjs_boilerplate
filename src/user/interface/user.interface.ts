import { Document } from 'mongoose';

export interface User extends Document {
  readonly username: string;
  readonly age: number;
  readonly _id: string;
}
