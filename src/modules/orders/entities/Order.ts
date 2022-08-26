import {
  Entity,
  JoinTable,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/User";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => User, (user) => user.orders)
  @JoinTable()
  user_id: User[];
}
