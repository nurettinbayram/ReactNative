import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

export default function App() {
  const [coursGoals, setCoursGoals] = useState([]);
  const [modelEfect, setModelEfect] = useState(false);

  function modelEfectHandler() {
    setModelEfect(true);
  }

  function modelCencelHandler() {
    setModelEfect(false);
  }

  function buttonGoalHandler(inputText) {
    setCoursGoals((currentGoal) => [
      ...currentGoal,
      { text: inputText, id: Math.random().toString(), complete: false },
    ]);
    setModelEfect(false);
  }

  function deleteGoalHandler(id) {
    setCoursGoals((currentGoal) =>
      currentGoal.filter((goal) => goal.id !== id),
    );
  }

  function completeTaskHandler(id) {
    setCoursGoals((currentGoal) =>
      currentGoal.map((goal) =>
        goal.id === id ? { ...goal, complete: !goal.complete } : goal,
      ),
    );
  }

  return (
    <>
      <StatusBar style="inverted" />
      <View style={titleStyles.screen}>
        <Pressable onPress={modelEfectHandler} style={titleStyles.todoBtn}>
          <Text style={titleStyles.todoTxt}>To Do</Text>
        </Pressable>

        <GoalInput
          buttonHandler={buttonGoalHandler}
          modelEfect={modelEfect}
          modelCencel={modelCencelHandler}
        />

        <View style={titleStyles.listContainer}>
          {/* {coursGoals.length > 0 && (
          <Text style={titleStyles.listTitle}>List Of Goals</Text>
        )} */}

          <FlatList
            data={coursGoals}
            renderItem={(itemData) => {
              // itemData bir metadata oldugunu unutma extra bilgiler icerir
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteItem={deleteGoalHandler}
                  completeTask={completeTaskHandler}
                  complete={itemData.item.complete}
                />
              );
            }}
            keyExtractor={(item, index) => {
              // item sadece bizim array elemanlarimizi temsil eder
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const titleStyles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 60,
    padding: 20,
  },
  listContainer: {
    flex: 4,
  },
  listTitle: {
    color: "#5e0acc",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 20,
  },
  todoBtn: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#6124b1",
    borderRadius: 8,
    marginBottom: 20,
  },
  todoTxt: {
    fontSize: 18,
    fontWeight: 700,
    color: "white",
  },
});
