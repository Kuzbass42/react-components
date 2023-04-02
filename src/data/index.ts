import { v4 as uuid } from 'uuid';
import { CAR_COLORS, CAR_PAYMENT_TYPE } from '../constants';
import { Car } from '../models';
export const CARS: Car[] = [
  {
    id: uuid(),
    model: 'Largus',
    brand: 'Lada',
    productionDate: '2023-03-10',
    color: CAR_COLORS.WHITE,
    isBooked: false,
    paymentType: CAR_PAYMENT_TYPE.CASH,
    src: 'https://static.lada.ru/images/v6/cars/common/new-largus/furgon.jpg',
  },
  {
    id: uuid(),
    model: 'Niva Legend',
    brand: 'Lada',
    productionDate: '2023-03-10',
    color: CAR_COLORS.WHITE,
    isBooked: true,
    paymentType: CAR_PAYMENT_TYPE.LEASING,
    src: 'https://static.lada.ru/images/v6/cars/about/niva-legend/3dv/dheader.jpg',
  },
  {
    id: uuid(),
    model: 'Vesta',
    brand: 'Lada',
    productionDate: '2023-03-10',
    color: CAR_COLORS.BLACK,
    isBooked: false,
    src: 'https://static.lada.ru/images/v6/cars/about/vesta/sedan/Vesta_1920_01.jpg',
  },
  {
    id: uuid(),
    model: 'Niva Travel',
    brand: 'Lada',
    productionDate: '2023-03-10',
    color: CAR_COLORS.BLACK,
    isBooked: false,
    src: 'https://static.lada.ru/images/v6/cars/about/niva-travel/travel/dheader.jpg',
  },
  {
    id: uuid(),
    model: 'Granta',
    brand: 'Lada',
    productionDate: '2023-03-10',
    color: CAR_COLORS.RED,
    isBooked: true,
    paymentType: CAR_PAYMENT_TYPE.CASH,
    src: 'https://static.lada.ru/images/v6/cars/about/granta/sedan/dheader.jpg',
  },
];
