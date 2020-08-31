import React, { Component } from 'react';

class MovieList extends Component {
    ////state = {
    ////    count: 0,

    ////}

    //constructor(props) {
    //    super(props)
    //    this.state = {
    //        count: 0
    //    }

    //    //without an arrow function
    //    this.increment = this.increment.bind(this)
    //}

    ////without an arrow function
    ////increment() {
    ////    const { count } = this.state
    ////    this.setState({
    ////        count: count + 1
    ////    })
    ////}

    //increment = () => {
    //    const { count } = this.state;
    //    this.setState({
    //        count: count + 1
    //    })
    //}

    //decrement = () => {
    //    //alert("Remove ")
    //    const { count } = this.state;
    //    //very bad
    //    //this.state.count = count - 1;
    //    this.setState({
    //        count: count - 1
    //    })
    //}

    render() {
        //debugg
        return (
            <>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Item One</a>
                            </h4>
                            <h5>$24.99</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        </div>
                        <div className="p-2">
                            {/*<button className="btn btn-primary mx-2" onClick={() => this.increment()}> Add </button>
                            <button className="btn btn-primary mx-2" onClick={this.increment}> Add </button>
                            <button className="btn btn-warning" onClick={this.decrement}> Remove </button>*/}
                        </div>
                        <h2>{this.props.count}</h2>
                    </div>
                </div>
            </>
        );
    }
}
export default MovieList;