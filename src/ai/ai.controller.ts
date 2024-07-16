import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';
import { CreateChatDto } from './dtos/create-chat.dto';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}
  @Post()
  create(@Body() chatData: CreateChatDto) {
    return this.aiService.createImage(chatData);
  }
}
