import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produtos/entities/produtos.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categoria"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable:false})
    descricao: string 

    @OneToMany(() => Produto, (Produto) => Produto.id)
    produto: Produto[]
    produtos: any;
   
}