import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';

@Injectable()
export class HashService {
  private marvelApiKey: string;
  private marvelPrivateKey: string;

  constructor(private configService: ConfigService) {
    this.marvelApiKey =
      this.configService.get<string>('MARVEL_PUBLIC_KEY') || '';
    this.marvelPrivateKey =
      this.configService.get<string>('MARVEL_PRIVATE_KEY') || '';

    if (!this.marvelApiKey) {
      throw new InternalServerErrorException(
        'La clave pública de la API de Marvel no está configurada correctamente.',
      );
    }

    if (!this.marvelPrivateKey) {
      throw new InternalServerErrorException(
        'La clave privada de la API de Marvel no está configurada correctamente.',
      );
    }
  }

  generateHash(ts: number): string {
    try {
      const hashString = ts + this.marvelPrivateKey + this.marvelApiKey;
      return crypto.createHash('md5').update(hashString).digest('hex');
    } catch (error) {
      throw new InternalServerErrorException(
        'Error al generar el hash de autenticación.',
      );
    }
  }
}
