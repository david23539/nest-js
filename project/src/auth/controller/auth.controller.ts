import { Controller, Get, UseGuards } from "../../../node_modules/@nestjs/common";
import { AuthService } from './../service/auth.service';
import {AuthGuard} from '@nestjs/passport';


@Controller('auth')

export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Get('/token')
    async createToken(): Promise<any> {
        return await this.authService.createToken();
    }

    @Get('/data')
    @UseGuards(AuthGuard('jwt'))
    findAll(){
        return 'datos';
    }
}