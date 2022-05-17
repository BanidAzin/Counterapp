/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const App = () => {
  const [timer, setTimer] = useState(10);

  const {width, height} = useWindowDimensions();

  useEffect(() => {
    if (timer > 0) {
      const counterInterval = setInterval(() => {
        setTimer(prevCount => prevCount - 1);
      }, 1000);

      return () => clearInterval(counterInterval);
    }
  }, [timer]);

  return (
    <SafeAreaView>
      <View
        style={[
          styles.container,
          {
            height,
            width,
          },
        ]}>
        <Text style={styles.textStyle}>{timer}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 50,
  },
});

export default App;
