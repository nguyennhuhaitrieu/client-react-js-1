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

const MultySelect = (props: Props) => {
  const { options, placeholder, defaultValue = [], formik: { values } } = props;

  const handleOnChange = (select) => {
    const { name, formik: { setFieldValue } } = props;
    const selectedValues = select && select.map(e => e.value);
    setFieldValue(name, selectedValues);
  };

  const selectedValue = () => {
    const { name } = props;

    return options.filter(e => (values[name] || []).includes(e.value));
  };
  return (
    <Select
      value={selectedValue(props).length > 0 ? selectedValue(props) : defaultValue}
      options={options}
      onChange={handleOnChange}
      isMulti={true}
      placeholder={placeholder}
      className="select_notify"
      classNamePrefix="select"
    />
  );
};

export default connect(MultySelect);
