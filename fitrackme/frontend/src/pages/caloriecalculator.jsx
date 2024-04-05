import React, { useState } from 'react';
import '../stylesheets/caloriecalculator.css';
import NavForOther from '../components/navforother';

export default function CalorieCalculator() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('');
  const [totalCalories, setTotalCalories] = useState('');
  const [error, setError] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    let calculatedCalories = 0;

    if (gender === 'male') {
      calculatedCalories = calculateMaleCalories();
    } else if (gender === 'female') {
      calculatedCalories = calculateFemaleCalories();
    }

    setTotalCalories(calculatedCalories.toFixed(2));
  };

  const validateInputs = () => {
    if (!age || !weight || !height || !activity) {
      setError('Please fill in all fields');
      return false;
    }

    const parsedAge = parseInt(age);
    if (parsedAge < 15 || parsedAge > 80) {
      setError('Please enter a valid age between 15 and 80');
      return false;
    }

    const parsedWeight = parseInt(weight);
    if (parsedWeight < 20 || parsedWeight > 500) {
      setError('Please enter a valid weight between 20 and 500 kg');
      return false;
    }

    const parsedHeight = parseInt(height);
    if (parsedHeight < 2 || parsedHeight > 7) {
      setError('Please enter a height above 2ft and less than 7ft');
      return false;
    }

    if (!gender) {
      setError('Please select your gender');
      return false;
    }

    if (!activity) {
      setError('Please select the activity');
      return false;
    }

    setError('');
    return true;
  };

  const calculateMaleCalories = () => {
    const baseFormula = 66.5 + 13.75 * parseFloat(weight) + 5.003 * parseFloat(height) - 6.755 * parseFloat(age);
    let activityFactor = 1.2; // Default activity factor for sedentary

    switch (activity) {
      case 'sedentary':
        activityFactor = 1.2;
        break;
      case 'lightlyActive':
        activityFactor = 1.375;
        break;
      case 'moderatelyActive':
        activityFactor = 1.55;
        break;
      case 'veryActive':
        activityFactor = 1.725;
        break;
      case 'extraActive':
        activityFactor = 1.9;
        break;
      default:
        break;
    }

    return activityFactor * baseFormula;
  };

  const calculateFemaleCalories = () => {
    const baseFormula = 655 + 9.563 * parseFloat(weight) + 1.85 * parseFloat(height) - 4.676 * parseFloat(age);
    let activityFactor = 1.2; // Default activity factor for sedentary

    switch (activity) {
      case 'sedentary':
        activityFactor = 1.2;
        break;
      case 'lightlyActive':
        activityFactor = 1.375;
        break;
      case 'moderatelyActive':
        activityFactor = 1.55;
        break;
      case 'veryActive':
        activityFactor = 1.725;
        break;
      case 'extraActive':
        activityFactor = 1.9;
        break;
      default:
        break;
    }

    return activityFactor * baseFormula;
  };

  return (
    <>
    <NavForOther/>
    <div className="calorie-calculator-container">
      <h2>Calorie Calculator</h2>
      <div className="input-group">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          />
      </div>

      <div className="input-group">
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="weight">Weight (kg)</label>
        <input
          type="number"
          id="weight"
          placeholder="Enter your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          />
      </div>

      <div className="input-group">
        <label htmlFor="height">Height (cm)</label>
        <input
          type="number"
          id="height"
          placeholder="Enter your height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          />
      </div>

      <div className="input-group">
        <label htmlFor="activity">Activity</label>
        <select
          id="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          >
          <option value="">Select activity level</option>
          <option value="sedentary">Sedentary</option>
          <option value="lightlyActive">Lightly Active</option>
          <option value="moderatelyActive">Moderately Active</option>
          <option value="veryActive">Very Active</option>
          <option value="extraActive">Extra Active</option>
        </select>
      </div>

      <button className="cbtn" onClick={handleCalculate}>Calculate</button>

      <div className="total-calories-box">
        <h3>Total Calories:</h3>
        <div className="calories">{totalCalories}</div>
      </div>

      {error && <div className="error-cc">{error}</div>}
    </div>
          </>
  );
}
