import React, { useState } from 'react'
import './Home.css'
function Home() {

    const [count, setCount] = useState(0)
    const [item, setItem] = useState([])


    function addCart() {
        setCount(count + 1)

    }
    function resetCart() {
        setCount(0)
        setItem([])
    }

    return (
        <div className='home-body'>
            <button className='btn' onClick={addCart}>Add to Cart</button>
            <button className='btn' id="reset-btn" onClick={resetCart}>Reset Cart</button>

            <p>Items Count : {item.length}</p>
            <p>Total Count : {count}</p>

        </div>
    )
}

export default Home