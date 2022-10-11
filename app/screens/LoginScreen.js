import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import FormField from "../components/Forms/FormField";
import SubmitButton from "../components/SubmitButton";
import Form from "../components/Forms/Form";
import colors from "../config/colors";
import AppText from "../components/Text";
import TouableText from "../components/TouableText";

import auth from '@react-native-firebase/auth';
// import firebase from "firebase";
// import ExtraLoadScreen from "../screens/ExtraLoadScreen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export default function LoginScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const submitUser = (value) => {
    const email = Object.values(value)[0];
    const password = Object.values(value)[1];
    setRefreshing(true);

    LoginUser(email, password);
  };

  const LoginUser = async (email, password) => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setRefreshing(false);
        console.log("User account signed in!");
        console.log(LoginUser.uid);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  return (
    <Screen>
      {/* <ExtraLoadScreen visible={refreshing} /> */}
      <View style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View style={styles.header}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <AppText style={styles.login}>Looking</AppText>
        </View>
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={submitUser}
          validationSchema={validationSchema}
        >
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="School Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            secureTextEntry
            placeholder="Password"
            textContentType="password"
          />

          <View style={styles.button}>
            <SubmitButton title="login" />
          </View>
          <TouableText
            title="Don't have account?"
            style={{ alignSelf: "center", marginTop: 200 }}
            onPress={() => navigation.navigate("Register")}
          />
        </Form>
        {/* </ScrollView> */}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 60,
    // top: -10,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  login: {
    color: colors.black,
    alignSelf: "center",
    fontSize: 35,
    // marginTop: 15,
    // marginBottom: 30,
    marginLeft: 10,
  },
  button: {
    marginTop: 25,
    // color: "#132043"
  },
  logo: {
    width: 89,
    height: 89,
    alignSelf: "center",
  },
  header: {
    height: "10%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // color: "yellow",
    flex: 1,
  },
});
