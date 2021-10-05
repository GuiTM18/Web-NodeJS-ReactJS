import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Produtos{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    title: string;

    @Column()
    tipo_produto: string;

    @Column()
    valor_produto: number;

    @Column()
    qntd_produto: number;
 
    @Column()
    descricao: string;
 
    @Column({
        default: false
    })
    vendido: boolean;
 
    @CreateDateColumn()
    create_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;
}
