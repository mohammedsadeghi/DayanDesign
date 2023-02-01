import React from 'react';
import {TextInput as Txt} from 'react-native';
import {Style} from './style';

export const TextInput = ({onChange, placeholder}: any) => {
  return (
    <>
      <Txt
        onChange={() => onChange}
        placeholder={placeholder}
        style={Style.text_input}
      />
    </>
  );
};
