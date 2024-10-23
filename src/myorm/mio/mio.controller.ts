import { Controller, Get, Inject } from '@nestjs/common';
import { MyormService } from '../myorm.service';
import { ConfigService, useFactoryService } from '../myorm.module';

@Controller('mio')
export class MioController {
   constructor(@Inject("MACHO") private readonly my:useFactoryService){}
@Get('haer')
  getHello(): string {
    return this.my.conect()
  }
}
