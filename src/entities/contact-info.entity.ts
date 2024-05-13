import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class ContactInfo extends BaseEntity {
  @Column('text')
  address: string;

  @Column()
  subDistrict: string;

  @Column()
  district: string;

  @Column()
  province: string;

  @Column()
  postalCode: string;

  @Column()
  facebook: string;

  @Column()
  lineId: string;

  @Column()
  instagram: string;
}
