import React from 'react'
import useClock from '../features/useClock'

const Clock = ({ className, size }) => {
    const time = useClock();
  
    return (
      <Circle size={size} className={className}>
        {Array(12).fill().map((_, i) => {
          return (
            <Mark
              key={i}
              size={size}
              rotation={i * 30 + "deg"}
            >
              {getRomanNumeral(i)}
            </Mark>
          );
        })}
        <Hands time={time} borderWidth={10} />
      </Circle>
    );
  };

export default Clock
