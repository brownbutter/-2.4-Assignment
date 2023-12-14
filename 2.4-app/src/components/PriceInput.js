function PriceInput({ value, label, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input value={value} onChange={(event) => onChange(event)} />
    </div>
  );
}

export default PriceInput;
