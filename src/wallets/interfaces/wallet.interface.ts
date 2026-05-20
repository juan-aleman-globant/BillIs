export type WalletID = string;

export enum Currency {
  USD,
  ARS,
}

export interface IWallet {
  walletId: WalletID;
  userOwner: string;
  name: string;
  balance: number;
  currency: Currency;
}
