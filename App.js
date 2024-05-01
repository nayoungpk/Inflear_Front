import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const restaurants = [
    {
      name: "미도인 위례",
      cuisine: "상",
      location: "장지동 896",
      rating: 4.5,
      image: "/images/1.jpg"
    },
    {
      name: "송리단취향",
      cuisine: "중",
      location: "송파동 53-10A",
      rating: 4.8,
      image: "/images/2.jpg"
    },
    {
      name: "준호네 부대찌개",
      cuisine: "상",
      location: "태평동 5113-7",
      rating: 4.3,
      image: "/images/3.jpg"
    },
    {
      name: "미곡 반상",
      cuisine: "중",
      location: "이천시",
      rating: 4.3,
      image: "/images/4.jpg"
    },
    {
      name: "이천 막국수",
      cuisine: "상",
      location: "이천시",
      rating: 4.3,
      image: "/images/5.jpg"
    },
    {
      name: "백소정",
      cuisine: "하",
      location: "야당동",
      rating: 4.3,
      image: "/images/6.jpg"
    },
    {
      name: "포근",
      cuisine: "하",
      location: "야당동",
      rating: 4.3,
      image: "/images/7.jpg"
    },
    {
      name: "브런치빈",
      cuisine: "중",
      location: "야당동",
      rating: 4.3,
      image: "/images/8.jpg"
    },
  ];

  const filteredRestaurants = selectedCategory === 'all' ? restaurants : restaurants.filter(restaurant => restaurant.cuisine === selectedCategory);

  return (
    <div className="App">
      <header className="App-header">
        <h2>" Introducing Various Restaurants "</h2>
        <div className="buttons">
          <button className="button" onClick={() => setSelectedCategory('all')}>전체</button>
          <button className="button" onClick={() => setSelectedCategory('상')}>상</button>
          <button className="button" onClick={() => setSelectedCategory('중')}>중</button>
          <button className="button" onClick={() => setSelectedCategory('하')}>하</button>
        </div>
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant, index) => (
            <div key={index} className="restaurant">
              <img src={restaurant.image} alt={restaurant.name} />
              <div className="restaurant-info">
                <h2>{restaurant.name}</h2>
                <img src="/images/minus.png" alt="Food Icon" width="20" height="20" />
                <p><strong>음식 종류:</strong> {restaurant.cuisine}</p>
                <p><strong>위치:</strong> {restaurant.location}</p>
                <p><strong>평점:</strong> {restaurant.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
