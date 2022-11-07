import { useCallback, useState } from "react";

interface Props {
  type: string;
  defValue: string | number;
}

const useInput = ({ type, defValue }: Props) => {
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
