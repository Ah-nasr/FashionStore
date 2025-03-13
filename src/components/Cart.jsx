import { useState, useEffect } from 'react';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-10 text-center">
      <h3 className="text-red-500 font-bold text-2xl mb-6">Shopping Cart</h3>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="p-2">Product</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Price</th>
            <th className="p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">${item.price.toFixed(2)}</td>
              <td className="p-2">${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-right text-xl font-bold mt-4">Total: ${totalPrice.toFixed(2)}</p>
      <button
        onClick={clearCart}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;