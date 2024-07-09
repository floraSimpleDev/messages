import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from 'src/messages/dtos/create-message.dto';
import { MessagesService } from './messages.service';

// @Controller is a class decorator
@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // Service is creating its own dependencies.
    // DON'T DO THIS ON REAL APPS
    this.messagesService = new MessagesService();
  }

  // @Get, @Post are method decorators; @Body, @Param are argument decorators
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    // readFile need some amount of time
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
