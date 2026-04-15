import { Body, Controller, Post } from '@nestjs/common';
import { CreateTransaction } from './dto/transaction.dto'
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('newTransaction')
  newTransaction(@Body() transaction: CreateTransaction) {
    this.transactionService.newTransaction(transaction);
  }
}
