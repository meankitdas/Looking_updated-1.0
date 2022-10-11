import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  AsyncStorage,
} from "react-native";
import React from "react";
import Form from "../components/Forms/Form";
import FormField from "../components/Forms/FormField";
import SubmitButton from "../components/SubmitButton";
import TouableText from "../components/TouableText";

import languages from "../data/languages";

import auth from '@react-native-firebase/auth';

import MultipleInput from "../components/MultipleInput";

import AppText from "../components/Text";

import Ionicons from "react-native-vector-icons/Ionicons";

import CollegeInput from "../components/CollegeInput";
import * as Yup from "yup";

// import AsyncStorage from '@react-native-async-storage/async-storage'

import Screen from "../components/Screen";
import colors from "../config/colors";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("name"),
  primary_language: Yup.string().required().label("primary_language"),
  secondary_language: Yup.string().required().label("secondary_language"),
  year: Yup.string().required().label("year"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10)
    .min(10),
});

const user_sumbit = async (data) => {
  try {
    let store = await fetch(
      "https://0fca-122-187-109-194.ngrok.io/user/details",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Name: data.name,
            user_id: auth().currentUser.uid,
            Primary_Language: data.primary_language,
            Secondary_Language: data.secondary_language,
            Phone_Number: data.number,
            valid: "true",

            // Name: "Ankit",
            // user_id: "1234",
            // Primary_Language: "Hindi",
            // Secondary_Language: "English",
            // Phone_Number: "1234567890",
            // valid: "true",
            
        }),
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export default function ProfileScreen({ navigation }) {
  //   const isValid = async () => {
  //     await AsyncStorage.setItem("isValid", "true");
  //     // const value = await AsyncStorage.getItem('key');
  //     // console.log(value);
  //   };

  return (
    <Screen style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.header}>
            <Ionicons
              name="person"
              size={100}
              color="#132043"
              style={styles.logo}
            />
            <AppText style={styles.login}>Profile</AppText>
          </View>
          <Form
            initialValues={{
              name: "",
              primary_language: "",
              secondary_language: "",
              number: "",
              year: "",
            }}
            onSubmit={(data) => {
              //   isValid();
              //   navigation.navigate("MainScreen");
              user_sumbit(data);
              console.log(data);
            }}
            validationSchema={validationSchema}
          >
            <View style={styles.form}>
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                thirdIcon="person"
                //   keyboardType="email-address"
                name="name"
                placeholder="Name"
                textContentType="name"
              />

              <MultipleInput
                placeholder="Primary Language"
                name="primary_language"
                language="primary"
                data={languages}
              />
              <MultipleInput
                placeholder="Secondary Language"
                name="secondary_language"
                language="secondary"
                data={languages}
              />

              <CollegeInput placeholder="College Year" year="year" />
              <FormField
                autoCorrect={false}
                keyboardType={"phone-pad"}
                icon="phone-in-talk"
                name="number"
                placeholder="Mobile Number"
              />
            </View>
            <View style={styles.button}>
              <SubmitButton title="Next" />
            </View>
            {/* <TouableText
            title="Have you registered before?"
            style={{ alignSelf: "center", marginTop: 200 }}
            onPress={() => navigation.navigate("Login")}
          /> */}
          </Form>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  login: {
    fontSize: 40,
    marginLeft: 20,
  },
});
