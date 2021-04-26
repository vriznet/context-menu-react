import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import DetailsContainer from './DetailsContainer.jsx';
import dummyData from './dummyData.js'
import './app.css';

const App = () => {
  const [openedIndex, setOpenedIndex] = useState(null);
  const togglePopover = (index) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenedIndex(index);
  }
  const closeAll = ({ target }) => {
    target.nodeName !== 'P' && setOpenedIndex(null);
  }
  useEffect(() => {
    document.body.addEventListener('click', closeAll);
    return () => {
      document.body.removeEventListener('click', closeAll);
    }
  },[openedIndex]);
  return (
    <>
      {dummyData.map(({ text, context }, index) => (
        <DetailsContainer summary={text} context={context} key={index} open={openedIndex === index} togglePopover={togglePopover(index)} />
      ))}
    </>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
