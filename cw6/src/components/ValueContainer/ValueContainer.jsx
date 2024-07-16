import "./ValueContainer.css";
import Range from "../Range/Range.jsx";
import { useState } from "react";

function ValueContainer({ setInitialValues }) {
  const [value1, setValue1] = useState(3000);
  const [value2, setValue2] = useState(600);
  const [value3, setValue3] = useState(2400);
  const [value4, setValue4] = useState(5);
  const [selectedYear, setSelectedYear] = useState(5);

  function onChangeHomeValue(newVal) {
    setValue1(newVal);
    const newDP = newVal * 0.2;
    const newLoan = newVal - newDP;
    setValue2(newDP);
    setValue3(newLoan);
  }

  function onChangeLoanAmount(newVal) {
    setValue3(newVal);
    const newDP = value1 - newVal;
    setValue2(newDP);
  }

  function onChangeDownPayment(newVal) {
    setValue2(newVal);
    const newLoan = value1 - newVal;
    setValue3(newLoan);
  }

  setInitialValues(value3, value4, selectedYear, value1);

  return (
    <div className="valueContainer">
      <Range
        heading="Home Value"
        min={1000}
        max={10000}
        minVal={`$ ${1000}`}
        maxVal={`$ ${10000}`}
        value={value1}
        setValue={onChangeHomeValue}
      ></Range>
      <Range
        heading="Down Payment"
        min={0}
        max={value1}
        minVal={`$ ${0}`}
        maxVal={`$ ${value1}`}
        value={value2}
        setValue={onChangeDownPayment}
      />
      <Range
        heading="Loan Amount"
        min={0}
        max={value1}
        minVal={`$ ${0}`}
        maxVal={`$ ${value1}`}
        value={value3}
        setValue={onChangeLoanAmount}
      />
      <Range
        heading="Interest Rate"
        min={2}
        max={18}
        minVal={`% ${2}`}
        maxVal={`% ${18}`}
        value={value4}
        setValue={setValue4}
      />
      <div className="selectContainer">
        <label htmlFor="loan-term">Tenure</label>
        <select
          id="loan-term"
          className="mySelect"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          <option value="5">5 years</option>
          <option value="10">10 years</option>
          <option value="15">15 years</option>
          <option value="20">20 years</option>
          <option value="25">25 years</option>
        </select>
      </div>
    </div>
  );
}

export default ValueContainer;
