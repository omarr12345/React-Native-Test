import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enterGoalText, setEnteredGoalText] = useState("");
  const [visibilityState, setVisibilityState] = useState(props.visible);
  function goalInpHandler(e) {
    setEnteredGoalText(e);
  }
  function addGoal() {
    props.onAddGoal(enterGoalText);
    setEnteredGoalText("");
    props.onCancel();
  }
  function cancelModal() {
    props.onCancel();
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/icon.png")} style={styles.iconImg} />
        <TextInput
          style={styles.TextInput}
          placeholder="Your Course Goal"
          onChangeText={goalInpHandler}
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    padding: 16,
    backgroundColor: "blue",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  iconImg: {
    width: 100,
    height: 100,
  },

  iconImg: {
    height: 200,
    width: 200,
    margin: 20,
  },
});

export default GoalInput;
