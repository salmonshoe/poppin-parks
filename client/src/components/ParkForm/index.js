import React, { Component } from 'react';
import API from '../../utils/API';
import './style.css'

class ParkForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parkName: '',
            rating: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            reminders: ''
        }
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (!this.state.parkName) {
            alert('Please fill out the name field.');
        } else if (!this.state.address || !this.state.city || !this.state.state || !this.state.zipcode) {
            alert('Please fill out all address fields.');
        }
        else {
            alert(`${this.state.parkName} is poppin!`);
            API.savePark({
                name: this.state.parkName,
                rating: this.state.rating,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode,
                reminders: this.state.reminders
            })
                .catch(err => console.log(err));
        }

        this.setState({
            name: '',
            rating: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            reminders: '',
        });
    };

    render() {
        return (
            <div>
                <h1>Found a Park?</h1>
                <h1>Share what's poppin!</h1>
                <form>
                    <div className="form-group">
                        <label>Skate Park</label>
                        <input type="text" className="form-control" placeholder="Name" name="parkName" value={this.state.parkName} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="123 Philly St" name="address" value={this.state.address} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>City</label>
                            <input type="text" className="form-control" placeholder="Philadelphia" name="city" value={this.state.city} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group col-md-4">
                            <label>State</label>
                            <select className="form-control" name="state" value={this.state.state} onChange={this.handleInputChange} >
                                <option></option>
                                <option>PA</option>
                                <option>NJ</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label>Zip</label>
                            <input type="text" className="form-control" placeholder="19104" name="zipcode" value={this.state.zipcode} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Directions or Reminders</label>
                        <input type="text" className="form-control" name="reminders" value={this.state.reminders} onChange={this.handleInputChange} />
                    </div>
                </form>
                <button className="btn btn-dark" onClick={this.handleFormSubmit}>Submit Discovery</button>
            </div>
        );
    }
}

export default ParkForm;