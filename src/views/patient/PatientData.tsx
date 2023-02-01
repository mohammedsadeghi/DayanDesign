import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Style} from './PatientStyle';
import {Text, View} from 'react-native';
import {TextInput} from '../../components/textInput/TextInput';
import {RadioGroup} from 'react-native-radio-buttons-group';
import {HomeButton} from '../../components/buttons/HomeButtons';

const radioButtonsData = [
  {
    id: '1',
    label: 'ایرانی        ',
    value: '1',
    selected: false,
    labelStyle: {fontSize: 18, fontWeight: 'bold', color: 'black'},
  },
  {
    id: '2',
    label: 'اتباع خارجه',
    selected: false,
    value: '2',
    labelStyle: {fontSize: 18, fontWeight: 'bold', color: 'black'},
  },
];
const Patient = ({navigation}: any) => {
  const [residentStatus, setResidentStatus] = React.useState('iranian');
  const [radioButtons, setRadioButtons] = React.useState(radioButtonsData);

  React.useEffect(() => {
    radioButtonsData[0].selected = true;

    setRadioButtons([...radioButtonsData]);
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
          <Text style={Style.text}>لطفا ملیت بیمار را مشخص کنید:</Text>
          <View>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
            />
          </View>
          {radioButtonsData[0].selected ? (
            <TextInput onChange={() => {}} placeholder={'کد ملی'} />
          ) : (
            <TextInput onChange={() => {}} placeholder={'کد اتباع خارجی'} />
          )}
          <HomeButton
            text="دریافت اطلاعات بیمار"
            handleClick={() => {
              navigation.navigate('');
            }}
          />
        </View>
      </LinearGradient>
    </>
  );
};
export default Patient;
