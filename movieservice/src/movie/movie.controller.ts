import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getAllMovies() {
    return await this.movieService.getAllMovies();
  }

  @Post()
  async createMovie(@Body() movie: CreateMovieDto) {
    return await this.movieService.createNewMovie(movie);
  }

  @Patch(':id')
  async updateMovie(@Param('id') id: string, @Body() movie: UpdateMovieDto) {
    const updatedMovie = await this.movieService.updateMovie(id, movie);
    if (updatedMovie === null) {
      throw new NotFoundException('Movie not found');
    }
    return updatedMovie;
  }

  @Get(':id')
  async getMovieById(@Param('id') id: string) {
    const movie = await this.movieService.getMovieById(id);
    if (movie === null) {
      throw new NotFoundException('Movie not found');
    }
    return movie;
  }

  @Delete(':id')
  async deleteMovieById(@Param('id') id: string) {
    const movie = await this.movieService.deleteMovieById(id);
    if (movie === null) {
      throw new NotFoundException('Movie not found');
    }
    return movie;
  }
}
