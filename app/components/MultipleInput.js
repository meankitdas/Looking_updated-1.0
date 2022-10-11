import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import ErrorMessage from "./Forms/ErrorMessage";

import { useFormikContext } from "formik";

import Screen from "./Screen";

import {
  MaterialCommunityIcons,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

// const data = [
//   { label: "Item 1", value: "1" },
//   { label: "Item 2", value: "2" },
//   { label: "Item 3", value: "3" },
//   { label: "Item 4", value: "4" },
//   { label: "Item 5", value: "5" },
//   { label: "Item 6", value: "6" },
//   { label: "Item 7", value: "7" },
//   { label: "Item 8", value: "8" },
// ];

export default function MultipleInput({
  icon,
  style,
  secondIcon,
  thirdIcon,
  width,
  placeholder,
  data,
  language,
  name,

  ...otherProps
}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const { setFieldValue, values, errors, touched } = useFormikContext();

  return (
    // <Screen>
    <View style={[styles.container, { width }]}>
      {/* <View style={styles.iconContainer}>
        {secondIcon && (
          <Foundation
            name={secondIcon}
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        )}
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        )}
        {thirdIcon && (
          <Ionicons
            name={thirdIcon}
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        )}
      </View> */}

      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "#132043" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        //   search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? `Select ${placeholder}` : "..."}
        //   placeholder={!isFocus ? 'Select item' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
          console.log(item.value);

          setFieldValue(`${language}_language`, item.value);
          //   change()
        }}
        renderLeftIcon={() => (
          <FontAwesome
            style={styles.icon}
            color={isFocus ? colors.medium : colors.medium}
            name="language"
            size={20}
          />
        )}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
    // </Screen>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: colors.light,
  //     borderRadius: 25,
  //     flexDirection: "row",
  //     padding: 15,
  //     marginVertical: 10,
  //   },
  //   icon: {
  //     marginRight: 10,
  //   },
  //   iconContainer: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },

  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 9,
    marginVertical: 10,
  },
  dropdown: {
    height: 40,
    // borderColor: 'gray',
    // borderWidth: 0.5,
    // borderRadius: 8,
    // paddingHorizontal: 8,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: colors.medium,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
