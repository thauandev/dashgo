import {
  Input as CInput,
  FormLabel,
  FormControl,
  InputProps as CInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends CInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <CInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
        ref={ref}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
