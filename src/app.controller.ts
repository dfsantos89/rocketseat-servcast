import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import type { Data, Episode } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Data {
    return this.appService.getData();
  }
  
  @Get('episodes')
  getEpisodes(): Episode[] {
    return this.appService.getEpisodes();
  }
  
  @Get('episodes/:id')
  getEpisode(@Param('id') id: string): Episode {
    return this.appService.getEpisode(id);
  }
}
