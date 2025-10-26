'use client';

/* denoSlice_1-pagePart.tsx */
import { useSelector, useDispatch } from 'react-redux';
import { setText } from '@/redux/slices/demo_1-Slice';
import { RootState } from '@/redux/store';
import { useState } from 'react';

/**
 * @component DemoSlice1PagePart
 * @description A demo component showcasing Redux slice integration.
 * It displays text from the Redux store and allows updating it via an input field.
 */
const DemoSlice1PagePart: React.FC = () => {
  // State for input field
  const [inputText, setInputText] = useState('');

  // Initialize Redux dispatch hook
  const dispatch = useDispatch();

  // Select demo text from Redux store
  const demoText = useSelector((state: RootState) => state.text.value);

  // Handle input change and dispatch action to update Redux store
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    dispatch(setText(e.target.value));
  };

  return (
    <div className="denoSlice_1_pagePart">
      <div
        style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}
      >
        <h3>Demo Slice Usage</h3>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type something..."
          style={{ padding: '10px', width: '300px' }}
        />
        <p>
          Text from Redux Store: <strong>{demoText}</strong>
        </p>
      </div>
    </div>
  );
};

export default DemoSlice1PagePart;
