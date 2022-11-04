import { Injectable } from '@nestjs/common';
import { table } from 'console';
import { ProdutoController } from './produtos/controller/produtos.controller';

@Injectable()
export class AppService {
  getCategoria(): string {
    return 'ação, moba, FPS, plataforma, battle royale, luta';
  }
  getFps(): string {
    return 'Battlefield, Call of Duty, Medal of Honor';
  }
  getAcao(): string{
    return 'Devil May Cry, God of War, resident evil'
  }
  getMoba(): string{
    return 'LOL, Dota 2, Arena Of Valor'
  }
  getPlataforma(): string{
    return 'Mario, Sonic, Ori, MegaMan, Castlevania'
  }
  getBR(): string{
    return 'PUBJ, Fortnite, Realm Royale'
  }
  getLuta(): string{
    return 'The King of Figthers, Mortal Kombat, Street Figther, Multiversus, Injustice, DragonBall FigtherZ'
  }


}
