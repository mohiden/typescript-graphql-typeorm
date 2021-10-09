import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

//added this to convert this enetity to graphql type
@ObjectType()
@Entity()
export class User {
  // added this so the graphql can reach it
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: "date" })
  createdAt: Date = new Date();

  @Field()
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field()
  @Property({ type: "text", unique: true })
  username!: string;

  // if we don't add @Field , graphql won't be able to see it.
  @Property({ type: "text" })
  password!: string;
}
