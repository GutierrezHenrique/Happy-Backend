import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Orphanage from './Ophanage';

@Entity('images')
export default class Image {

    @PrimaryGeneratedColumn('increment')

    id: number;

    @Column()
    path: string;

    @ManyToOne (() => Orphanage, oprphanage => oprphanage.images)
    @JoinColumn({ name: 'orphanage_id'})
    orphanage: Orphanage;

}