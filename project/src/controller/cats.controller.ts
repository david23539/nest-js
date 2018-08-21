import { Controller, Get} from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    finAll(){
        return 'This action returns all cats';
    }
}
