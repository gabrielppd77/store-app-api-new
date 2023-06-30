import { Entity } from '@app/common/entities/entity';

interface AddressProps {
  id?: string;
  companyId: string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  number: number;
  complement?: string;
}

export class Address extends Entity {
  // companyId: string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  number: number;
  complement?: string;

  constructor(props: AddressProps) {
    super(props.id);
    this.companyId = props.companyId;
    this.cep = props.cep;
    this.state = props.state;
    this.city = props.city;
    this.neighborhood = props.neighborhood;
    this.address = props.address;
    this.number = props.number;
    this.complement = props.complement;
  }
}
