import React from 'react';

const Home = () => {
    return(
        <div>
            <h1>Home Component</h1>
            <div className='add-to-cart'>
                <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png"  alt='Cart'/>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png"  alt='Image'/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;