import { Entity } from '@app/common/entities/entity';

class UserProps {
  id?: string;
  email: string;
  password: string;
}

export class User extends Entity {
  email: string;
  password: string;

  constructor(props: UserProps) {
    super(props.id);
    this.email = props.email;
    this.password = props.password;
  }
}
