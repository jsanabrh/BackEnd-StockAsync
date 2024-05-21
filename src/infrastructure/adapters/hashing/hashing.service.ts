import { Injectable } from '@nestjs/common';

//The interface for the application's hashing services is defined so that wherever it is implemented, the hash and compare methods are followed.

@Injectable()
export abstract class hashingService {
  abstract hash(data: string | Buffer): Promise<string>;
  abstract compare(data: string | Buffer, encrypted: string): Promise<boolean>;
}
