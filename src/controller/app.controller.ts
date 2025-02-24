import { Controller, Get, Query, UseFilters } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from '../services/app.service';
import { MarvelQueryParamsDto } from '../dto/query-params.dto';
import { HttpExceptionFilter } from '../filters/http-exception.filter';

@ApiTags('Marvel')
@Controller('api')
@UseFilters(new HttpExceptionFilter())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('characters')
  @ApiOperation({ summary: 'Obtener lista de personajes de Marvel' })
  async getCharacterList(@Query() query: MarvelQueryParamsDto) {
    return await this.appService.getHeroes(query);
  }
}
