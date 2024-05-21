import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//Local authentication guard is created.

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
