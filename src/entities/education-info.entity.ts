import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserInfo } from './user-info.entity';
import { ApiHideProperty } from '@nestjs/swagger';

@Entity()
export class EducationInfo extends BaseEntity {
  @Column('text')
  name: string;

  @Column()
  year: number;

  @ApiHideProperty()
  @ManyToOne(() => UserInfo)
  userInfo: UserInfo;
}
