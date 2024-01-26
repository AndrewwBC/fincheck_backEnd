import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/user.repositories';
import { authenticateDto } from './dto/authenticate.dto';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async authenticate(authenticateDto: authenticateDto) {
    const { email, password } = authenticateDto;

    const user = this.usersRepo.findUnique({
      where: { email },
    });

    if (!user) throw new UnauthorizedException('Invalid Credentials');

    const resultOfHashComparison = (
      await compare(password, (await user).password)
    ).valueOf();

    if (!resultOfHashComparison) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    // if (compare(password, (await user).password))
    //   throw new UnauthorizedException();

    return user;
  }
}
