import { useCallback, useState } from "react";

interface IProps {
  type: string;
  defValue: string | number;
}

const useInput = ({ type, defValue }: IProps) => {
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
