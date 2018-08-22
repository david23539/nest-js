
import { Module, Global } from '@nestjs/common';
import { CatsService } from './service/cat.service';
import { CatsController } from './controller/cats.controller';
/**
 * El @Global()decorador hace que el módulo tenga un alcance global.
 * Los módulos globales se registrarán solo una vez , en el mejor de los casos,
 * mediante el módulo raíz o núcleo. Después, el CatsServiceproveedor será omnipresente,
 * aunque CatsModuleno será importado.
 */
@Global()/*De esta manera convertimos el modulo en un modulo global*/
@Module({
   controllers: [CatsController],
   providers: [CatsService],
   exports: [CatsService], /*esto hace que el service se pueda ser usado en otro modulo importando este mismo*/
})
export class CatsModule {}
