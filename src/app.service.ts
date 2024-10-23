import { Inject, Injectable } from '@nestjs/common';
import { MyormService } from './myorm/myorm.service';

@Injectable()
export class AppService {
  //constructor(@Inject("myorm") private readonly my:MyormService){}
  getHello(): string {
    return 'Hello World!';
  }
}
