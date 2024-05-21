import { Injectable } from '@nestjs/common';
import { hashingService } from './hashing.service';
import { compare, genSalt, hash } from 'bcrypt';

//The hash method is provided to encrypt the password and the compare method to compare the entered values, allowing for the hashing and verification of passwords.

@Injectable()
export class bcryptService implements hashingService {
  async hash(data: string | Buffer): Promise<string> {
    const salt = await genSalt();
    return hash(data, salt);
  }

  compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    return compare(data, encrypted);
  }
}
