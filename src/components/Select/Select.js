import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper>
          <Icon id='chevron-down' strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: 1rem;
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding-right: 52px;

  // adjasent sibling selector
  // if the native select is focused, then the presentational bit (current element) should be focused. The focus is basically  the outline
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121; 
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
   color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 24px;
  height: 24px;
  margin: auto;
  pointer-events: none;
`

export default Select;
