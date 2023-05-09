import { useState } from 'react';

export const useCount = (inicial = 1, min, max) => {
  (inicial < min || inicial > max) && (inicial = min);
  const [count, setCount] = useState(inicial);

  const aumentar = () => count < max && setCount(count + 1);
  const reducir = () => count > min && setCount(count - 1);

  return { count, aumentar, reducir };
};
