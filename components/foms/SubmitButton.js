import { useFormikContext } from "formik";
import React from "react";
import { View } from "react-native";
import colors from "../../config/colors";

import AppButton from "../AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <View style={{ alignItems: "center" }}>
      <AppButton
        title={title}
        color={colors.black}
        colorText={colors.white}
        onPress={handleSubmit}
        width="100%"
      />
    </View>
  );
}

export default SubmitButton;
