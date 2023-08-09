import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App(e) {
  const [allCourseGoals, setAllCourseGoals] = useState([]);
  const [modalIsVisible, setModalVisible] = useState(false);
  function addGoalHandler(e) {
    setAllCourseGoals((currCourseGoals) => [
      ...currCourseGoals,
      { text: e, id: Math.random().toString() },
    ]);
  }
  function removeHandler(o) {
    setAllCourseGoals((currCourseGoals) => {
      return currCourseGoals.filter((v) => v.id != o);
    });
  }

  function showModal() {
    setModalVisible(true);
    // console.log("in");
  }

  function hideModal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={showModal} />
      <GoalInput
        onAddGoal={addGoalHandler}
        onCancel={hideModal}
        visible={modalIsVisible}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={allCourseGoals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return <GoalItem item={item} onRemove={removeHandler} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 3,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
