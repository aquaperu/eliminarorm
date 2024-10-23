import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyormModule, useFactoryService } from './myorm/myorm.module';
import { Myorm1Service } from './myorm/myorm1.service';
import { MyormService } from './myorm/myorm.service';


import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    /*ConfigModule.forRoot({
      load:[configLoader],
      validationSchema:envSchema
    }),*/
    MyormModule.foreature()

  ],
  controllers: [AppController],
  providers: [
    AppService,
    
    //MyormService
    /*{
      provide: MyormService,
      useFactory: (model: MyormService) =>new Myorm1Service(),
      inject: [MyormService],
    }*/
  ],
})
export class AppModule {}
