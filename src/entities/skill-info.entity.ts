import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserInfo } from './user-info.entity';
import { ApiHideProperty } from '@nestjs/swagger';

@Entity()
export class SkillInfo extends BaseEntity {
  @Column()
  name: string;

  @Column()
  level: number;

  @ApiHideProperty()
  @ManyToOne(() => UserInfo)
  userInfo: UserInfo;
}
