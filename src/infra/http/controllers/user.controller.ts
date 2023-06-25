import { Body, Controller, Post } from '@nestjs/common';

import { CreateUser } from '@app/use-cases/create-user';

import { CreateUserBody } from '../dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private createUser: CreateUser) {}

  @Post('create')
  async create(@Body() body: CreateUserBody) {
    const { email, password } = body;

    await this.createUser.execute({
      email,
      password,
    });

    return {
      statusCode: 201,
      message: 'Usuário criado com sucesso.',
      data: null,
    };
  }
}
