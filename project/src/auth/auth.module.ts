import { Module, Global } from '@nestjs/common';

import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';

@Global()
@Module({
    controllers: [AuthController],
    providers: [UserService, AuthService],
})

export class AuthModule {}