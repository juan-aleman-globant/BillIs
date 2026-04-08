export type WalletID = string;

export enum Currency {
  USD,
  ARS,
}

export interface IWallet {
  id: WalletID;
  // userOwner: string;??
  name: string;
  balance: number;
  currency: Currency;
}
