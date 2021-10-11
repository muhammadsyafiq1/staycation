import React, { Component } from 'react'
import propTypes from "prop-types";
import InputNumber from '../elements/form/InputNumber'
import InputDate from '../elements/form/InputDate'
import Button from '../elements/button/index'

export default class BookingForm extends Component {

    constructor(props) {
        super(props);
        //super props untuk membaca semua props yg dikirmkan
        // state lokal
        this.state = {
          data: {
            duration: 1,
            date: {
              startDate: new Date(),
              endDate: new Date(),
              key: "selection",
            },
          },
        };
      }

    //   update data state
    // e itu adalah target yg berupa object
      updateData = (e) => {
        console.log(this.state.data);

        console.log(e);
        this.setState({
            ...this.state,
            data: {
                // panggil semua data state
                ...this.state.data,
                // ganti state target.name dengan target.value
                [e.target.name]: e.target.value,
            },
        });
      }

    // lifecycle react
    // mengizinkan kapan component dapat dirender
    componentDidUpdate(prevProps, prevState){
        // console.log(prevState.data.date);
        // isi dalam prevstate adalah waktu saat menekan / memilih durasi
        const {data} = this.state;
        // keadaan date distate sebelumnya tidak sama dengan state saat ini
        if (prevState.data.date !== data.date) {
            const startDate = new Date(data.date.startDate);
            const endDate = new Date(data.date.endDate);
            // merubah nilai duration, sesuai rumus dibawah
            const countDuration = new Date(endDate - startDate).getDate();
            // console.log(countDuration)
            this.setState({
              data: {
                ...this.state.data,
                duration: countDuration,
              },
            });
          }
      
        //keadaan duration di state sebelumnya tidak sama dengan duration saat ini
        if (prevState.data.duration !== data.duration) {
        // console.log(prevState.data.duration);
        // prevstate.data.duration adalah durasi yg kita pilih
            const startDate = new Date(data.date.startDate);
            // update endDate pada state lokal
            // merubah enddate sesuai perubahan pada input number
            const endDate = new Date(
              startDate.setDate(startDate.getDate() + +data.duration - 1)
            );
            // console.log(endDate);
            this.setState({
              ...this.state,
              data: {
                ...this.state.data,
                date: {
                  ...this.state.data.date,
                  endDate: endDate,
                },
              },
            });
          }
    }
    
      render() {
        const { data } = this.state;
        const { itemDetails, startBooking } = this.props;

        return (
            <div className="card bordered" style={{ padding: "60px 80px" }}>
              <h4 className="mb-3">Start Booking</h4>
              <h5 className="h2 text-teal mb-4">
                ${itemDetails.price}{" "}
                <span className="text-gray-500 font-weight-light">
                  per {itemDetails.unit}
                </span>
              </h5>
      
              <label htmlFor="duration">How long you will stay?</label>
              <InputNumber
                max={30}
                suffix={" night"}
                isSuffixPlural
                onChange={this.updateData}
                name="duration"
                // data.duration diambil dari state lokal yaitu 1
                value={data.duration}
              />

              <label htmlFor="date">Pick a date</label>
              <InputDate onChange={this.updateData} name="date" value={data.date} />
              <h6
                className="text-gray-500 font-weight-light"
                style={{ marginBottom: 40 }}
              >
                You will pay{" "}
                <span className="text-gray-900">
                  ${itemDetails.price * data.duration} USD
                </span>{" "}
                per{" "}
                <span className="text-gray-900">
                  {data.duration} {itemDetails.unit}
                </span>
              </h6>
              <Button className="btn" hasShadow isPrimary isBlock onClick={startBooking}>
                Continue to Book
              </Button>
            </div>
        );
    }
}

BookingForm.propTypes = {
    itemDetails: propTypes.object,
    startBooking: propTypes.func,
};
