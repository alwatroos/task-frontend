/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
export interface ITransaction {
  id: number;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: Date;
  description: string;
}
