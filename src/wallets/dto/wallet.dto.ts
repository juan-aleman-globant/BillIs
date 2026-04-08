export class CreateWalletDto {
  name: string;
  balance: number;
  description: string;
}

export class UpdateWalletDto {
  name?: string;
  balance?: number;
  description?: string;
}
