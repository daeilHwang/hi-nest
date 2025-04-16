import { Controller, Get, Param, Post, Delete, Put, Body, Patch, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    // 생성자 파라미터 프로퍼티, 생성자 매개변수 앞에 private, public, readonly 등을 붙이면 그게 자동으로 클래스의 멤버변수가 된다!
    // 생성자 파라미터 프로퍼티는 타입스크립트의 기능임
    constructor(private readonly moviesService: MoviesService) {
        
    }

    @Get()
    getAll() {
        return this.moviesService.getAll();
    }

    // id 파라미터 이름은 같아야함.
    @Get(":id")
    getOne(@Param('id') movieId: number) {
        console.log(typeof movieId);
        
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    delete(@Param("id") movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(":id")
    patch(@Param("id") movieId: number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData)
    }
}
