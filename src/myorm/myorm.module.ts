import { DynamicModule, Global, Injectable, Module, Provider } from '@nestjs/common';
import { ConfigurableModuleBuilder } from '@nestjs/common';

import { MyormService } from './myorm.service';
import { Myorm1Service } from './myorm1.service';
import { MioController } from './mio/mio.controller';

export interface ConfigServiceInterface{
  getDataBaseUrl():string

}

export class useFactoryService  {
  constructor(private readonly uri:string){  }
  conect(){
    console.log("conectado")
    return "hola"
  }
}

export class ConfigService{
  getDataBaseUrl(){
    return "la cadena de conexcion"
  }
}

@Global()
@Module({
  
})
export class MyormModule {
  static foreature():DynamicModule{
    return{
      module:MyormModule,
      providers:[
        ConfigService,
        {
          provide: "MACHO",
          useFactory: (model: ConfigService) => {
            const db = model.getDataBaseUrl()
            return new useFactoryService(db)
          },
          inject: [ConfigService]
        },

      ],
      controllers:[MioController],
      exports:[],
      imports:[]

    }

  }
  /*static forRootAsync(options: MongooseModuleAsyncOptions): DynamicModule {
    return {
      module: MyormModule,
      imports: [MongooseCoreModule.forRootAsync(options)],
    };
  }*/
}
/*
function createOrmProviders(
  options: ModelDefinition[] = [],
): Provider[] {
  return options.reduce(
    (providers, option) => [
      ...providers,
      ...(option.discriminators || []).map((d) => ({
        provide: getModelToken(d.name, connectionName),
        useFactory: (model: Model<Document>) =>
          model.discriminator(d.name, d.schema, d.value),
        inject: [getModelToken(option.name, connectionName)],
      })),
      {
        provide: getModelToken(option.name, connectionName),
        useFactory: (connection: Connection) => {
          const model = connection.models[option.name] ? connection.models[option.name] : connection.model(
            option.name,
            option.schema,
            option.collection,
          );
          return model;
        },
        inject: [getConnectionToken(connectionName)],
      },
    ],
    [] as Provider[],
  );
}*/
