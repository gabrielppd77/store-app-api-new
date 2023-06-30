import { AddressCreate } from './address-create';

describe('AddressCreate', () => {
  it('should be able to create an address', async () => {
    const addressCreate = new AddressCreate();

    const addressToCreate = {
      companyId: '123',
      address: 'street jon doe',
      cep: '36500000',
      city: 'San Francisco',
      neighborhood: 'San Francisco Neighborhood',
      number: 12,
      state: 'NY',
      complement: 'complement of address',
    };

    const addressCreated = await addressCreate.execute(addressToCreate);

    expect(addressCreated.id).toBeDefined();
    expect(addressCreated.companyId).toEqual(addressToCreate.companyId);
    expect(addressCreated.address).toEqual(addressToCreate.address);
    expect(addressCreated.cep).toEqual(addressToCreate.cep);
    expect(addressCreated.city).toEqual(addressToCreate.city);
    expect(addressCreated.neighborhood).toEqual(addressToCreate.neighborhood);
    expect(addressCreated.number).toEqual(addressToCreate.number);
    expect(addressCreated.state).toEqual(addressToCreate.state);
    expect(addressCreated.complement).toEqual(addressToCreate.complement);
  });
});
