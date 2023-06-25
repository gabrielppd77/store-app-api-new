import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { DatabaseModule } from '@infra/database/database.module';

import { UserController } from './controllers/user.controller';

import { UserCreate } from '@app/use-cases/user-create';
import { UserLogin } from '@app/use-cases/user-login';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
    }),
  ],
  controllers: [UserController],
  providers: [UserCreate, UserLogin],
})
export class HttpModule {}
