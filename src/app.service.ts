import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  introduction(): string {
    return 'Hello World!';
  }
}
