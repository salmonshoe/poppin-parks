import React, { Component } from 'react';
// import ReactMapGL from "react-map-gl";
import { Link } from 'react-router-dom';
import API from '../utils/API';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import img003 from '../wphilly001.jpg';



class Park2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: '',
      images: '',
      text: '',
      rating: ''
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

    if (!this.state.text || !this.state.rating) {
      alert('Please fill out all fields to submit a review');
    } else {
      alert('Thanks for rating!');
      API.saveReview({
        review: this.state.text,
        rating: this.state.rating
      })
        .catch(err => console.log(err));
    }

    this.setState({
      park: '',
      text: '',
      rating: ''
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
      <>
        <Container>
          <Row>
            {/* Potential carousel for the images */}
            <img src={img003} alt="Paines Park" />
          </Row>
          <Row>
            <Col size="md-4">
              <h1>Park Stats</h1>
              <h6>Location</h6>
              <p>123 Philly St</p>
              <h6>Overall Rating</h6>
              <p>4.5</p>
            </Col>
            <Col size="md-8">
              <h1>Rate Me!</h1>
              <form className="form">
                {/* <div className="form-group col-md-8">
                  <label>Park Name</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="Skate Park Name" />
                </div> */}
                <div className="form-group col-md-4">
                  <label>Rating</label>
                  <select name="rating" value={this.state.rating} onChange={this.handleInputChange} className="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label>Review</label>
                  <input type="text" className="form-control" name="text" value={this.state.text} onChange={this.handleInputChange} placeholder="What was your experience like?" />
                </div>
              </form>
              <button className="btn btn-dark" onClick={this.handleFormSubmit}>Submit Review</button>
            </Col>
          </Row>
          <Row>
            <h1>Map goes here</h1>
          </Row>
        </Container>
      </>
    )
  }
}

export default Park2;