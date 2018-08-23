import { Injectable } from '../../../node_modules/@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
    constructor(){}
    /**
     * En esta funcion habra que comprobar que el toquen se coresponde con el suyo 
     * @param token
     */
    async findOneByToken(token: any){
        jwt.decode(token, 'secretKey', (err, decoded) => {
            if ( err){
                return false;
            }else{
                return decoded;
            }
        });
    }
}