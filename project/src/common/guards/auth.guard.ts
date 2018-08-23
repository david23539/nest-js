import { Injectable, CanActivate, ExecutionContext } from '../../../node_modules/@nestjs/common';
import { Observable } from '../../../node_modules/rxjs';
import { Reflector } from '../../../node_modules/@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean{
        const roles = this.reflector.get<string[]>('roles', context.getHandler()); /*Esta funcion requpera el privilegio necesario de la operacion*/
        const request = context.switchToHttp().getRequest(); /*Esta funcion recupera la request del contexto */
        const user = request.user;

        if (roles && roles.toString() === user){
            return true;
        }else if ( !roles) {
            return true;

        }else{
            return false; /* En este caso devuelve un forbiden*/
        }
    }
}
