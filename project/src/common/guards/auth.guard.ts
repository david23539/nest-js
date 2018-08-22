import { Injectable, CanActivate, ExecutionContext } from '../../../node_modules/@nestjs/common';
import { Observable } from '../../../node_modules/rxjs';
import { Reflector } from '../../../node_modules/@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private readonly reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean{
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if ( !roles){
            return true;
        }

        const request = context.switchToHttp().getRequest();
        
        const user = request.user;
        
        const hasRole = () => user.roles.some((role) => roles.includes(role));
        return user && user.roles && hasRole();
    }
}
