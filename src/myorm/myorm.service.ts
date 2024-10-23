import { Injectable } from '@nestjs/common';


export class MyormService {
    constructor(private readonly uri){}
    metodomyorm(){
        return "my metodo de orm"
    }
}
