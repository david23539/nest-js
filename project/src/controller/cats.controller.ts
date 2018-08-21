import { Controller, Get, Req, Post, HttpCode} from '@nestjs/common';
import { create } from 'domain';

@Controller('cats')
export class CatsController {
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
        return 'Esta accion añade un nuevo gato';
    }

    @Post('/addCats2')
    @HttpCode(204)
    cahngeCodeResponse(){
        return 'Esta accion añade un nuevo gato con codigo 204';
    }
}
