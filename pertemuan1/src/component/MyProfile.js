import React, { Component } from 'react';
import MyBio from './MyBio';

class MyProfile extends Component {
    render() {
        return (
            <div>
                <h1>Biodata</h1>
                <MyBio name = "Fathur" age="21"/>
            </div>
        );
    }
}

export default MyProfile;
