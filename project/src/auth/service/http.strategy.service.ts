import { Injectable, UnauthorizedException } from "../../../node_modules/@nestjs/common";
import { PassportStrategy} from '@nestjs/passport';
import { ExtractJwt, Strategy} from 'passport-jwt';
import { AuthService } from './auth.service';

import { JwtPayload } from './../interface/jwt-payload.interface';

@Injectable()
export class HttpStrategy extends  PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey',
          });
    }

    async validate(token: JwtPayload, done: Function ) {
        const user = await this.authService.validateUser(token);
        if (!user){
            return done(new UnauthorizedException(), false);
        }
        done(null, user);
    }
}
