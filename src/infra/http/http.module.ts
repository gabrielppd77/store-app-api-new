import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';
import { AuthModule } from '@infra/auth/auth.module';

import { UserController } from './controllers/user.controller';

import { UserLogin } from '@app/use-cases/user-login';
import { UserCreate } from '@app/use-cases/user-create';
import { AddressCreate } from '@app/use-cases/address-create';
import { CompanyCreate } from '@app/use-cases/company-create';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [UserController],
  providers: [UserLogin, UserCreate, AddressCreate, CompanyCreate],
})
export class HttpModule {}
