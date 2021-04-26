import React from 'react';
import styled from 'styled-components';

const Details = styled.details`
  border: 1px solid black;
  position: relative;
  width: 300px;
`;

const Summary = styled.summary``;

const Context = styled.p`
  position: absolute;
  top: 20px;
  right: 10px;
  z-index: 1;
  width: 200px;
  margin: 0;
  border: 1px solid black;
  background-color: white;
`;

const DetailsContainer = ({ summary, context, togglePopover, index, open }) => {
  return (
    <>
      <Details open={open}>
        <Summary onClick={togglePopover}>{summary}</Summary>
        <Context>{context}</Context>
      </Details>
    </>
  );
}

export default DetailsContainer;