import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { IUser, IUserAuthenticated } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users/schema/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(User.name) private readonly userService: Model<User>,
  ) { }

  async login(authorization: string) {
    const AUTH_URL = process.env.AUTH_URL;
    try {
      const loginResponse = await firstValueFrom(this.httpService.get<IUserAuthenticated>(AUTH_URL, {
        headers: { Authorization: `${authorization}` }
      }));

      this.checkIfRegistered(loginResponse.data, true);

      const config = await this.getUserConfiguration(loginResponse.data);

      const user: IUser = {
        email: loginResponse.data.email,
        name: loginResponse.data.name,
        picture: loginResponse.data.picture,
        ...config
      };

      return user;
    } catch (error) {
      console.log('error: ', error);
    }
  }

  async checkIfRegistered(user: IUserAuthenticated, register = false) {
    const searchedUser = await this.userService.findOne({ email: user.email });
    if (!searchedUser && register) {
      this.register(user);
    }

    return !!searchedUser;
  }

  private register(user: IUserAuthenticated) {
    this.userService.create({
      email: user.email,
      name: user.name,
      picture: user.picture
    });
  }

  private async getUserConfiguration(user: IUserAuthenticated) {
    const defaultConfig = {
      configuration: {
        spotifyId: null
      }
    };

    const searchedUser = await this.userService.findOne({ email: user.email });

    if (!searchedUser)
      return defaultConfig;

    return {
      configuration: {
        spotifyId: !!searchedUser.spotifyId ? searchedUser.spotifyId : null
      }
    }
  }
}
