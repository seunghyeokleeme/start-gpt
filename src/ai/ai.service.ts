import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';
import { CreateChatDto } from './dtos/create-chat.dto';

@Injectable()
export class AiService {
  private readonly openai: OpenAI;
  constructor(private readonly configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPEN_AI_KEY'),
    });
  }
  async createImage(chatData: CreateChatDto) {
    const { message: prompt } = chatData;
    const image = await this.openai.images.generate({
      model: 'dall-e-3',
      prompt,
    });

    return image.data;
  }
}
