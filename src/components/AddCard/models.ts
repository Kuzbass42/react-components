import { CAR_COLORS, CAR_PAYMENT_TYPE } from '../../constants';

export interface CarFormValues {
  model: string;
  brand: string;
  productionDate: string;
  color: CAR_COLORS;
  isBooked: boolean;
  paymentType: CAR_PAYMENT_TYPE;
  preview: FileList;
}
