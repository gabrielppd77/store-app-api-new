import { Entity } from '@app/common/entities/entity';
import { Company } from './company';

interface UserProps {
  id?: string;
  email: string;
  password: string;
  company: Company;
}

export class User extends Entity {
  email: string;
  password: string;
  company: Company;

  constructor(props: UserProps) {
    super(props.id);
    this.email = props.email;
    this.password = props.password;
    this.company = props.company;
  }
}
