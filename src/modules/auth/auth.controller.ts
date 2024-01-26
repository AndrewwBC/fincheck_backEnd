import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authenticateDto } from './dto/authenticate.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  async authenticate(@Body() authenticateDto: authenticateDto) {
    const { email, password } = authenticateDto;

    return this.authService.authenticate(authenticateDto);
  }
}
