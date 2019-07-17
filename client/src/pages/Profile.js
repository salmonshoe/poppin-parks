import React, { Component } from 'react';
import { getFromStorage } from '../utils/storage'; //add in setInStorage
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import ProfilePic from '../components/ProfilePic';
import ParkForm from '../components/ParkForm';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signInError: ''
        };
    }

    // Page will load, on this function, the fetch request will check if the client has a token in their local storage. If they are not, then redirect.
    componentDidMount() {
        const token = getFromStorage('the_main_app');
        console.log(token);
        // if (token) {
        //     // Verify the token
        //     fetch('/api/account/verify?token' + token)
        //         .then(res = res.json())
        //         .then(json => {
        //             if (json.success) {
        //                 this.setState({
        //                     token,
        //                     isLoading: false
        //                 });
        //             } else {
        //                 this.setState({
        //                     isLoading: false,
        //                 });
        //             }
        //         });
        // } else {
        //     this.setState({
        //         isLoading: false,
        //     });
        // }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-4">
                            <div className="card">
                                {/* <img src="#" className="card-img-top" alt="PROFILE_PIC.PNG" /> */}
                                <ProfilePic backgroundImage="https://avatars0.githubusercontent.com/u/9729776?s=400&v=4" />
                                <div className="card-body">
                                    <h5 className="card-title">Gnarly Ant</h5>
                                    <p className="card-text">Yo I like to shred and grind down handrails for fun! Let's get a skate squad goin!</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Philadelphia, PA</li>
                                    <li className="list-group-item"><h6>Rides:</h6> Skateboard, Roller Blades</li>
                                </ul>
                                <div className="card-body">
                                    <p>Maybe some extra information of just filler text/content from Users</p>
                                </div>
                            </div>
                        </Col>
                        <Col size="md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Reviews</h3>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><i className="far fa-user-circle"></i> McCreesh Skate Park (07/01/19)</li>
                                        <li className="list-group-item"><i className="far fa-user-circle"></i> Paines Park (06/20/19)</li>
                                        <li className="list-group-item"><i className="far fa-user-circle"></i> Olney Church Lot (06/06/19)</li>
                                        <li className="list-group-item"><i className="far fa-user-circle"></i> Dilworth Park (05/29/19)</li>
                                        <li className="list-group-item"><i className="far fa-user-circle"></i> Parking Lot (04/20/19)</li>
                                    </ul>
                                    <button type="button" className="btn btn-outline-dark">+ <span>Add a review</span></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col size="md-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Top Skate Spots</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">FDR Park</li>
                                    <li className="list-group-item">Whitehall</li>
                                    <li className="list-group-item">Olney Church Lot</li>
                                </ul>
                            </div>
                        </Col>
                        <Col size="md-8">
                            <div className="card">
                                <ParkForm />
                                <br />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );

    }
}

export default Profile;