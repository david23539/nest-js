import { CatsController } from './cats.controller';
import { CatsService } from './../service/cat.service';
import { async } from '../../../node_modules/rxjs/internal/scheduler/async';
import { Test } from '@nestjs/testing';
import { CreateCatDto } from '../dto/crete-cat.dto';
import { CreateCatDto } from './../dto/crete-cat.dto';

describe('CatsController', () => {
    let catsController: CatsController;
    let catsService: CatsService;
    let createCatDto: CreateCatDto;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [CatsController],
            providers: [CatsService],
          }).compile();
        catsService = module.get<CatsService>(CatsService);
        catsController = module.get<CatsController>(CatsController);
        createCatDto = new CreateCatDto();
    });

    describe('finAll', () => {
        it('sould return an array of cats', async () => {
            const result = ['test'];
            jest.spyOn(catsService, 'getAll').mockImplementation(() => result);

            expect(await catsController.getAllCats()).toBe(result);
        });

        it('should return code', async () => {
            expect(await catsController.cahngeCodeResponse()).toBe('Esta accion añade un nuevo gato con codigo 204');
        })
        it('should return withoutCache', async () => {
            expect(await catsController.withoutCache()).toBe('Sin cache');
        })

        it('should return finAll', async () => {
            expect(await catsController.finAll()).toBe('This action returns all cats');
        })
        
        it('should return create', async () => {
            expect(await catsController.create()).toBe('Esta accion añade un nuevo gato');
        })
        it('should return findOneCat', async () => {
            const params = {id: 12};
            expect(await catsController.findOneCat(params)).toBe('el id es' + params.id);
        })
        it('should return create2', async () => {
            const result = [];
            jest.spyOn(catsService, 'create').mockImplementation(() => result);
            expect(await catsController.create2(createCatDto)).toBe(result);
        })
        
        it('should return findOneCatID', async () => {
            const result = {id: 1};
            
            expect(await catsController.findOneCatID(createCatDto)).toBe('el id es' + result);
        })
    });
});
