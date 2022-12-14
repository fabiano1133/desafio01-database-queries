import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from "../dtos";
import { User } from "../entities/User";

export interface IUsersRepository {
  findUserWithGamesById({ user_id }: IFindUserWithGamesDTO): Promise<User>;
  findAllUsersOrderedByFirstName(): Promise<User[]>;
  findUserByFullName(data: IFindUserByFullNameDTO): Promise<User[] | undefined>;
}
