import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class HospitalBill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicalInsurance: '',
      age: '',
      deductible: '',
      coinsurance: '',
      copayment: '',
      additionalFees: '',
      hospitalDays: '',
      roomRate: '',
      medicationCharges: '',
      miscellaneousFees: '',
      totalHospitalCost: '',
    };
  }

  calculateHospitalBill = () => {
    let {
      medicalInsurance,
      age,
      deductible,
      coinsurance,
      copayment,
      additionalFees,
      hospitalDays,
      roomRate,
      medicationCharges,
      miscellaneousFees,
    } = this.state;

    let totalHospitalCost;

    if (medicalInsurance === 'yes') {
      totalHospitalCost =
        parseFloat(deductible) +
        parseFloat(coinsurance) * (parseFloat(medicationCharges) * 0.01) +
        parseFloat(copayment) * (parseFloat(miscellaneousFees) * 0.01) +
        parseFloat(additionalFees);
    } else {
      totalHospitalCost =
        parseFloat(hospitalDays) * parseFloat(roomRate) +
        parseFloat(medicationCharges) +
        parseFloat(miscellaneousFees) +
        parseFloat(additionalFees);
    }

    this.setState({ totalHospitalCost });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Hospital Bill Calculator</h1>
        <form>
          <TextField
            label="Do you have medical insurance?"
            type="text"
            name="medicalInsurance"
            onChange={this.handleInputChange}
          />

          <TextField label="Age" type="text" name="age" onChange={this.handleInputChange} />

          <TextField label="Deductible" type="text" name="deductible" onChange={this.handleInputChange} />

          <TextField
            label="Coinsurance (%)"
            type="text"
            name="coinsurance"
            onChange={this.handleInputChange}
          />

          <TextField label="Copayment (%)" type="text" name="copayment" onChange={this.handleInputChange} />

          <TextField label="Additional Fees" type="text" name="additionalFees" onChange={this.handleInputChange} />

          <TextField label="Hospital Days" type="text" name="hospitalDays" onChange={this.handleInputChange} />

          <TextField label="Room Rate" type="text" name="roomRate" onChange={this.handleInputChange} />

          <TextField label="Medication Charges" type="text" name="medicationCharges" onChange={this.handleInputChange} />

          <TextField label="Miscellaneous Fees" type="text" name="miscellaneousFees" onChange={this.handleInputChange} />

          <Button variant="contained" onClick={this.calculateHospitalBill}>
            Calculate
          </Button>
        </form>

        <div>
          <h2>Total Hospital Cost</h2>
          <p>{this.state.totalHospitalCost}</p>
        </div>
      </div>
    );
  }
}

export default HospitalBill;