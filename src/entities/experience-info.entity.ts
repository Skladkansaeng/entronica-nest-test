import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserInfo } from './user-info.entity';
import { ApiHideProperty } from '@nestjs/swagger';

@Entity()
export class ExperienceInfo extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @Column()
  roles: string;

  @ApiHideProperty()
  @ManyToOne(() => UserInfo)
  userInfo: UserInfo;
}
