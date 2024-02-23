import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentsDto } from './dtos/createPayment.dto';

@Controller()
export class PaymentsController {
  @EventPattern('createuser')
  createUser(@Payload() data: CreatePaymentsDto) {
    console.log(data);
    return data;
  }
}
