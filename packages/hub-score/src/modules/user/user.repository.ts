// import { Injectable, Logger } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';

// import { User } from './user.entity';
// import { UserDto, UserSignUpDto } from './user.dto';
// import { FindOptionsWhere, Repository } from 'typeorm';

// @Injectable()
// export class UserRepository {
//   private readonly logger = new Logger(UserRepository.name);

//   constructor(
//     @InjectRepository(User)
//     private readonly userEntityRepository: Repository<User>,
//   ) {}

//   public async updateOne(
//     where: FindOptionsWhere<User>,
//     dto: Partial<UserSignUpDto>,
//   ): Promise<User> {
//     const userEntity = await this.userEntityRepository.findOneBy(where);

//     if (!userEntity) {
//       this.logger.log('none');
//       throw new Error();
//     }

//     Object.assign(userEntity, dto);
//     return userEntity.save();
//   }

//   public async findOne(
//     where: FindOptionsWhere<UserEntity>,
//     options?: FindOneOptions<UserEntity>,
//   ): Promise<UserEntity | null> {
//     const userEntity = await this.userEntityRepository.findOne({
//       where,
//       ...options,
//     });

//     return userEntity;
//   }

//   public find(
//     where: FindOptionsWhere<UserEntity>,
//     options?: FindManyOptions<UserEntity>,
//   ): Promise<UserEntity[]> {
//     return this.userEntityRepository.find({
//       where,
//       order: {
//         createdAt: 'DESC',
//       },
//       ...options,
//     });
//   }

//   public async create(dto: UserDto): Promise<UserEntity> {
//     return this.userEntityRepository.create(dto).save();
//   }
// }