import React, { Component } from 'react';

class About extends React.Component {
    render() {
        return (
            <h1> Welcome </h1>
            )
    }
}

export default About

//functional component
/*
 * when to use
 *   1. for smaller components
 *   2. reusable components
 *   3. presentational commponents, partially right we can use state c
 */
//const About = () => {
//    const message = "From React world"
//    return (
//        <h1> Hello {message} </h1>
//    )
//}

//export default About