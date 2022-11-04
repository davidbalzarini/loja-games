import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoriaController } from './categoria/controller/categoria.controller';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/Categorias')
  getCategoria(): string {
    return this.appService.getCategoria();
  }
  @Get('/FPS')
  getFps(): string {
    return this.appService.getFps();
  }
  @Get('/acao')
  getAcao(): string {
    return this.appService.getAcao();
  }
  @Get('/MOBA')
  getMoba(): string {
    return this.appService.getMoba();
  }
  @Get('/Plataforma')
  getPlataforma(): string {
    return this.appService.getPlataforma();
  }
  @Get('/Battle' || '/Royalle' || 'Battle Royale')
  getBR(): string {
    return this.appService.getBR();
  }
  @Get('/Luta')
  getLuta(): string {
    return this.appService.getLuta();
  }


}
