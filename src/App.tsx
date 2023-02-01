import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/Store';
import Home from './views/home';

const App: React.FC = ({navigation}: any) => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View>
          <Home nav={navigation} />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
