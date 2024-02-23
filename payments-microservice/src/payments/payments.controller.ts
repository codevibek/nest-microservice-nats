import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentsDto } from './dtos/createPayment.dto';

@Controller()
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}
  @EventPattern('createuser')
  createUser(@Payload() data: CreatePaymentsDto) {
    this.natsClient.emit('paymentCreated', CreatePaymentsDto);
    console.log(data);
    return data;
  }
}
