import { Injectable, NestMiddleware, MiddlewareFunction } from '../../../node_modules/@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction {
        return (req, res, next) => {
            console.log('Request....');
            next();
        };
    }

    /* si en el module le hemos pasado algun dato al middleware el resolve cambiara
    por ejemplo si hemos pasado un string cambiara de la siguiente forma
    'resolve(name: string)'
    NOTA IMPORTANTE:
    crearemos un middleware funcional si no tenemos que hacer uso de dependencias de
    la siguinete forma
    ----------------------------------------
    export function logger(req, res, next) {
        console.log(`Request...`);
        next();
    };
    ----------------------------------------
    */
}