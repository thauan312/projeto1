import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Dê mais detalhes"
        value={text}
      />
      <Button
        title="Avançar"
        onPress=''

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default UselessTextInput;