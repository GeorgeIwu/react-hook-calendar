import React from 'react';
import * as dateFns from 'date-fns';
import styled from 'styled-components';

const Header = ({ currentDate, handleSetDate }) => {
  const dateFormat = 'MMMM yyyy';
  const title = dateFns.format(currentDate, dateFormat);

  const onClickNext = () => {
    handleSetDate(dateFns.addMonths(currentDate, 1));
  };

  const onClickPrevious = () => {
    handleSetDate(dateFns.subMonths(currentDate, 1));
  };

  return (
    <StyledHeader className="header row-header">
      <div className="col-header col-start-header">
        <div className="icon-header" onClick={onClickPrevious}>
          chevron_left
        </div>
      </div>
      <div className="col-header col-center-header">
        <span>{title}</span>
      </div>
      <div className="col-header col-end-header" onClick={onClickNext}>
        <div className="icon-header">chevron_right</div>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: block;
  width: 100%;
  padding: 1.75em 0;
  border-bottom: 1px solid var(--border-color);
  background: var(--neutral-color);

  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  .col-header {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }
  .col-start-header {
    justify-content: flex-start;
    text-align: left;
  }
  .col-center-header {
    justify-content: center;
    text-align: center;
  }
  .col-end-header {
    justify-content: flex-end;
    text-align: right;
  }
  .icon-header {
    font-family: 'Material Icons', serif;
    font-style: normal;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
  }
`;
