import { useState } from 'react';
import SectionItem from '../components/SectionItem';

function Women() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const products = [
    { image: './images/women1.jpg', name: 'Dress 1', price: 300 },
    { image: './images/women2.jpg', name: 'Dress 2', price: 150 },
    { image: './images/women3.jpg', name: 'Dress 3', price: 450 },
    { image: './images/women4.jpg', name: 'Dress 4', price: 300 },
    { image: './images/women5.jpg', name: 'Dress 5', price: 600 },
    { image: './images/women6.jpg', name: 'Dress 6', price: 900 },
    { image: './images/women7.jpg', name: 'Dress 7', price: 400 },
    { image: './images/women8.jpg', name: 'Dress 8', price: 250 },
    { image: './images/women9.jpg', name: 'Dress 9', price: 150 },
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

export default Women;