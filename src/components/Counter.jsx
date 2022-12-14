import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    function increment(){
        setCounter(counter + 1)
    }

    function decrement(){
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>
                {counter}
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </h1>
        </div>
    );
};

export default Counter;