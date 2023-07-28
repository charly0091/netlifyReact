const { Fragment, useState } = require("react");

export const Count = () => {
    const [count, setCount] = useState(0);
    /* localStorage.setItem('count', count);
    if(localStorage.getItem('count') > 0){
        setCount(localStorage.getItem('count'));
    } */

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }
    return ( 
        <Fragment> 
            <h2>Count</h2>
            <div>
                <button onClick={ decrement }>-</button>
                <p>{count} </p>
                <button onClick={ increment }>+</button>
            </div>
        </Fragment>
     );
}