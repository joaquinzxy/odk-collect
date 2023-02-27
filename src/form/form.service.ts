import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { formSchema, Form } from './entities/form.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FormService {

  constructor(
    @InjectModel(Form.name)
    private readonly formModel: Model<Form>
  ){

  }

  async create(createFormDto: CreateFormDto) {
    const formulario = await this.formModel.create(createFormDto)
    return formulario
  }

  async findAll() {
    const formularios = await this.formModel.find()
    return formularios
  }

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
