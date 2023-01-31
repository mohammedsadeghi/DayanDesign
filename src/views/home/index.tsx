import {View, Text, FlatList, ActivityIndicator, Image} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Styles from './Home.style.js';
import {connect} from 'react-redux';
import Main_header from './../../assets/main-header.jpeg';
import {HomeButton} from './../../components/buttons/HomeButtons';

const Home: React.FC = () => {
  return (
    <>
      <View style={Styles.home_wrapper}>
        <View style={Styles.main_header}>
          <Image source={Main_header} />
        </View>
        <View style={Styles.button_container}>
          <View>
            <HomeButton text="ورود با کد فیدا" handleClick={() => {}} />
          </View>
          <View>
            <HomeButton text="ورود با کد ملی" handleClick={() => {}} />
          </View>
        </View>
      </View>
    </>
  );
};

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {};
};
const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
