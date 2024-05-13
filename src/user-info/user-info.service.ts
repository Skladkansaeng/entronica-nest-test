import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { UserInfo } from 'src/entities/user-info.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectRepository(UserInfo)
    private readonly userInfoRepository: Repository<UserInfo>,
  ) {}
  create(createUserInfoDto: CreateUserInfoDto) {
    return this.userInfoRepository.save(createUserInfoDto);
  }

  findAll() {
    return this.userInfoRepository.find({
      relations: {
        contactInfo: true,
        educationInfo: true,
        experienceInfo: true,
        skillInfo: true,
      },
    });
  }

  findOne(id: number) {
    return this.userInfoRepository.findOneOrFail({
      where: { id },
      relations: {
        contactInfo: true,
        educationInfo: true,
        experienceInfo: true,
        skillInfo: true,
      },
    });
  }

  update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return this.userInfoRepository.update(id, updateUserInfoDto);
  }

  remove(id: number) {
    return this.userInfoRepository.softDelete(id);
  }
}
