import { Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "../../games/entities/Game";

export class Genre {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Game, (game) => game.genres)
  @JoinTable()
  games: Game;
}
