import React, { Component } from 'react';
// import ReactMapGL from "react-map-gl";
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
      reviews: {
        park: '',
        text: '',
        rating: ''
      }
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

    if (!this.state.reviews.park || !this.state.reviews.text || !this.state.rating) {
      alert('Please fill out all fields to submit a review');
    } else {
      alert('Thanks for rating!');
      API.saveReview({
        pard_id: this.state.reviews.park,
        review: this.state.reviews.text,
        rating: this.state.reviews.rating
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
    return (
      <>
        <Container>
          <Row>
            {/* Potential carousel for the images */}
            <img src={img003} alt="Paines Park" />
          </Row>
          <Row>
            <Col size="md-4">
              <h1>Stats on Park</h1>
              <h4>Location: 123 Philly St</h4>
              <h4>Overall Rating: 4.5</h4>
            </Col>
            <Col size="md-8">
              <h1>Rate Me!</h1>
              <form className="form">
                <div className="form-group col-md-8">
                  <label for="inputAddress">Park Name</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Skate Park Name" />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">Rating</label>
                  <select id="inputState" class="form-control">
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group col-md-12">
                  <label for="inputCity">Review</label>
                  <input type="text" class="form-control" id="inputCity" placeholder="What was your experience like?" />
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