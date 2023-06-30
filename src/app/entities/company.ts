import { Entity } from '@app/common/entities/entity';
import { Address } from './address';

interface CompanyProps {
  id?: string;
  userId: string;
  name: string;
  phone: string;
  description?: string;
  registrationNumber: string;
  businessName: string;
  responsibleFullName: string;
  responsibleRegistrationNumber: string;
}

export class Company extends Entity {
  // userId: string;
  name: string;
  phone: string;
  description?: string;
  registrationNumber: string;
  businessName: string;
  responsibleFullName: string;
  responsibleRegistrationNumber: string;
  address: Address;

  constructor(props: CompanyProps) {
    super(props.id);
    this.userId = props.userId;
    this.name = props.name;
    this.phone = props.phone;
    this.description = props.description;
    this.registrationNumber = props.registrationNumber;
    this.businessName = props.businessName;
    this.responsibleFullName = props.responsibleFullName;
    this.responsibleRegistrationNumber = props.responsibleRegistrationNumber;
  }
}
