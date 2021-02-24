import * as React from "react";

interface Props {
  options: Record<string, string>;
  onChange: (key: string) => void;
}

const StyleSelector: React.FC<Props> = ({ options, onChange }) => {
  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(ev.target.value);
  };

  return (
    <select onChange={handleChange}>
      {Object.keys(options).map((k) => (
        <option key={k} value={k}>
          {k}
        </option>
      ))}
    </select>
  );
};

export default StyleSelector;
