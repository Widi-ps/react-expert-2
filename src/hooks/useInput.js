import { useState } from 'react';

// Hooks for an input
function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange({ target }) {
    setValue(target.value);
  }

  return [value, setValue];
}

export default useInput;
