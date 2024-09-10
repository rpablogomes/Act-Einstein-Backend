import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InterviewedService } from './interviewed.service';
import { CreateInterviewedDto } from './dto/create-interviewed.dto';
// import { UpdateInterviewedDto } from './dto/update-interviewed.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('interviewed')
@Controller('interviewed')
export class InterviewedController {
  constructor(private readonly interviewedService: InterviewedService) {}

  @Post()
  async create(@Body() createInterviewedDto: CreateInterviewedDto) {
    try {
      const interviewed_id =
        await this.interviewedService.create(createInterviewedDto);
      return interviewed_id;
    } catch (error) {
      return 'Erro:' + error;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.interviewedService.findAll();
    } catch (error) {
      return 'Erro:' + error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const interviewed = await this.interviewedService.findOne(+id);
      return interviewed;
    } catch (error) {
      return 'Erro:' + error;
    }
  }

  // @Patch(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateInterviewedDto: UpdateInterviewedDto,
  // ) {
  //   try {
  //     await this.interviewedService.update(+id, updateInterviewedDto);
  //   } catch (error) {
  //     console.error('Erro', error);
  //   }
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   try {
  //     const result = await this.interviewedService.remove(+id);

  //     return 'removido com sucesso';
  //   } catch (error) {
  //     return 'Erro:' + error
  //   }
  // }
}
