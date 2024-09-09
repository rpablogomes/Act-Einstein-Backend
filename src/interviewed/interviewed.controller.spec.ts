import { Test, TestingModule } from '@nestjs/testing';
import { InterviewedController } from './interviewed.controller';
import { InterviewedService } from './interviewed.service';
import { CreateInterviewedDto } from './dto/create-interviewed.dto';
// import { UpdateInterviewedDto } from './dto/update-interviewed.dto';

describe('InterviewedController', () => {
  let controller: InterviewedController;
  let service: InterviewedService;

  const mockInterviewedService = {
    create: jest.fn((dto) => Promise.resolve({ id: 1, ...dto })),
    findAll: jest.fn(() =>
      Promise.resolve([{ id: 1, name: 'Test Interviewed' }]),
    ),
    findOne: jest.fn((id) => Promise.resolve({ id, name: 'Test Interviewed' })),
    update: jest.fn((id, dto) => Promise.resolve({ id, ...dto })),
    remove: jest.fn((id) => Promise.resolve({ id })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterviewedController],
      providers: [
        {
          provide: InterviewedService,
          useValue: mockInterviewedService,
        },
      ],
    }).compile();

    controller = module.get<InterviewedController>(InterviewedController);
    service = module.get<InterviewedService>(InterviewedService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new interviewed entity', async () => {
      const dto: CreateInterviewedDto = {
        respondent_email: 'joao@joao.com',
        public_group: 1,
        stars: 5,
        research_id: 1,
        answers: [
          {
            question_id: 1,
            answer: 'teste',
          },
        ],
      };
      expect(await controller.create(dto)).toEqual({ id: 1, ...dto });
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('should return an array of interviewed entities', async () => {
      expect(await controller.findAll()).toEqual([
        { id: 1, name: 'Test Interviewed' },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single interviewed entity by ID', async () => {
      const id = 1;
      expect(await controller.findOne(id.toString())).toStrictEqual({
        id,
        name: 'Test Interviewed',
      });
      expect(service.findOne).toHaveBeenCalledWith(id);
    });
  });

  // describe('update', () => {
  //   it('should update and return an interviewed entity', async () => {
  //     const id = 1;
  //     const dto: UpdateInterviewedDto = {
  //       respondent_email: 'joaoAtualizado@joaoAtualizado.com',
  //       public_group: 1,
  //       stars: 5,
  //       answers: [
  //         {
  //           question_id: 1,
  //           answer: 'atualizado',
  //           research_id: 1,
  //         },
  //       ],
  //     };
  //     expect(await controller.update(id.toString(), dto)).toBe({
  //       id,
  //       ...dto,
  //     });
  //     expect(service.update).toHaveBeenCalledWith(id, dto);
  //   });
  // });

  // describe('remove', () => {
  //   it('should delete an interviewed entity by ID', async () => {
  //     const id = 1;
  //     expect(await controller.remove(id.toString())).toBe(
  //       'removido com sucesso');
  //     expect(service.remove).toHaveBeenCalledWith(id);
  //   });
  // });
});
