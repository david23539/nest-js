import { Injectable } from '@nestjs/common';

import { CatDto } from '../interface/cat.dto';

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