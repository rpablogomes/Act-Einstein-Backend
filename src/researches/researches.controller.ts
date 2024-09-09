import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResearchesService } from './researches.service';
import { CreateResearchDto } from './dto/create-research.dto';
import { UpdateResearchDto } from './dto/update-research.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('researches')
@Controller('researches')
export class ResearchesController {
  constructor(private readonly researchesService: ResearchesService) {}

  @Post()
  async create(@Body() createResearchDto: CreateResearchDto) {
    try {
      return await this.researchesService.create(createResearchDto);
    } catch (error) {
      return 'Error: ' + error;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.researchesService.findAll();
    } catch (error) {
      return 'Error: ' + error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const research = await this.researchesService.findOne(+id);

      if (!research) {
        return 'Não existe';
      }

      return research;
    } catch (error) {
      return 'Error: ' + error;
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateResearchDto: UpdateResearchDto,
  ) {
    try {
      await this.researchesService.update(+id, updateResearchDto);
      return id;
    } catch (error) {
      return 'Error: ' + error;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.researchesService.remove(+id);
      return 'removido com sucesso';
    } catch (error) {
      return 'Error: ' + error;
    }
  }
}
