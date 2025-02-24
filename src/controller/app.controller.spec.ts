/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from '../services/app.service';
import { MarvelQueryParamsDto } from '../dto/query-params.dto';
import {
  MarvelApiResponse,
  MarvelCharacterData,
} from '../models/marvel-api-response.model';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getHeroes: jest.fn(),
          },
        },
      ],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  it('debería estar definido', () => {
    expect(appController).toBeDefined();
  });

  it('debería llamar a getHeroes en appService con los parámetros correctos', async () => {
    const query: MarvelQueryParamsDto = {
      name: 'Spider-Man',
      limit: 10,
      offset: 0,
    };

    const mockHeroes: MarvelApiResponse<MarvelCharacterData> = {
      code: 200,
      status: 'Ok',
      copyright: '© 2023 MARVEL',
      attributionText: 'Data provided by Marvel. © 2023 MARVEL',
      attributionHTML:
        '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
      etag: 'some-etag-value',
      data: {
        offset: 0,
        limit: 10,
        total: 1,
        count: 1,
        results: [
          {
            id: 1,
            name: 'Spider-Man',
            description: '',
            modified: '',
            thumbnail: {
              path: 'path/to/thumbnail',
              extension: 'jpg',
            },
            resourceURI: '',
            comics: {
              available: 0,
              collectionURI: '',
              items: [],
              returned: 0,
            },
            series: {
              available: 0,
              collectionURI: '',
              items: [],
              returned: 0,
            },
            stories: {
              available: 0,
              collectionURI: '',
              items: [],
              returned: 0,
            },
            events: {
              available: 0,
              collectionURI: '',
              items: [],
              returned: 0,
            },
            urls: [],
          },
        ],
      },
    };

    jest
      .spyOn(appService, 'getHeroes')
      .mockResolvedValue(Promise.resolve(mockHeroes));

    const result = await appController.getCharacterList(query);

    expect(appService.getHeroes).toHaveBeenCalledWith(query);

    expect(result).toEqual(mockHeroes);
  });
});
