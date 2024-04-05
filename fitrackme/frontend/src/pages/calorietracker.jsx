import React, { useState } from 'react';
import '../stylesheets/calorietracker.css';
import NavForOther from '../components/navforother';

export default function CalorieTracker() {
  const [foods, setFoods] = useState([]);
  const [breakfastName, setBreakfastName] = useState('');
  const [breakfastCalories, setBreakfastCalories] = useState('');
  const [lunchName, setLunchName] = useState('');
  const [lunchCalories, setLunchCalories] = useState('');
  const [dinnerName, setDinnerName] = useState('');
  const [dinnerCalories, setDinnerCalories] = useState('');
  const [snacksName, setSnacksName] = useState('');
  const [snacksCalories, setSnacksCalories] = useState('');
  const [error, setError] = useState('');
  const [editFoodId, setEditFoodId] = useState(null);
  const [editedFoodName, setEditedFoodName] = useState('');
  const [editedCalorieCount, setEditedCalorieCount] = useState('');

  const addFood = (mealType) => {
    let foodName, calorieCount;
    switch (mealType) {
      case 'breakfast':
        foodName = breakfastName;
        calorieCount = breakfastCalories;
        break;
      case 'lunch':
        foodName = lunchName;
        calorieCount = lunchCalories;
        break;
      case 'dinner':
        foodName = dinnerName;
        calorieCount = dinnerCalories;
        break;
      case 'snacks':
        foodName = snacksName;
        calorieCount = snacksCalories;
        break;
      default:
        break;
    }

    if (!foodName.trim() && !calorieCount.trim()) {
      setError('Please enter both food name and calorie count.');
      return;
    } else if (!foodName.trim()) {
      setError('Please enter food name.');
      return;
    } else if (!calorieCount.trim()) {
      setError('Please enter calorie count.');
      return;
    }

    const newFood = { id: Date.now(), mealType, foodName, calorieCount, date: new Date().toLocaleDateString() };
    setFoods([...foods, newFood]);
    setError('');

    // Clear input fields based on meal type
    switch (mealType) {
      case 'breakfast':
        setBreakfastName('');
        setBreakfastCalories('');
        break;
      case 'lunch':
        setLunchName('');
        setLunchCalories('');
        break;
      case 'dinner':
        setDinnerName('');
        setDinnerCalories('');
        break;
      case 'snacks':
        setSnacksName('');
        setSnacksCalories('');
        break;
      default:
        break;
    }
  };

  const deleteFood = (id) => {
    setFoods(foods.filter(food => food.id !== id));
  };

  const updateFood = (id, updatedFood) => {
    const updatedFoods = foods.map(food => {
      if (food.id === id) {
        return { ...food, foodName: updatedFood.foodName, calorieCount: updatedFood.calorieCount };
      }
      return food;
    });
    setFoods(updatedFoods);
    setEditFoodId(null);
  };

  return (
    <>
      <div className="main-for-ct">
        <div className="stylingnav">
          <NavForOther />
        </div>
        <div className="hd">
          <h1 className='hdd'>Calorie Tracking</h1>
        </div>
        {/* Error message */}
        {/* Breakfast section */}
        <div className="breakfast">
          <h2>Breakfast</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="Food Name"
              value={breakfastName}
              onChange={(e) => setBreakfastName(e.target.value)}
              />
            <input
              type="number"
              placeholder="Calorie Count"
              value={breakfastCalories}
              onChange={(e) => setBreakfastCalories(e.target.value)}
              />
            <button className='btnnnn' onClick={() => addFood('breakfast')}>Add</button>
          </div>
          <ul>
            {foods.map(food => (
              food.mealType === 'breakfast' && (
                <li key={food.id}>
                  <span className="date">{food.date}</span> - <span style={{ color: 'black' }}>{food.foodName} - {food.calorieCount} calories</span>

                  {editFoodId === food.id ? (
                    <>
                      <input
                        type="text"
                        placeholder="Food Name"
                        value={editedFoodName}
                        onChange={(e) => setEditedFoodName(e.target.value)}
                        />
                      <input
                        type="number"
                        placeholder="Calorie Count"
                        value={editedCalorieCount}
                        onChange={(e) => setEditedCalorieCount(e.target.value)}
                        />
                      <button className='btnnnn' onClick={() => updateFood(food.id, { foodName: editedFoodName, calorieCount: editedCalorieCount })}>Save</button>
                    </>
                  ) : (
                    <>
                      <button className='btnnnn' onClick={() => {
                        setEditFoodId(food.id);
                        setEditedFoodName(food.foodName);
                        setEditedCalorieCount(food.calorieCount);
                      }}>Update</button>
                      <button className='btnnnn' onClick={() => deleteFood(food.id)}>Delete</button>
                    </>
                  )}
                </li>
              )
            ))}
          </ul>
        </div>
        {/* Lunch section */}
        <div className="lunch">
          <h2>Lunch</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="Food Name"
              value={lunchName}
              onChange={(e) => setLunchName(e.target.value)}
              />
            <input
              type="number"
              placeholder="Calorie Count"
              value={lunchCalories}
              onChange={(e) => setLunchCalories(e.target.value)}
              />
            <button className='btnnnn' onClick={() => addFood('lunch')}>Add</button>
          </div>
          <ul>
            {foods.map(food => (
              food.mealType === 'lunch' && (
                <li key={food.id}>
                  <span className='date'>{food.date}</span> - <span style={{ color: 'black' }}>{food.foodName} - {food.calorieCount} calories</span>
                  {editFoodId === food.id ? (
                    <>
                      <input
                        type="text"
                        placeholder="Food Name"
                        value={editedFoodName}
                        onChange={(e) => setEditedFoodName(e.target.value)}
                        />
                      <input
                        type="number"
                        placeholder="Calorie Count"
                        value={editedCalorieCount}
                        onChange={(e) => setEditedCalorieCount(e.target.value)}
                        />
                      <button  className='btnnnn' onClick={() => updateFood(food.id, { foodName: editedFoodName, calorieCount: editedCalorieCount })}>Save</button>
                    </>
                  ) : (
                    <>
                      <button className='btnnnn' onClick={() => {
                        setEditFoodId(food.id);
                        setEditedFoodName(food.foodName);
                        setEditedCalorieCount(food.calorieCount);
                      }}>Update</button>
                      <button className='btnnnn' onClick={() => deleteFood(food.id)}>Delete</button>
                    </>
                  )}
                </li>
              )
            ))}
          </ul>
        </div>
        {/* Dinner section */}
        <div className="dinner">
          <h2>Dinner</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="Food Name"
              value={dinnerName}
              onChange={(e) => setDinnerName(e.target.value)}
              />
            <input
              type="number"
              placeholder="Calorie Count"
              value={dinnerCalories}
              onChange={(e) => setDinnerCalories(e.target.value)}
              />
            <button className='btnnnn' onClick={() => addFood('dinner')}>Add</button>
          </div>
          <ul>
            {foods.map(food => (
              food.mealType === 'dinner' && (
                <li key={food.id}>
                  <span className='date'>{food.date}</span> - <span style={{ color: 'black' }}>{food.foodName} - {food.calorieCount} calories</span>
                  {editFoodId === food.id ? (
                    <>
                      <input
                        type="text"
                        placeholder="Food Name"
                        value={editedFoodName}
                        onChange={(e) => setEditedFoodName(e.target.value)}
                        />
                      <input
                        type="number"
                        placeholder="Calorie Count"
                        value={editedCalorieCount}
                        onChange={(e) => setEditedCalorieCount(e.target.value)}
                        />
                      <button className='btnnnn' onClick={() => updateFood(food.id, { foodName: editedFoodName, calorieCount: editedCalorieCount })}>Save</button>
                    </>
                  ) : (
                    <>
                      <button className='btnnnn' onClick={() => {
                        setEditFoodId(food.id);
                        setEditedFoodName(food.foodName);
                        setEditedCalorieCount(food.calorieCount);
                      }}>Update</button>
                      <button className='btnnnn' onClick={() => deleteFood(food.id)}>Delete</button>
                    </>
                  )}
                </li>
              )
            ))}
          </ul>
        </div>
        {/* Snacks section */}
        <div className="snacks">
          <h2>Snacks</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="Food Name"
              value={snacksName}
              onChange={(e) => setSnacksName(e.target.value)}
              />
            <input
              type="number"
              placeholder="Calorie Count"
              value={snacksCalories}
              onChange={(e) => setSnacksCalories(e.target.value)}
              />
            <button className='btnnnn' onClick={() => addFood('snacks')}>Add</button>
          </div>
          <ul>
            {foods.map(food => (
              food.mealType === 'snacks' && (
                <li key={food.id}>
                  <span className='date'>{food.date}</span> - <span style={{ color: 'black' }}>{food.foodName} - {food.calorieCount} calories</span>
                  {editFoodId === food.id ? (
                    <>
                      <input
                        type="text"
                        placeholder="Food Name"
                        value={editedFoodName}
                        onChange={(e) => setEditedFoodName(e.target.value)}
                        />
                      <input
                        type="number"
                        placeholder="Calorie Count"
                        value={editedCalorieCount}
                        onChange={(e) => setEditedCalorieCount(e.target.value)}
                        />
                      <button className='btnnnn' onClick={() => updateFood(food.id, { foodName: editedFoodName, calorieCount: editedCalorieCount })}>Save</button>
                    </>
                  ) : (
                    <>
                      <button className='btnnnn' onClick={() => {
                        setEditFoodId(food.id);
                        setEditedFoodName(food.foodName);
                        setEditedCalorieCount(food.calorieCount);
                      }}>Update</button>
                      <button className='btnnnn' onClick={() => deleteFood(food.id)}>Delete</button>
                    </>
                  )}
                </li>
              )
            ))}
          </ul>
        </div>
      {error && <div className="error">{error}</div>}
      </div>
    </>
  );
}
