import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Currency } from '../interfaces/wallet.interface';
import { UserEntity } from '@/user/entities/User.entity';

@Entity()
export class WalletEntity {
  @PrimaryGeneratedColumn()
  walletId: string;

  @ManyToOne(() => UserEntity)
  userOwner: string;

  @Column()
  name: string;

  @Column()
  balance: number;

  @Column()
  currency: Currency;
}
