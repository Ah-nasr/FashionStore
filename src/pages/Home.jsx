import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import CategoryBox from '../components/CategoryBox';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/Data.json')
      .then((response) => response.json())
      .then((data) => setCategories(data['box-images']))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div>
      <Carousel />
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <CategoryBox
            key={cat.id}
            image={cat.Link}
            title={cat.title}
            link={`/${cat.title.toLowerCase()}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;