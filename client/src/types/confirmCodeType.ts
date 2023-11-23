export type ConfirmCodeType = {
  id: number;
  randomString: string;
  userId: number;
};

export type ConfirmCodeFormType = Omit<ConfirmCodeType, 'id' | 'userId'>;
