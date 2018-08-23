import { Controller, Get, Req, Post, HttpCode, Header, Param, Body, UsePipes, UseGuards, ReflectMetadata, UseInterceptors} from '@nestjs/common';
import { CreateCatDto } from '../dto/crete-cat.dto';
import { CatsService } from '../service/cat.service';
import { JoiValidationPipe } from './../../common/pipes/joiValidation.pipe';
import { AuthGuard } from './../../common/guards/auth.guard';
import { Roles } from './../../common/decorator/roles.decorator';
import { LoggingInterceptor } from './../../common/interteptor/logging.interceptor';
import { TransformInterceptor } from './../../common/interteptor/transform.interceptor';
import { ExcludeNullInterceptor } from './../../common/interteptor/exclude.interceptor';

@Controller('cats')
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor, TransformInterceptor, ExcludeNullInterceptor)
export class CatsController {

    constructor(private readonly catService: CatsService){}

    @Get('/findAll')
    finAll(){
        return 'This action returns all cats';
    }
    @Get('/showRequest')
    findAll(@Req() req){
        return req.body;
    }

    @Post('/addCats')
    create(){
        /*Excepciones de error
        throw new HttpException('Forbiden', HttpStatus.FORBIDDEN);*/
        return 'Esta accion añade un nuevo gato';
    }

    /**
     * Código de estado
     * Como se mencionó, el código de estado de la respuesta es siempre 200 por defecto,
     *  excepto las solicitudes POST, cuando es 201 . Podemos cambiar fácilmente
     *  este comportamiento agregando el @HttpCode(...)decorador a nivel de manejador.
     */
    @Post('/addCats2')
    @HttpCode(204)
    cahngeCodeResponse(){
        return 'Esta accion añade un nuevo gato con codigo 204';
    }

    /**
     * Encabezados de respuesta
     * Para especificar un encabezado de respuesta personalizado,
     * puede usar un decorador @Header() o un objeto de solicitud específico de la biblioteca.
     */
    @Post('/addCats3')
    @Header('Cache-Control', 'none')
    withoutCache(){
        return 'Sin cache';
    }

    /**
     * Parámetros de ruta
     * Se utiliza el @Param para pasar parametros a funciones.
     * En este caso utilizaremos el protocolo Get
     */
    @Get('/findId:id')
    findOneCat(@Param() params){
        return 'el id es' + params.id;

    }

    /**
     * Para recoger un parámetro en particular, simplemente pase su nombre entre paréntesis.
     * El resultado debe ser el mismo que el anterior
     */
    @Get('/findId:id')
    findOneCatID(@Param('id') params){
        return 'el id es' + params;
    }

    /*FUNCIONES ASYNC Y AWAIT*/
    /**
     * Cada función asíncrona tiene que devolver a Promise.
     * Significa que puede devolver el valor diferido y Nest lo resolverá por sí mismo.
     * Puede ser valido para Mongo
     */
    @Get('asyncFunction')
    async findAllAs(): Promise<any[]>{
        return[];
    }

    /*CONSULTANDO UN SERVICE*/
    @Post('withCat')
    @Roles('admin')
    @UsePipes(new JoiValidationPipe())
    async create2(@Body() createCatDto: CreateCatDto){
        return await this.catService.create(createCatDto);
    }

    @Get('/getAllCats')
    async getAllCats(){
        return await this.catService.getAll();
    }
}
