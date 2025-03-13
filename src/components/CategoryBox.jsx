import { Link } from 'react-router-dom';

function CategoryBox({ image, title, link }) {
  return (
    <div className="relative h-64 w-full border border-gray-300 overflow-hidden text-center">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="relative z-10 mt-6 text-white font-bold">
        <p>{title}</p>
        <Link to={link} className="mt-2 inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          View
        </Link>
      </div>
    </div>
  );
}

export default CategoryBox;