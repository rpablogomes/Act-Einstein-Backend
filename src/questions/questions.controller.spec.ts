import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

describe('QuestionsController', () => {
  let controller: QuestionsController;
  let service: QuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionsController],
      providers: [
        {
          provide: QuestionsService,
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

    controller = module.get<QuestionsController>(QuestionsController);
    service = module.get<QuestionsService>(QuestionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a question and return its ID', async () => {
      const createQuestionDto: CreateQuestionDto = {
        question_text: 'teste',
      };
      const result = 1;
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createQuestionDto)).toEqual({
        question_id: result,
      });
    });
  });

  describe('findAll', () => {
    it('should return an array of questions', async () => {
      const result = [
        {
          question_id: 1,
          question_text: 'teste',
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toEqual(result);
    });

    it('should handle errors', async () => {
      jest.spyOn(service, 'findAll').mockRejectedValue(new Error('Test error'));

      try {
        await controller.findAll();
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e.message).toBe('Test error');
      }
    });
  });

  describe('findOne', () => {
    it('should return a question by id', async () => {
      const result = {
        question_id: 1,
        question_text: 'teste',
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne('1')).toEqual(result);
    });

    it('should handle errors', async () => {
      jest.spyOn(service, 'findOne').mockRejectedValue(new Error('Test error'));

      try {
        await controller.findOne('1');
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e.message).toBe('Test error');
      }
    });
  });

  describe('update', () => {
    it('should update a question', async () => {
      const updateQuestionDto: UpdateQuestionDto = {
        question_text: 'string',
      };
      jest.spyOn(service, 'update').mockResolvedValue(undefined);

      expect(await controller.update('1', updateQuestionDto)).toEqual({
        message: 'Atualizada com sucesso',
      });
    });

    it('should handle errors', async () => {
      jest.spyOn(service, 'update').mockRejectedValue(new Error('Test error'));

      try {
        await controller.update('1', {
          /* your DTO data */
        });
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e.message).toBe('Test error');
      }
    });
  });

  describe('remove', () => {
    it('should remove a question', async () => {
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);

      expect(await controller.remove('1')).toEqual({
        message: 'removido com sucesso',
      });
    });

    it('should handle errors', async () => {
      jest.spyOn(service, 'remove').mockRejectedValue(new Error('Test error'));

      try {
        await controller.remove('1');
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e.message).toBe('Test error');
      }
    });
  });
});
