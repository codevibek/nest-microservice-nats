import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [PaymentsController],
})
export class PaymentModule {}
