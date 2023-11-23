export type CompanyType = {
  id: number;
  name: string;
  desc: string;
  img: string;
  url: string;
  address: string;
  contacts: string;
  userId: number;
};

export type CompanyFormType = Omit<CompanyType, 'id'>;
