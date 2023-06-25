import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';

import { UserController } from './controllers/user.controller';

import { CreateUser } from '@app/use-cases/create-user';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUser],
})
export class HttpModule {}
