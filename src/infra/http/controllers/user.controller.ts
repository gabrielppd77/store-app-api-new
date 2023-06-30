import { Body, Controller, Post } from '@nestjs/common';

import { Public } from '@infra/http/decorators/public.decorator';

import { UserLogin } from '@app/use-cases/user-login';
import { UserCreate } from '@app/use-cases/user-create';
import { AddressCreate } from '@app/use-cases/address-create';
import { CompanyCreate } from '@app/use-cases/company-create';

import { UserLoginDTO } from '../dtos/user-login.dto';
import { UserCompanyAddressCreateDTO } from '../dtos/user-company-address-create.dto';

@Controller('user')
export class UserController {
  constructor(
    private userLogin: UserLogin,
    private userCreate: UserCreate,
    private addressCreate: AddressCreate,
    private companyCreate: CompanyCreate,
  ) {}

  @Public()
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

  @Public()
  @Post('create')
  async create(@Body() body: UserCompanyAddressCreateDTO) {
    const { user, address, company } = body;

    const addressCreated = this.addressCreate.execute(address);
    const company = this.companyCreate.execute(company);

    await this.userCreate.execute(user);

    return {
      statusCode: 201,
      message: 'Bem vindo!',
      data: null,
    };
  }
}
