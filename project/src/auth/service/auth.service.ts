import { Injectable } from '../../../node_modules/@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from './../interface/jwt-payload.interface';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
    constructor( private readonly userService: UserService) {}

    async createToken(){
        const user: JwtPayload = {email: 'test@email.com'};
        return jwt.sign(user, 'secretKey', {expiresIn: 3600});
    }

    async validateUser(token: JwtPayload): Promise<any> {
        return await this.userService.findOneByToken(token);
    }

}