import { useState } from 'react';
import { TextInput, NumberInput } from '@mantine/core';
import { useFloatingInput } from '../hooks/useFloatingInput';

interface Props {
  label: string;
  isNumber?: boolean;
  required?: boolean;
}

export function FloatingLabelInput({
  label,
  isNumber,
  required,
  ...inputProps
}: Props & any) {
  const [focused, setFocused] = useState(false);
  const { classes } = useFloatingInput({
    floating: focused,
  });

  return (
    <>
      {isNumber ? (
        <NumberInput
          label={label}
          required={required}
          classNames={classes}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          mt='md'
          autoComplete='nope'
          size='lg'
          {...inputProps}
        />
      ) : (
        <TextInput
          label={label}
          required={required}
          classNames={classes}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          mt='md'
          autoComplete='nope'
          size='lg'
          {...inputProps}
        />
      )}
    </>
  );
}
