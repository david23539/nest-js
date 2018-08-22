import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useStaticAssets('client', {redirect : false});
  /*Aqui podremos utilizar middleware de forma tradicional
    app.use(logger);
    app.use(helmet());
    ...
  */
  await app.listen(3000);
}
bootstrap();
