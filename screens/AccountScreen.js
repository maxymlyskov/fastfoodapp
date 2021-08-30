import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppForm from "../components/foms/AppForm";
import ErrorMessage from "../components/foms/ErrorMessage";
import Screen from "../components/Screen";
import SearchHeader from "../components/SearchHeader";
import colors from "../config/colors";
import * as Yup from "yup";
import AppFormField from "../components/foms/AppFormField";
import SubmitButton from "../components/foms/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email").nullable(),
  password: Yup.string().required().min(4).label("Password").nullable(),
});

function AccountScreen() {
  const [loginFailed, setLoginFailed] = React.useState(false);

  const handleSubmit = async ({ email, password }) => {
    console.log("Submited as " + email + ", " + password);
  };

  return (
    <Screen style={styles.container}>
      <SearchHeader />
      <View style={styles.login}>
        <AppText style={styles.loginText}>Login</AppText>
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ErrorMessage
          visible={loginFailed}
          error="Invalid email or/and password"
        />
        <AppFormField
          placeholder="Email"
          icon="email"
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          placeholder="Password"
          icon="lock"
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <TouchableOpacity onPress={() => console.log("forgotten password")}>
          <View style={styles.passView}>
            <AppText style={styles.pass}>Forgot Password?</AppText>
          </View>
        </TouchableOpacity>
        <SubmitButton title="Login" />
        <View style={styles.signingup}>
          <AppText style={styles.donthave}>Don't have an account? </AppText>
          <TouchableOpacity onPress={() => console.log("Sign Up")}>
            <AppText style={styles.signup}>Sign Up</AppText>
          </TouchableOpacity>
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
  },
  login: {
    paddingVertical: 25,
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 50,
  },
  pass: {
    fontSize: 15,
    fontWeight: "800",
  },
  passView: {
    alignItems: "center",
    padding: 10,
  },
  donthave: {
    color: colors.grey,
    fontSize: 15,
  },
  signup: {
    fontSize: 15,
    fontWeight: "bold",
  },
  signingup: {
    flexDirection: "row",
    paddingVertical: 15,
    marginBottom: 60,
  },
});

export default AccountScreen;
