// @flow
import Select from 'react-select';
import React from 'react';
import { connect } from 'formik';

type Props = {
  name: Any,
  options: Object,
  placeholder: String,
  formik: Object,
  defaultValue: Array,
}

const SelectReact = (props: Props) => {
  const { options, placeholder, formik: { values } } = props;

  const handleOnChange = (select) => {
    const { name, formik: { setFieldValue } } = props;
    setFieldValue(name, select.value);
  };

  const selectedValue = () => {
    const { name } = props;
    return options.filter(e => (e.value === values[name].id))[0];
  };

  return (
  // <Select
  //   value={selectedValue(props).length > 0 ? selectedValue(props) : defaultValue}
  // />

    <Select
      value={selectedValue()}
      className="select_notify"
      classNamePrefix="select"
      placeholder={placeholder}
      onChange={handleOnChange}
      options={options}
      isSearchable={true}
    />
  );
};

export default connect(SelectReact);
