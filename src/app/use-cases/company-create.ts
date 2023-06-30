import { Injectable } from '@nestjs/common';

import { Company } from '@app/entities/company';

interface Request {
  userId: string;
  name: string;
  phone: string;
  description: string;
  registrationNumber: string;
  businessName: string;
  responsibleFullName: string;
  responsibleRegistrationNumber: string;
}

type Response = Company;

@Injectable()
export class CompanyCreate {
  execute(req: Request): Response {
    const {
      userId,
      name,
      phone,
      description,
      registrationNumber,
      businessName,
      responsibleFullName,
      responsibleRegistrationNumber,
    } = req;

    const company = new Company({
      userId,
      name,
      phone,
      description,
      registrationNumber,
      businessName,
      responsibleFullName,
      responsibleRegistrationNumber,
    });

    return company;
  }
}
