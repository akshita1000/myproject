import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';

import Colors from '../common/Colors';
import Font from '../common/Font';
import { getWidth } from '../common/Layout';

const DrawerOption = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ marginTop: 30, flexDirection: 'row', marginHorizontal: 10 }}>
      <Image
        style={{ height: 22, width: 22, marginRight: 10 }}
        source={props.icon}
      />
      <Text style={styles.txtStyle}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteText,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    justifyContent: 'flex-end',
    backgroundColor: Colors.themeColor,
    elevation: 5,
  },
  imgStyle: {
    height: getWidth(40),
    width: getWidth(40)
  },
  txtStyle: {
    fontSize: 16,
    color: Colors.headingColor,
    fontStyle: 'normal',
    fontFamily: Font.Roboto

  },
  help: {
    height: 50,
    width: 50,
    elevation: 13,
    borderRadius: 100,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 50
  }

});
export default DrawerOption;
