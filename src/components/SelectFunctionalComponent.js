import React, { useState } from "react";
import Select from "react-select";

const SelectFunctionalComponent = props => {
  const [text, setText] = useState(props.options[0]);

  const onChange = selectedOption => {
    setText(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return <Select options={props.options} onChange={onChange} value={text} />;
};

export default SelectFunctionalComponent;
