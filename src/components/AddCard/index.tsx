import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { CAR_COLORS, CAR_PAYMENT_TYPE, SUPPORTED_FILE_TYPES } from '../../constants';
import CardList from '../CardList';
import { Car } from '../../models';
import { CarFormValues } from './models';

import './addCard.css';

const AddCard: React.FunctionComponent = () => {
  const [cards, setCards] = React.useState<Car[]>([]);
  const [isSaved, setSaved] = React.useState(false);

  React.useEffect(() => {
    isSaved && setTimeout(() => setSaved(false), 2000);
  }, [isSaved]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CarFormValues>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const onSubmit: SubmitHandler<CarFormValues> = (data) => {
    const { model, brand, productionDate, color, isBooked, paymentType, preview } = data;
    const files = preview;
    const file = files && files.length > 0 ? files[0] : null;

    const carCard: Car = {
      id: uuid(),
      model,
      brand,
      productionDate,
      color,
      isBooked,
      paymentType,
      src: file ? URL.createObjectURL(file) : '',
    };

    setCards([...cards, carCard]);
    setSaved(true);
    reset();
  };

  const isUnsupportedFileTypes = (files: FileList): boolean => {
    const unsupportedFiles = files
      ? Object.values(files).filter((file) => {
          return !SUPPORTED_FILE_TYPES.includes(file.type);
        })
      : [];

    return unsupportedFiles.length === 0;
  };

  return (
    <>
      {isSaved && <span className="confirmation-message">The data has been saved</span>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <div>Model</div>
          <input
            type="text"
            data-testid="model-input"
            {...register('model', { required: 'Fill in Model' })}
          />
          {errors.model && <span className="validationError">{errors.model.message}</span>}
        </div>
        <div className="field">
          <div>Brand</div>
          <input
            type="text"
            data-testid="brand-input"
            {...register('brand', { required: 'Fill in Brand' })}
          />
          {errors.brand && <span className="validationError">{errors.brand.message}</span>}
        </div>
        <div className="field">
          <div>Production Date</div>
          <input
            type="date"
            data-testid="production-date-input"
            {...register('productionDate', { required: 'Fill in Production Date' })}
          />
          {errors.productionDate && (
            <span className="validationError">{errors.productionDate.message}</span>
          )}
        </div>
        <div className="field">
          <div>Color</div>
          <select multiple={false} {...register('color', { required: 'Choose color' })}>
            {Object.keys(CAR_COLORS).map((color, index) => {
              const colorValue = CAR_COLORS[color as keyof typeof CAR_COLORS];

              return (
                <option key={index} value={colorValue}>
                  {colorValue}
                </option>
              );
            })}
          </select>
          {errors.color && <span className="validationError">{errors.color.message}</span>}
        </div>
        <div className="field">
          <div>Available/Booked</div>
          <input type="checkbox" className="checkbox" {...register('isBooked')} />
        </div>
        <div className="field">
          <div>Payment type</div>
          <label>
            <input
              type="radio"
              data-testid="payment-type-input"
              value={CAR_PAYMENT_TYPE.CASH}
              {...register('paymentType', { required: 'Choose Payment Type' })}
            />
            {CAR_PAYMENT_TYPE.CASH}
          </label>
          <label>
            <input
              type="radio"
              value={CAR_PAYMENT_TYPE.CREDIT}
              {...register('paymentType', { required: 'Choose Payment Type' })}
            />
            {CAR_PAYMENT_TYPE.CREDIT}
          </label>
          <label>
            <input
              type="radio"
              value={CAR_PAYMENT_TYPE.LEASING}
              {...register('paymentType', { required: 'Choose Payment Type' })}
            />
            {CAR_PAYMENT_TYPE.LEASING}
          </label>
          {errors.paymentType && (
            <span className="validationError">{errors.paymentType.message}</span>
          )}
        </div>
        <div className="field">
          <span>Upload preview</span>
          <input
            type="file"
            data-testid="file-upload-input"
            multiple={false}
            {...register('preview', {
              required: 'Upload image',
              validate: (file) =>
                isUnsupportedFileTypes(file) || 'Supported file types are jpeg, jpg and png',
            })}
          />
          {errors.preview && <span className="validationError">{errors.preview.message}</span>}
        </div>
        <input type="submit" value="SUBMIT" />
      </form>
      <CardList cards={cards} />
    </>
  );
};

export default AddCard;
