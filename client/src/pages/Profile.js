import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import ProfilePic from '../components/ProfilePic';
import ParkForm from '../components/ParkForm';
import { List, ListItem } from '../components/List';
import API from '../utils/API';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // firstName: '',
            // lastName: '',
            // email: ''
            parks: [],
            name: '',
        }
    };

    componentDidMount() {
        // console.log(this.props.match);
        // API.getUser(this.props.match.params.id)
        //     .then(res => this.setState({
        //         firstName: res.data.firstName,
        //         lastName: res.data.lastName,
        //         email: res.data.email
        //     }))
        //     .catch(err => console.log(err));
        this.loadParks();
    }

    loadParks = () => {
        API.getParks()
            .then(res =>
                this.setState({ parks: res.data, name: '' }))
            .catch(err => console.log(err));
    }

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
            <div>
                <Container>
                    <Row>
                        <Col size="md-4">
                            <div className="card">
                                <ProfilePic backgroundImage="https://images.theconversation.com/files/118273/original/image-20160412-15858-iee25.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" />
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.firstName} {this.state.lastName}</h5>
                                    <p className="card-text">{this.state.email}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Philadelphia, PA</li>
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
                    <br />
                    <Row>
                        <Col size="md-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Top Skate Spots</h5>
                                </div>
                                {this.state.parks.length ? (
                                    <List>
                                        {this.state.parks.map(park => (
                                            <ListItem key={park._id}>
                                                <Link to={"/park/" + park._id}>
                                                    <strong>
                                                        {park.name}
                                                    </strong>
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                ) : (
                                        <h3>No Results to Display</h3>
                                    )}                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Profile;