import { ApiProperty } from '@nestjs/swagger';
import { IMarvelQueryParams, Order } from 'src/models/query-params.model';

export class MarvelQueryParamsDto implements Partial<IMarvelQueryParams> {
  @ApiProperty({ description: 'Nombre del héroe para buscar', required: false })
  name?: string;

  @ApiProperty({
    description: 'Prefijo del nombre del héroe para buscar',
    required: false,
  })
  nameStartsWith?: string;

  @ApiProperty({
    description: 'Fecha en la que el héroe fue modificado por última vez',
    required: false,
  })
  modifiedSince?: string;

  @ApiProperty({
    description: 'Lista de IDs de cómics para filtrar los héroes',
    required: false,
    type: [Number],
  })
  comics?: number[];

  @ApiProperty({
    description: 'Lista de IDs de series para filtrar los héroes',
    required: false,
    type: [Number],
  })
  series?: number[];

  @ApiProperty({
    description: 'Lista de IDs de eventos para filtrar los héroes',
    required: false,
    type: [Number],
  })
  events?: number[];

  @ApiProperty({
    description: 'Lista de IDs de historias para filtrar los héroes',
    required: false,
    type: [Number],
  })
  stories?: number[];

  @ApiProperty({
    description: 'Orden de clasificación para los héroes',
    required: false,
    enum: ['name', 'modified', '-name', '-modified'],
    isArray: true,
  })
  orderBy?: Order[];

  @ApiProperty({
    description: 'Límite de elementos de resultado',
    example: 20,
    required: false,
  })
  limit?: number;

  @ApiProperty({ description: 'Offset para paginado', required: false })
  offset?: number;
}
