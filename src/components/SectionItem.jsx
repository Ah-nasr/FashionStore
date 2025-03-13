function SectionItem({ image, name, price, onAddToCart }) {
    return (
      <div className="border border-gray-300 rounded-lg p-4 shadow-md text-center">
        <img src={image} alt={name} className="w-full h-auto rounded" />
        <p className="mt-2 text-lg font-bold">{name}</p>
        <p>Price: ${price}</p>
        <button
          onClick={() => onAddToCart(name, price)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    );
  }
  
  export default SectionItem;