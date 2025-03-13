import { useState } from 'react';
import SectionItem from '../components/SectionItem';

function Footwear() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const products = [
        { image: './images/shoes1.jpg', name: 'shoes 1', price: 100 },
        { image: './images/shoes2.jpg', name: 'shoes 2', price: 500 },
        { image: './images/shoes3.jpg', name: 'shoes 3', price: 400 },
        { image: './images/shoes4.jpg', name: 'shoes 4', price: 100 },
        { image: './images/shoes5.jpg', name: 'shoes 5', price: 250 },
        { image: './images/shoes6.jpg', name: 'shoes 6', price: 350 },
        { image: './images/shoes7.jpg', name: 'shoes 7', price: 150 },
        { image: './images/shoes8.jpg', name: 'shoes 8', price: 300 },
        { image: './images/shoes9.jpg', name: 'shoes 9', price: 1000 },
    ];

    const addToCart = (name, price) => {
        const existingItem = cart.find((item) => item.name === name);
        if (existingItem) {
            setCart(cart.map((item) =>
                item.name === name ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { name, price, quantity: 1 }]);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <SectionItem
                        key={index}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Footwear;