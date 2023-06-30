import { CompanyCreate } from './company-create';

describe('CompanyCreate', () => {
  it('should be able to create an company', async () => {
    const companyCreate = new CompanyCreate();

    const companyToCreate = {
      userId: '1234',
      businessName: 'bussiness company name',
      description: 'sold foods',
      name: 'name of company',
      phone: '32988887777',
      registrationNumber: '25335282000109',
      responsibleFullName: 'name of responsible',
      responsibleRegistrationNumber: '12353264323',
    };

    const companyCreated = await companyCreate.execute(companyToCreate);

    expect(companyCreated.id).toBeDefined();
    expect(companyCreated.businessName).toEqual(companyToCreate.businessName);
    expect(companyCreated.description).toEqual(companyToCreate.description);
    expect(companyCreated.name).toEqual(companyToCreate.name);
    expect(companyCreated.phone).toEqual(companyToCreate.phone);
    expect(companyCreated.registrationNumber).toEqual(
      companyToCreate.registrationNumber,
    );
    expect(companyCreated.responsibleFullName).toEqual(
      companyToCreate.responsibleFullName,
    );
    expect(companyCreated.responsibleRegistrationNumber).toEqual(
      companyToCreate.responsibleRegistrationNumber,
    );
    expect(companyCreated.userId).toEqual(companyToCreate.userId);
  });
});
