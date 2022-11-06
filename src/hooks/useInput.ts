import { useCallback, useState } from "react";

interface IuseInputProps {
  type: string;
  defValue: string | number;
}

const useInput = ({ type, defValue }: IuseInputProps) => {
  const [value, setValue] = useState(defValue);
  return {
    inputProps: {
      type,
      value,
      onChange: useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const {
          target: { value }
        } = event;
        setValue(value);
      }, [])
    },
    resetValue: () => {
      setValue(defValue);
    }
  };
};

export default useInput;
