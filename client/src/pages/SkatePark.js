import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import API from "../utils/API";
import img001 from '../wphilly001.jpg'

class SkatePark extends Component {
    state = {
        park: {},
        text: '',
        rating: ''
    };
    // When this component mounts, grab the park with the _id of this.props.match.params.id
    componentDidMount() {
        API.getPark(this.props.match.params.id)
            .then(res => this.setState({ park: res.data }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          [name]: value
        });
      };
    

    render() {
        if (!JSON.parse(localStorage.getItem('isLoggedIn'))) {
            return (
                <Container>
                    <Row>
                        <Col size="sm-6">
                            <h3>Not a member? Sign up already!</h3>
                            <button className="btn btn-outline-primary">
                                <Link to='/signup'>
                                    Sign Up
              </Link>
                            </button>
                        </Col>
                        <Col size="sm-6">
                            <h3>Already a member? Login then!</h3>
                            <button className="btn btn-outline-primary">
                                <Link to='/login'>
                                    Login
              </Link>
                            </button>
                        </Col>
                    </Row>
                </Container>
            )
        }

        return (
            <Container>
                <Row>
                    < h1 className='parkTitle text-center mt-5' > {this.state.park.name} </h1>
                    <img src={img001} className='mt-2 mb-5' alt="W Philly" />
                </Row>
                <Row>
                    <Col size="md-4">
                        < h1 className='parkTitle' > {this.state.park.name} </h1>
                        <h6>Location</h6>
                        <p> {this.state.park.address}, <br /> {this.state.park.city}, {this.state.park.state} {this.state.park.zipcode}</p>
                        <br />
                        <h6>Overall Rating</h6>
                        <p>{this.state.park.rating}</p>
                    </Col>
                    <Col size="md-8">
                        <h1 className='parkTitle text-success'>Rate Me!</h1>
                        <form className="form">
                            <div className="form-group col-md-8">
                  <label>Park Name</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="Skate Park Name" />
                </div>
                            <div className="form-group col-md-4">
                                <label className=''>Rating</label>
                                <select name="rating" value={this.state.rating} onChange={this.handleInputChange} className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="form-group col-md-12">
                                <label className=''>Review</label>
                                <input type="text" className="form-control" name="text" value={this.state.text} onChange={this.handleInputChange} placeholder="What was your experience like?" />
                            </div>
                        </form>
                        <button className="btn btn-success" onClick={this.handleFormSubmit}>Submit Review</button>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default SkatePark;
