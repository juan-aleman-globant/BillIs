import { Currency } from '../interfaces/wallet.interface';

export class CreateWalletDto {
  name: string;
  balance: number;
  description: string;
  userOwner: string;
  currency: Currency;
}

export class UpdateWalletDto {
  name?: string;
  balance?: number;
  description?: string;
}
