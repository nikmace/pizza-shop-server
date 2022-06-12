import { Injectable } from '@nestjs/common';

import { OrderInputValues } from './order.controller';

type ValidationResponse = {
  message: string;
  success: boolean;
  errors: {
    firstName: string[];
    lastName: string[];
    email: string[];
    phone: string[];
    address: string[];
    time: string[];
  };
  errorCount: number;
};

@Injectable()
export class OrderService {
  // ----------------------------------------------------------------
  async validateInput(body: OrderInputValues) {
    const { firstName, lastName, email, phone, address, time } = body;

    const res: ValidationResponse = {
      message: 'Errors occured while validating your form',
      success: false,
      errors: {
        firstName: [],
        lastName: [],
        email: [],
        phone: [],
        address: [],
        time: [],
      },
      errorCount: 0,
    };

    // Check if inputs are not empty
    if (firstName.length === 0) {
      res.errors.firstName.push('Имя не может быть пустым');
      res.errorCount++;
    }
    if (lastName.length === 0) {
      res.errors.lastName.push('Фамилия не может быть пустой');
      res.errorCount++;
    }
    if (email.length === 0) {
      res.errors.email.push('Имейл не может быть пустым');
      res.errorCount++;
    }
    if (phone.length === 0) {
      res.errors.phone.push('Номер тел. не может быть пустым');
      res.errorCount++;
    }
    if (address.length === 0) {
      res.errors.address.push('Адрес не может быть пустым');
      res.errorCount++;
    }
    if (time.length === 0) {
      res.errors.time.push('Время доставки не может быть пустым');
      res.errorCount++;
    }

    // Check if email is valid
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        email,
      )
    ) {
      res.errors.email.push('Проверьте написание имейла');
      res.errorCount++;
    }

    // Check if phone is valid
    if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)
    ) {
      res.errors.phone.push('Проверьте написание номера тел.');
      res.errorCount++;
    }

    if (res.errorCount === 0) {
      res.success = true;
      res.message = 'All inputs are correct';
    }

    return res;
  }
  // ----------------------------------------------------------------
}
