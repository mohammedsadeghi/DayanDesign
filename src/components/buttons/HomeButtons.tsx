import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from './style';

export const HomeButton = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick: () => void;
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => handleClick()}
        style={style.pressable_layout}>
        <Text style={style.pressable_text}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};
