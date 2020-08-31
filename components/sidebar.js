import React from 'react';
import { useState } from 'react';


const Sidebar = (props) => {
  //  const [count, setCount] = useState(0);
   //const [count, whateverIwant] = useState(0);

    //manual implementtation
    //const stateArray = useState(0)
    //const count = stateArray[0]
    //const whateverIwant = stateArray[1]

    return (

        <div className="col-lg-3 ">

            <h1 className="my-4">{props.appName }</h1>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>
            <div className="p-2">
                {/* <button className="btn btn-primary mx-2" onClick={increment}> Add </button>
                <button className="btn btn-warning" onClick={decrement}> Remove </button>*/}
                <button
                    className="btn btn-primary mx-2"
                    onClick={props.clickHandler}
                > Click! </button>
                <h1>  {props.count}  </h1>
            </div>
        </div>

    );
}

export default Sidebar;