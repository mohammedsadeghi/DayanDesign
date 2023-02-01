import * as React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Style} from './LogInStyle';
import {TextInput} from '../../components/textInput/TextInput';
import {HomeButton} from '../../components/buttons/HomeButtons';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'درمانگاه',
    value: '1',
    selected: false,
    labelStyle: {fontSize: 18, fontWeight: 'bold', color: 'black'},
  },
  {
    id: '2',
    label: 'مطب    ',
    selected: false,
    value: '2',
    labelStyle: {fontSize: 18, fontWeight: 'bold', color: 'black'},
  },
];
const LogIn = ({navigation}: any) => {
  const [radioButtons, setRadioButtons] = React.useState(radioButtonsData);
  React.useEffect(() => {
    radioButtonsData[0].selected = true;
    setTimeout(() => {
      setRadioButtons([...radioButtonsData]);
    }, 1000);
  }, []);

  function onPressRadioButton(radioButtonsArray: any) {
    console.log({radioButtonsArray});

    setRadioButtons(radioButtonsArray);
  }
  return (
    <>
      <LinearGradient
        colors={['#FDFCFB', '#667EEA']}
        style={Style.linear_gradient}>
        <View style={Style.main_container}>
          <TextInput
            onChange={() => {}}
            placeholder={navigation.state.params.userName}
          />
          <TextInput onChange={() => {}} placeholder={'رمز عبور'} />
          <Text style={Style.text}>لطفا محل استقرار خود را مشخص کنید:</Text>
          <View>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
            />
          </View>
          {radioButtonsData[0].selected ? (
            <TextInput onChange={() => {}} placeholder={'درمانگاه'} />
          ) : (
            <View style={{opacity: 0}}>
              <TextInput onChange={() => {}} placeholder={'درمانگاه'} />
            </View>
          )}
          <HomeButton
            text="       ورود     "
            handleClick={() => {
              navigation.navigate('Splash');
            }}
          />
        </View>
      </LinearGradient>
    </>
  );
};
export default LogIn;
