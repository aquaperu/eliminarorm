import { Inject, Injectable } from '@nestjs/common';
import { MyormService } from './myorm.service';
import { useFactoryService } from './myorm.module';


export class Myorm1Service {
    //constructor(@Inject(useFactoryService.name)private readonly my:MyormService){}
    joder(){
       // this.my.metodomyorm()
    }
}

