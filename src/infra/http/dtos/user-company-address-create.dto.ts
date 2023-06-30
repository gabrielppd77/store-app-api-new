import { Type } from 'class-transformer';
import {
  ValidateNested,
  MaxLength,
  IsEmail,
  Length,
  IsNumber,
} from 'class-validator';

class UserCreateDTO {
  @MaxLength(55)
  @IsEmail()
  email: string;
  @Length(4, 20)
  password: string;
}

class AddressCreateDTO {
  @Length(8)
  cep: string;
  @Length(2)
  state: string;
  @MaxLength(55)
  city: string;
  @MaxLength(55)
  neighborhood: string;
  @MaxLength(255)
  address: string;
  @IsNumber()
  number: number;
  @MaxLength(255)
  complement?: string;
}

class CompanyCreateDTO {
  @MaxLength(55)
  name: string;
  @Length(10, 11)
  phone: string;
  @MaxLength(255)
  description: string;
  @Length(14)
  registrationNumber: string;
  @MaxLength(55)
  businessName: string;
  @MaxLength(55)
  responsibleFullName: string;
  @Length(11)
  responsibleRegistrationNumber: string;
}

export class UserCompanyAddressCreateDTO {
  @ValidateNested()
  @Type(() => UserCreateDTO)
  user: UserCreateDTO;
  @ValidateNested()
  @Type(() => AddressCreateDTO)
  address: AddressCreateDTO;
  @ValidateNested()
  @Type(() => CompanyCreateDTO)
  company: CompanyCreateDTO;
}
