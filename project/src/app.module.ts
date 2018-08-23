import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(LoggerMiddleware) /*Aqui separado por comas pondremos todos los middleware que queramos cors(), helmet() */
      .exclude({path: 'cats', method: RequestMethod.GET}) /*Esto lo que hara es escluir las rutas GET*/
      .forRoutes('cats'); /*Si queremos que sea global a toda las rutas de cats*/
      /*.forRoutes({path: 'cats', method: RequestMethod.GET}); /*Solo para las get de cats*/
      /**
       * si queremos pasarle un dato especifico al middleware hay que modificar el contructor del middleware
       * y añadir aqui '.with('ApplicationModule')' donde ApplicationModule es un string
       * pero podemos pasarle cualquier cosa.
       * Ver comentarios del middleware
       * Ver comentarios en Main.ts
       */
  }
}
