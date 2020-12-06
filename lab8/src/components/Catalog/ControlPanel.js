import React from "react";
import {
  Wrapper,
  SelectionWrapper,
  Option,
  Selection,
  FilterWrapper,
  FilterInput,
  ApplyButton,
} from "./ControlPanel.styled";

function ControlPanel() {
  return (
    <Wrapper>
      <SelectionWrapper>
        <Selection>
          <Option disabled="true" color="#BDCCFF">
            sort by price
          </Option>
          <Option>descending</Option>
          <Option>ascending</Option>
        </Selection>
        <Selection>
          <Option disabled="true" color="#BDCCFF">
            sort by rating
          </Option>
          <Option>descending</Option>
          <Option>ascending</Option>
        </Selection>
      </SelectionWrapper>
      <FilterWrapper>
        <FilterInput></FilterInput>
        <ApplyButton>Apply</ApplyButton>
      </FilterWrapper>
    </Wrapper>
  );
}

export default ControlPanel;
