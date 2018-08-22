
import { Injectable, PipeTransform, ArgumentMetadata } from '../../../node_modules/@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        return value;
    }
}