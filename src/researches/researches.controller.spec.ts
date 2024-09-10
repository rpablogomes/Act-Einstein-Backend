import { Test, TestingModule } from '@nestjs/testing';
import { ResearchesController } from './researches.controller';
import { ResearchesService } from './researches.service';
import { CreateResearchDto } from './dto/create-research.dto';
import { UpdateResearchDto } from './dto/update-research.dto';
import { Researches } from './entities/researches.entity';
import { Questions } from '../questions/entities/questions.entity';

describe('ResearchesController', () => {
  let controller: ResearchesController;
  let service: ResearchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResearchesController],
      providers: [
        {
          provide: ResearchesService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ResearchesController>(ResearchesController);
    service = module.get<ResearchesService>(ResearchesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('create a research', async () => {
      const createResearchDto: CreateResearchDto = {
        title: 'Vc Gostou do produto?',
        questions_ids: [1],
      };

      const result = 1;

      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createResearchDto)).toBe(result);
      expect(service.create).toHaveBeenCalledWith(createResearchDto);
    });
  });

  describe('findAll', () => {
    it('should call findAll method of ResearchesService', async () => {
      const question: Questions[] = [
        {
          question_id: 1,
          question_text: 'teste',
        },
      ];

      const result: Researches[] = [
        {
          research_id: 1,
          title: 'teste',
          updated_at: '',
          questions: question,
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toBe(result);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should call findOne method of ResearchesService with correct id', async () => {
      const result: Researches = {
        research_id: 1,
        title: 'teste',
        questions: [
          {
            question_id: 1,
            question_text: 'teste',
          },
        ],
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne('1')).toBe(result);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('update', () => {
    it('update one research', async () => {
      const updateResearchDto: UpdateResearchDto = {
        title: 'teste',
        questions_ids: [1],
      };
      const result = "1";

      jest.spyOn(service, 'update').mockResolvedValue(result);

      expect(await controller.update('1', updateResearchDto)).toBe(result);
      expect(service.update).toHaveBeenCalledWith(1, updateResearchDto);
    }); 
  });

  describe('remove', () => {
    it('remove one research', async () => {
      const result = "removido com sucesso";

      expect(await controller.remove('1')).toStrictEqual(result);
      expect(service.remove).toHaveBeenCalledWith(1);
    });
  });
});
