import { useState } from 'react';

const useTags = (tags) => {
  return Object.keys(tags).map((key) => {
    // eslint-disable-next-line
    const [selected, setSelected] = useState(false);
    return { name: key, selected, setSelected };
  });
};

export default useTags;
