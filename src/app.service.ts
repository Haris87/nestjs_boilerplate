import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): any {
    return { message: 'Hello World!' };
  }
}
