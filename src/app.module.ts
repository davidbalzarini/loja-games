import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaController } from './categoria/controller/categoria.controller';
import { Categoria } from './categoria/entities/categoria.entity';
import { ProdutoController } from './produtos/controller/produtos.controller';
import { Produto } from './produtos/entities/produtos.entity';
import { ProdutoModule } from './produtos/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_lojagamer',
      entities: [Produto, Categoria],
      synchronize: true
    }),
      ProdutoModule,
      CategoriaModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }