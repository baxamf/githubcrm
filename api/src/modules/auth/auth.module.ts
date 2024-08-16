import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LoginGuard } from './guards/login.guard';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { AuthenticateUserUseCase } from './use-cases/authenticate-user.use-case';
import { LogoutUserUseCase } from './use-cases/logout-user.use-case';

@Module({
  imports: [PassportModule, JwtModule.register({})],
  providers: [
    AuthResolver,
    AuthService,
    JwtStrategy,
    JwtRefreshStrategy,
    JwtAuthGuard,
    JwtRefreshGuard,
    LoginGuard,
    AuthenticateUserUseCase,
    LogoutUserUseCase,
  ],
  exports: [AuthenticateUserUseCase],
})
export class AuthModule {}
