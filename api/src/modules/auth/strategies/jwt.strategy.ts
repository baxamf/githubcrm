import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AppConfig } from 'src/config/app.config';
import { ConfigName } from 'src/config/config-names.enum';
import { JwtUserPayload } from 'src/common/types';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const cfg = configService.get<AppConfig>(ConfigName.APP);

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: cfg.jwtSecret,
    });
  }

  async validate(payload: JwtUserPayload) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { email: payload.email },
    });

    return user;
  }
}
