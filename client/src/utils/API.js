import axios from 'axios';
const reqUrl = 'http://localhost/3001';

export default {
    // Get all users
    getUsers: function() {
        return axios.get(`/api/users`);
    },
    // Gets the user with the given id
    getUser: function(id) {
        return axios.get(`/api/users/${id}`);
    },
    // Deletes the user with the given id
    deleteUser: function(id) {
        return axios.delete(`/api/users/${id}`);
    },
    // Saves a user to the database
    saveUser: function(userData) {
        console.log(userData);
        return axios.post(`/api/users`, userData);
    },
//=======================================================================
    // Get the review with the given id
    getReview: function(id) {
        return axios.get(`/api/reviews/${id}`);
    },
    // Delete the review with the given id
    deleteReview: function(id) {
        return axios.delete(`/api/reviews/${id}`);
    },
    // Save a review to the database
    saveReview: function(reviewData) {
        console.log(reviewData);
        return axios.post(`/api/reviews`, reviewData);
    }, 
// ======================================================================
    // Get all parks
    getParks: function() {
        return axios.get('/api/parks');
    },
    // Get the park with the given id
    getPark: function(id) {
        return axios.get(`/api/parks/${id}`);
    },
    // Save a park to the database
    savePark: function(parkData) {
        console.log(parkData);
        return axios.post(`${reqUrl}/api/parks`, parkData);
    },
// ========================================================================
    // Check for the user log in
    login: function(userData) {
        console.log(userData);
        return axios.post('/api/auth/login', userData);
    }
};