import React, { Component } from 'react';
// import ReactMapGL from "react-map-gl";
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
// import img001 from '../paines001.jpg';
// import img002 from '../pops001.jpg';
import img003 from '../wphilly001.jpg';


class Park2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: '',
      images: '',
      reviews: {
        park: '',
        review: '',
        rating: ''
      }
    }
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
            </Col>
            <Col size="md-8">
              <h1>Reviews on the park?</h1>
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