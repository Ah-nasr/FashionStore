import { useState } from 'react';
import SectionItem from '../components/SectionItem';

function Men() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const products = [
    { image: './images/men1.jpg', name: 'Suit 1', price: 100 },
    { image: './images/men2.jpg', name: 'Suit 2', price: 500 },
    { image: './images/men3.jpg', name: 'Suit 3', price: 400 },
    { image: './images/men4.jpg', name: 'Suit 4', price: 100 },
    { image: './images/men5.jpg', name: 'Suit 5', price: 250 },
    { image: './images/men6.jpg', name: 'Suit 6', price: 350 },
    { image: './images/men7.jpg', name: 'Suit 7', price: 150 },
    { image: './images/men8.jpg', name: 'Suit 8', price: 300 },
    { image: './images/men9.jpg', name: 'Suit 9', price: 1000 },
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

export default Men;