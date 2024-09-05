import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Rikson Pablo\'s Backend Test")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  introduction(): string {
    return this.appService.introduction();
  }
}
