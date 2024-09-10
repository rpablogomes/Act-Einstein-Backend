import { Test, TestingModule } from '@nestjs/testing';
import { ResearchesService } from './researches.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Researches } from './entities/researches.entity';

describe('ResearchesService', () => {
  let service: ResearchesService;
  let repository: Repository<Researches>;

  const mockResearchRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    preload: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResearchesService,
        {
          provide: getRepositoryToken(Researches),
          useValue: mockResearchRepository,
        },
      ],
    }).compile();

    service = module.get<ResearchesService>(ResearchesService);
    repository = module.get<Repository<Researches>>(getRepositoryToken(Researches));
  });

  describe('create', () => {
    it('should create a research and return the research_id', async () => {
      const createResearchDto = { title: 'Test Research', questions_ids: [1, 2] };
      const savedResearch = { research_id: 1 };
      mockResearchRepository.create.mockReturnValue(createResearchDto);
      mockResearchRepository.save.mockResolvedValue(savedResearch);

      const research_id = await service.create(createResearchDto);

      expect(research_id).toBe(1);
      expect(mockResearchRepository.create).toHaveBeenCalledWith({
        title: 'Test Research',
        questions: [{ question_id: 1 }, { question_id: 2 }],
      });
      expect(mockResearchRepository.save).toHaveBeenCalledWith(createResearchDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of researches with relations', async () => {
      const researchArray = [
        {
          research_id: 1,
          title: 'Test Research',
          questions: [{ question_id: 1, question_text: 'Test Question' }],
        },
      ];
      mockResearchRepository.find.mockResolvedValue(researchArray);

      const result = await service.findAll();

      expect(result).toBe(researchArray);
      expect(mockResearchRepository.find).toHaveBeenCalledWith({
        relations: ['questions'],
      });
    });
  });

  describe('findOne', () => {
    it('should return a research with relations', async () => {
      const research = {
        research_id: 1,
        title: 'Test Research',
        questions: [{ question_id: 1, question_text: 'Test Question' }],
      };
      mockResearchRepository.findOne.mockResolvedValue(research);

      const result = await service.findOne(1);

      expect(result).toEqual({
        research_id: 1,
        title: 'Test Research',
        questions: [{ question_id: 1, question_text: 'Test Question' }],
      });
      expect(mockResearchRepository.findOne).toHaveBeenCalledWith({
        where: { research_id: 1 },
        relations: ['questions'],
      });
    });
  });

  describe('update', () => {
    it('should update and return research_id', async () => {
      const updateResearchDto = { title: 'Updated Research', questions_ids: [1, 2] };
      const research = {
        research_id: 1,
        title: 'Updated Research',
        questions: [{ question_id: 1 }, { question_id: 2 }],
      };
      mockResearchRepository.preload.mockResolvedValue(research);
      mockResearchRepository.save.mockResolvedValue(research);

      const research_id = await service.update(1, updateResearchDto);

      expect(research_id).toBe(1);
      expect(mockResearchRepository.preload).toHaveBeenCalledWith({
        research_id: 1,
        title: 'Updated Research',
        questions: [{ question_id: 1 }, { question_id: 2 }],
      });
      expect(mockResearchRepository.save).toHaveBeenCalledWith(research);
    });
  })

  describe('remove', () => {
    it('should delete research and return result', async () => {
      const deleteResult = { affected: 1 };
      mockResearchRepository.delete.mockResolvedValue(deleteResult);

      const result = await service.remove(1);

      expect(result).toBe(deleteResult);
      expect(mockResearchRepository.delete).toHaveBeenCalledWith(1);
    });
  });
});
