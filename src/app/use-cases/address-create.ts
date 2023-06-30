import { Injectable } from '@nestjs/common';

import { Address } from '@app/entities/address';

interface Request {
  companyId: string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  number: number;
  complement?: string;
}

type Response = Address;

@Injectable()
export class AddressCreate {
  execute(req: Request): Response {
    const {
      companyId,
      cep,
      state,
      city,
      neighborhood,
      address,
      number,
      complement,
    } = req;

    const fullAddress = new Address({
      companyId,
      cep,
      state,
      city,
      neighborhood,
      address,
      number,
      complement,
    });

    return fullAddress;
  }
}
