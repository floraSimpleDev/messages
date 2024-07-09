import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from 'src/messages/dtos/create-message.dto';

// @Controller is a class decorator
@Controller('messages')
export class MessagesController {
  // @Get, @Post are method decorators; @Body, @Param are argument decorators
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
