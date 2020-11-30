import React from "react";
import {
  Wrapper,
  SelectionWrapper,
  Selection,
  Option,
  FilterWrapper,
  FilterInput,
  ApplyButton,
} from "./ControlPanel.styled";

const ControlPanel = () => {
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
        <Selection>
          <Option disabled="true" color="#BDCCFF">
            sort by name
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
};

export default ControlPanel;
