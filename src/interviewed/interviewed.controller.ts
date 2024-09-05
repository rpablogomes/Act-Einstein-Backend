import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InterviewedService } from './interviewed.service';
import { CreateInterviewedDto } from './dto/create-interviewed.dto';
import { UpdateInterviewedDto } from './dto/update-interviewed.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('interviewed')
@Controller('interviewed')
export class InterviewedController {
  constructor(private readonly interviewedService: InterviewedService) {}

  @Post()
  create(@Body() createInterviewedDto: CreateInterviewedDto) {
    return this.interviewedService.create(createInterviewedDto);
  }

  @Get()
  findAll() {
    return this.interviewedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interviewedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInterviewedDto: UpdateInterviewedDto) {
    return this.interviewedService.update(+id, updateInterviewedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interviewedService.remove(+id);
  }
}
