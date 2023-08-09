import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  function currItemRemoval() {
    props.onRemove(props.item.id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={currItemRemoval}
        android_ripple={{ color: "#000000" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
    padding: 8,
  },

  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
