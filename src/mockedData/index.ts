import { v4 as uuid } from 'uuid';
import { Car } from '../models';
export const CARS: Car[] = [
  {
    id: uuid(),
    model: 'Largus',
    brand: 'Lada',
    production: '2012',
    price: '1 300 000₽',
    src: 'https://static.lada.ru/images/v6/cars/common/new-largus/furgon.jpg',
  },
  {
    id: uuid(),
    model: 'Niva Legend',
    brand: 'Lada',
    production: '1977',
    price: '820 000₽',
    src: 'https://static.lada.ru/images/v6/cars/about/niva-legend/3dv/dheader.jpg',
  },
  {
    id: uuid(),
    model: 'Vesta',
    brand: 'Lada',
    production: '2015',
    price: '1 120 000₽',
    src: 'https://static.lada.ru/images/v6/cars/about/vesta/sedan/Vesta_1920_01.jpg',
  },
  {
    id: uuid(),
    model: 'Niva Travel',
    brand: 'Lada',
    production: '2021',
    price: '1 015 000₽',
    src: 'https://static.lada.ru/images/v6/cars/about/niva-travel/travel/dheader.jpg',
  },
  {
    id: uuid(),
    model: 'Granta',
    brand: 'Lada',
    production: '2011',
    price: '680 000₽',
    src: 'https://static.lada.ru/images/v6/cars/about/granta/sedan/dheader.jpg',
  },
];
