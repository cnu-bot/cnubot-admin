import { useCallback, useState } from "react";
import { useAppDispatch } from "~/redux/hooks";
import { setState } from "~/redux/modules/loginSlice";

interface Props {
  type: string;
  defValue: string | number;
}

const useInput = ({ type, defValue }: Props) => {
  const [value, setValue] = useState(defValue);
  const dispatch = useAppDispatch();
  return {
    inputProps: {
      type,
      value,
      onChange: useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          const {
            target: { value }
          } = event;
          setValue(value);
          dispatch(setState({ key: type, val: value }));
        },
        [dispatch, type]
      )
    },
    resetValue: () => {
      setValue(defValue);
    }
  };
};

export default useInput;
