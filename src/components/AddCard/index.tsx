import React from 'react';
import { v4 as uuid } from 'uuid';
import { CAR_COLORS, CAR_PAYMENT_TYPE } from '../../constants';
import CardList from '../CardList';
import { Car } from '../../models';

import './addCard.css';

interface AddCardState {
  cards: Car[];
}
class AddCard extends React.Component<object, AddCardState> {
  private readonly modelInput: React.RefObject<HTMLInputElement>;
  private readonly brandInput: React.RefObject<HTMLInputElement>;
  private readonly productionDateInput: React.RefObject<HTMLInputElement>;
  private readonly colorSelect: React.RefObject<HTMLSelectElement>;
  private readonly isBookedCheckbox: React.RefObject<HTMLInputElement>;
  private readonly paymentTypeCashInput: React.RefObject<HTMLInputElement>;
  private readonly paymentTypeCreditInput: React.RefObject<HTMLInputElement>;
  private readonly paymentTypeLeasingInput: React.RefObject<HTMLInputElement>;
  private readonly fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: object) {
    super(props);

    this.modelInput = React.createRef<HTMLInputElement>();
    this.brandInput = React.createRef<HTMLInputElement>();
    this.productionDateInput = React.createRef<HTMLInputElement>();
    this.colorSelect = React.createRef<HTMLSelectElement>();
    this.isBookedCheckbox = React.createRef<HTMLInputElement>();
    this.paymentTypeCashInput = React.createRef<HTMLInputElement>();
    this.paymentTypeCreditInput = React.createRef<HTMLInputElement>();
    this.paymentTypeLeasingInput = React.createRef<HTMLInputElement>();
    this.fileInput = React.createRef<HTMLInputElement>();

    this.submitCard = this.submitCard.bind(this);
    this.onChangePaymentType = this.onChangePaymentType.bind(this);
    this.getPaymentType = this.getPaymentType.bind(this);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    if (this.paymentTypeCashInput.current) {
      this.paymentTypeCashInput.current.checked = true;
    }
  }

  getPaymentType(): CAR_PAYMENT_TYPE {
    if (this.paymentTypeCreditInput.current?.checked) {
      return CAR_PAYMENT_TYPE.CREDIT;
    } else if (this.paymentTypeLeasingInput.current?.checked) {
      return CAR_PAYMENT_TYPE.LEASING;
    } else {
      return CAR_PAYMENT_TYPE.CASH;
    }
  }

  onChangePaymentType(event: React.ChangeEvent<HTMLInputElement>) {
    const inputName = event.target.name;

    switch (inputName) {
      case CAR_PAYMENT_TYPE.CASH:
        if (this.paymentTypeCreditInput.current) {
          this.paymentTypeCreditInput.current.checked = false;
        }
        if (this.paymentTypeLeasingInput.current) {
          this.paymentTypeLeasingInput.current.checked = false;
        }
        break;
      case CAR_PAYMENT_TYPE.CREDIT:
        if (this.paymentTypeCashInput.current) {
          this.paymentTypeCashInput.current.checked = false;
        }
        if (this.paymentTypeLeasingInput.current) {
          this.paymentTypeLeasingInput.current.checked = false;
        }
        break;
      case CAR_PAYMENT_TYPE.LEASING:
        if (this.paymentTypeCashInput.current) {
          this.paymentTypeCashInput.current.checked = false;
        }
        if (this.paymentTypeCreditInput.current) {
          this.paymentTypeCreditInput.current.checked = false;
        }
        break;
    }
  }
  submitCard(event: React.FormEvent<HTMLFormElement>): void {
    const files = this.fileInput.current?.files;
    const file = files && files.length > 0 ? files[0] : null;

    const carCard: Car = {
      id: uuid(),
      model: this.modelInput.current?.value || '',
      brand: this.brandInput.current?.value || '',
      productionDate: this.productionDateInput.current?.value || '',
      color: this.colorSelect.current?.value as CAR_COLORS,
      isBooked: Boolean(this.isBookedCheckbox.current?.checked),
      paymentType: this.getPaymentType(),
      src: file ? URL.createObjectURL(file) : '',
    };

    this.setState({ cards: [...this.state.cards, carCard] });

    if (this.modelInput.current) {
      this.modelInput.current.value = '';
    }
    if (this.brandInput.current) {
      this.brandInput.current.value = '';
    }
    if (this.productionDateInput.current) {
      this.productionDateInput.current.value = '';
    }
    if (this.colorSelect.current) {
      this.colorSelect.current.value = CAR_COLORS.WHITE;
    }
    if (this.isBookedCheckbox.current) {
      this.isBookedCheckbox.current.checked = false;
    }
    if (this.paymentTypeCashInput.current) {
      this.paymentTypeCashInput.current.checked = true;
    }
    if (this.paymentTypeCreditInput.current) {
      this.paymentTypeCreditInput.current.checked = false;
    }
    if (this.paymentTypeLeasingInput.current) {
      this.paymentTypeLeasingInput.current.checked = false;
    }
    if (this.fileInput.current) {
      this.fileInput.current.value = '';
    }

    event.preventDefault();
  }
  render() {
    return (
      <>
        <form onSubmit={this.submitCard}>
          <div className="field">
            <div>Model</div>
            <input type="text" ref={this.modelInput} />
          </div>
          <div className="field">
            <div>Brand</div>
            <input type="text" ref={this.brandInput} />
          </div>
          <div className="field">
            <div>Production Date</div>
            <input type="date" ref={this.productionDateInput} />
          </div>
          <div className="field">
            <div>Color</div>
            <select multiple={false} ref={this.colorSelect}>
              {Object.keys(CAR_COLORS).map((color, index) => {
                const colorValue = CAR_COLORS[color as keyof typeof CAR_COLORS];

                return (
                  <option key={index} value={colorValue}>
                    {colorValue}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="field">
            <div>Booked</div>
            <input type="checkbox" className="checkbox" ref={this.isBookedCheckbox} />
          </div>
          <div className="field">
            <div>Payment type</div>
            <label>
              <input
                type="radio"
                name={CAR_PAYMENT_TYPE.CASH}
                ref={this.paymentTypeCashInput}
                onChange={this.onChangePaymentType}
              />
              {CAR_PAYMENT_TYPE.CASH}
            </label>
            <label>
              <input
                type="radio"
                name={CAR_PAYMENT_TYPE.CREDIT}
                ref={this.paymentTypeCreditInput}
                onChange={this.onChangePaymentType}
              />
              {CAR_PAYMENT_TYPE.CREDIT}
            </label>
            <label>
              <input
                type="radio"
                name={CAR_PAYMENT_TYPE.LEASING}
                ref={this.paymentTypeLeasingInput}
                onChange={this.onChangePaymentType}
              />
              {CAR_PAYMENT_TYPE.LEASING}
            </label>
          </div>
          <div className="field">
            <span>Upload preview</span>
            <input type="file" multiple={false} ref={this.fileInput} />
          </div>
          <input type="submit" value="SUBMIT" />
        </form>
        <CardList cards={this.state.cards} />
      </>
    );
  }
}

export default AddCard;
