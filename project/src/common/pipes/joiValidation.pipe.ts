import * as Joi from 'joi';
import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException} from '../../../node_modules/@nestjs/common';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
    private readonly schema = Joi.object().keys({
        name: Joi.string().alphanum().required(),
        age: Joi.number().integer().min(0).max(50),
        breed: Joi.string().required(),
    });
    constructor() {}
    transform(value: any, metadata: ArgumentMetadata) {

        const { error } = Joi.validate(value, this.schema);
        if (error){
            throw new BadRequestException('Validation failed');
        }
        return value;
    }
}
/**
 * Para otro tipo de validaciones como por ejemplo en anotacion en un dto ver la documentacion
 * de Nest.js https://docs.nestjs.com/pipes
 * Ejemplos @IsString(), @IsBoolean...
 * la libreria a instalar sería:
 * 'npm i --save class-validator class-transformer'
 */