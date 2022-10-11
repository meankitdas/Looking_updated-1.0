import React, { useState } from "react";
import { Image, StyleSheet, ScrollView, View } from "react-native";
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

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ;

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirm: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must be match"),
  number: Yup.string().matches(phoneRegExp, 'Phone number is not valid').max(10).min(10)
});



export default function RegisterScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const submitUser = (value) => {
    const email = Object.values(value)[0];
    const password = Object.values(value)[1];
    const number = Object.values(value)[3];

    setRefreshing(true);
    RegisterUser(email, password, number);
  };

  const print = () => {
    console.log("hello");
    navigation.navigate("ProfileScreen");
  }

  const RegisterUser = async (email, password, number) => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        setRefreshing(false);
        console.log("User account created & signed in!");
        // this.props.navigation.navigate("ProfileScreen");
        user_id = data.user.uid
        print(user_id);
        
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

    console.log(number);
    

    

  };

  return (
    <Screen>
      {/* <ExtraLoadScreen visible={refreshing} /> */}
      <View style={styles.container}>
        {/* <AppText style={styles.signup}>SignUp</AppText> */}
        <View style={styles.header}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <AppText style={styles.login}>Looking</AppText>
        </View>

        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={submitUser}
          validationSchema={validationSchema}
        >
          <View style={styles.form}>
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
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="confirm"
              secureTextEntry
              placeholder="Confirm Password"
            />
            
          </View>
          <View style={styles.button}>
            <SubmitButton title="Sign Up" />
          </View>
          <TouableText
            title="Have you registered before?"
            style={{ alignSelf: "center", marginTop: 200 }}
            onPress={() => navigation.navigate('Login')}
          />
          {/* <TouableText
            title="Have an account?"
            style={{ alignSelf: "center", marginTop: 190 }}
            onPress={() => navigation.navigate("LoginScreen")}
          /> */}
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
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  signup: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 35,
    marginTop: 15,
    marginBottom: 3,
  },
  button: {
    // bottom: -20,
    // bottom: "-40%",
    marginTop: 30,
  },
  header: {
    // width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "yellow",
    flex: 1,
  },
  logo: {
    width: 89,
    height: 89,
    alignSelf: "center",
  },
  login: {
    color: colors.black,
    alignSelf: "center",
    fontSize: 35,
    // marginTop: 15,
    // marginBottom: 30,
    marginLeft: 10,
  },
  form: {
    // backgroundColor: "#000",
    // display: "flex",
    // marginTop: 100,
  },
});
