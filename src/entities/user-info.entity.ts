import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ContactInfo } from './contact-info.entity';
import { EducationInfo } from './education-info.entity';
import { ExperienceInfo } from './experience-info.entity';
import { SkillInfo } from './skill-info.entity';

@Entity()
export class UserInfo extends BaseEntity {
  @Column()
  username: string;

  @Column()
  nickname: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  position: string;

  @Column()
  nationality: string;

  @Column()
  telephoneNumber: string;

  @Column()
  startingDate: Date;

  @JoinColumn()
  @OneToOne(() => ContactInfo, {
    cascade: true,
  })
  contactInfo: ContactInfo;

  @OneToMany(() => EducationInfo, (educationInfo) => educationInfo.userInfo, {
    cascade: true,
  })
  educationInfo: EducationInfo[];

  @OneToMany(
    () => ExperienceInfo,
    (experienceInfo) => experienceInfo.userInfo,
    {
      cascade: true,
    },
  )
  experienceInfo: ExperienceInfo[];

  @OneToMany(() => SkillInfo, (skillInfo) => skillInfo.userInfo, {
    cascade: true,
  })
  skillInfo: SkillInfo[];

  @Column({
    type: 'json',
    nullable: true,
  })
  interestsInfo: string[];

  @Column({
    type: 'json',
    nullable: true,
  })
  guildInfo: string[];
}
