import { Injectable, ExecutionContext } from '@nestjs/common';

import { CatDto } from '../interface/cat.dto';
import { request } from 'http';

@Injectable()
export class CatsService{
    private readonly cats: CatDto[] = [];

    create(cat: CatDto){
        this.cats.push(cat);
    }

    getAll(){
        return this.cats;
    }
}