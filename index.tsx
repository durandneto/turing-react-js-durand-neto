import React from 'react';
import { render } from 'react-dom';
import './style.css';

import IntersectionObserver from './useEffect/IntersectionObserver';

const App = () => {
  return (
    <div>
      <IntersectionObserver />
    </div>
  );
};

render(<App />, document.getElementById('root'));
