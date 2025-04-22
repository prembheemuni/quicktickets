import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Showdetails {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  movieId: string;

  @Prop({ required: true })
  cinemaLocation: string;

  @Prop({ required: true })
  startTime: Date;

  @Prop({ required: true })
  availableSeats: number;
}

@Schema()
export class Movie {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  genre: string[];

  @Prop({ required: true })
  language: string;

  @Prop({ type: [Showdetails], required: true })
  showdetails: Showdetails[];
}

export const ShowdetailsSchema = SchemaFactory.createForClass(Showdetails);
export const MovieSchema = SchemaFactory.createForClass(Movie);
export type ShowdetailsDocument = HydratedDocument<Showdetails>;
export type MovieDocument = HydratedDocument<Movie>;
