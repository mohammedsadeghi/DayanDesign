import {View, Image} from 'react-native';
import React from 'react';
import Styles from './Home.style.js';
import Main_header from './../../assets/main-header.jpeg';
import {HomeButton} from './../../components/buttons/HomeButtons';
import LinearGradient from 'react-native-linear-gradient';

const Home: React.FC = ({nav}: any) => {
  return (
    <>
      <LinearGradient colors={['#FDFCFB', '#667EEA']}>
        <View style={Styles.home_wrapper}>
          <View style={Styles.main_header}>
            <Image source={Main_header} />
          </View>
          <View style={Styles.button_container}>
            <View>
              <HomeButton
                text="ورود با کد فیدا"
                handleClick={() => {
                  nav.navigate('LogIn', {userName: 'کد فیدا'});
                }}
              />
            </View>
            <View>
              <HomeButton
                text="ورود با کد ملی"
                handleClick={() => {
                  nav.navigate('LogIn', {userName: 'کد ملی'});
                }}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default Home;
