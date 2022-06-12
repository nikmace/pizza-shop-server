import { Body, Controller, Post } from '@nestjs/common';

import { ValidationService } from './validation.service';

export type InputValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  time: string;
};

@Controller('/validation')
export class ValidationController {
  constructor(private readonly validationService: ValidationService) {}

  @Post()
  getAll(@Body() body: InputValues) {
    return this.validationService.validateInput(body);
  }
}
