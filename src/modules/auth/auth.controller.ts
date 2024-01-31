import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authenticateDto } from './dto/authenticate.dto';
import { signupDto } from './dto/signup.dto';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  async authenticate(@Body() authenticateDto: authenticateDto) {
    const { email, password } = authenticateDto;

    return this.authService.authenticate(authenticateDto);
  }

  @Post('/signup')
  async signup(@Body() signupDto: signupDto) {
    const { email, password } = signupDto;

    return this.authService.signup(signupDto);
  }
}
