import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument } from './schema/movie.schema';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { v4 as uuidV4 } from 'uuid';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private readonly movieModel: Model<MovieDocument>,
  ) {}

  async getAllMovies(): Promise<MovieDocument[]> {
    return await this.movieModel.find().exec();
  }

  async createNewMovie(movie: CreateMovieDto): Promise<MovieDocument> {
    const newMovieId = uuidV4();
    const newMovie = new this.movieModel({
      ...movie,
      _id: newMovieId,
      showdetails: movie.showdetails.map((show) => ({
        ...show,
        movieId: newMovieId,
        _id: uuidV4(),
      })),
    });
    return newMovie.save();
  }

  async updateMovie(id: string, movie: UpdateMovieDto): Promise<MovieDocument> {
    return await this.movieModel
      .findByIdAndUpdate(id, movie, { new: true })
      .exec();
  }

  async getMovieById(id: string): Promise<MovieDocument | null> {
    return await this.movieModel.findById(id).exec();
  }

  async deleteMovieById(id: string): Promise<MovieDocument | null> {
    return await this.movieModel.findByIdAndDelete(id).exec();
  }
}
