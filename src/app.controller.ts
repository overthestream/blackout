import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import type { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiTags('health-check')
  @ApiResponse({
    status: 200,
    description: 'health check',
    type: 'Hello World!',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
