import React from 'react';
import ReactSlider from 'react-slider';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export const Slider: React.FC<SliderProps> = ({ min, max, step, value, onChange }) => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="thumb"
      trackClassName="track"
      defaultValue={[min, max]}
      ariaLabel={['Lower thumb', 'Upper thumb']}
      ariaValuetext={state => `Thumb value ${state.valueNow}`}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      pearling
      minDistance={10}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
  );
};