/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HashService } from './hash.service';
import { MarvelQueryParamsDto } from 'src/dto/query-params.dto';
import { lastValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import {
  MarvelApiResponse,
  MarvelCharacterData,
} from 'src/models/marvel-api-response.model';

@Injectable()
export class AppService {
  private marvelApiUrl: string;
  private marvelApiKey: string;

  constructor(
    private _http: HttpService,
    private _config: ConfigService,
    private _hash: HashService,
  ) {
    this.marvelApiUrl = this._config.get<string>('MARVEL_API') || '';
    this.marvelApiKey = this._config.get<string>('MARVEL_PUBLIC_KEY') || '';

    if (!this.marvelApiUrl) {
      throw new InternalServerErrorException(
        'La URL de la API de Marvel no está configurada correctamente.',
      );
    }

    if (!this.marvelApiKey) {
      throw new InternalServerErrorException(
        'La clave pública de la API de Marvel no está configurada correctamente.',
      );
    }
  }

  async getHeroes(
    query: MarvelQueryParamsDto,
  ): Promise<MarvelApiResponse<MarvelCharacterData>> {
    const ts = new Date().getTime();
    const hash = this._hash.generateHash(ts);

    const params = {
      ...query,
      ts,
      apikey: this.marvelApiKey,
      hash,
    };

    try {
      const response = await lastValueFrom(
        this._http.get<MarvelApiResponse<MarvelCharacterData>>(
          `${this.marvelApiUrl}/characters`,
          { params },
        ),
      );

      if (!response.data || response.data.data.results.length === 0) {
        throw new NotFoundException(
          'No se encontraron personajes con los filtros proporcionados.',
        );
      }

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new InternalServerErrorException(
          `Error en la API de Marvel: ${error.response?.data?.status || error.message}`,
        );
      }
      throw new InternalServerErrorException(
        'Ocurrió un error inesperado al obtener los personajes.',
      );
    }
  }
}
