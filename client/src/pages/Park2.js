import React, { useState, Component } from 'react';
// import ReactMapGL from "react-map-gl";
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';


class Park2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: '',
            images: '',
            reviews: ''
        }
    };

    render() {
        return (
            <>
                <Container>
                    <Row>
                    </Row>
                    <Row>
                        <h1>Park Content goes here</h1>
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