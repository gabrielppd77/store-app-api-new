import { Body, Controller, Post } from '@nestjs/common';

import { UserCreate } from '@app/use-cases/user-create';
import { UserLogin } from '@app/use-cases/user-login';

import { UserCreateDTO } from '../dtos/user-create.dto';
import { UserLoginDTO } from '../dtos/user-login.dto';

@Controller('user')
export class UserController {
  constructor(private userCreate: UserCreate, private userLogin: UserLogin) {}

  @Post('create')
  async create(@Body() body: UserCreateDTO) {
    const { email, password } = body;

    await this.userCreate.execute({
      email,
      password,
    });

    return {
      statusCode: 201,
      message: 'Usuário criado com sucesso.',
      data: null,
    };
  }

  @Post('login')
  async login(@Body() body: UserLoginDTO) {
    const { email, password } = body;

    const { access_token } = await this.userLogin.execute({
      email,
      password,
    });

    return {
      statusCode: 201,
      message: 'Usuário logado com sucesso.',
      data: { access_token },
    };
  }
}
