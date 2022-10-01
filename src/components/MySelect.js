import React from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";

const MySelect = props => {
  if (props.allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        options={[props.allOption, ...props.options]}
        onChange={selected => {
          if (
            selected !== null &&
            selected.length > 0 &&
            selected[selected.length - 1].value === props.allOption.value
          ) {
            return props.onChange(props.options);
          }
          return props.onChange(selected);
        }}
      />
    );
  }

  return <ReactSelect {...props} />;
};

MySelect.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })
};

MySelect.defaultProps = {
  allOption: {
    label: "Select all",
    value: "*"
  }
};

export default MySelect;