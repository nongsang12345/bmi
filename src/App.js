import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  // สร้าง useRef สำหรับช่องน้ำหนักและส่วนสูง
  const weightRef = useRef();
  const heightRef = useRef();

  // สร้าง state สำหรับแสดงผล BMI
  const [bmi, setBmi] = useState(null);

  // ฟังก์ชันคำนวณ BMI
  const calculateBmi = () => {
    const weight = weightRef.current.value;
    const height = heightRef.current.value;

    // คำนวณ BMI
    const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);

    // ตั้งค่า state ใหม่
    setBmi(bmiValue);
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div>
        <label>Weight (kg):</label>
        <input type="text" ref={weightRef} />
      </div>
      <div>
        <label>Height (cm):</label>
        <input type="text" ref={heightRef} />
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
      {bmi && <BmiText bmi={bmi} />}
    </div>
  );
}

function BmiText({ bmi }) {
  let bmiText = '';

  if (bmi < 18.5) {
    bmiText = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiText = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiText = 'Overweight';
  } else {
    bmiText = 'Obese';
  }

  return <p>Your BMI is {bmi}, which is considered {bmiText}.</p>;
}

export default App;
