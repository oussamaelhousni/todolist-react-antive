import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
// local component
import Task from "./components/Task";
import AddTask from "./components/AddTask";
export default function App() {
  const [fontLoaded] = useFonts({
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    if (task) setTasks([...tasks, task]);
  };
  if (!fontLoaded) return;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today's Tasks</Text>
      <View style={styles.taskContainer}>
        {tasks.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={tasks}
            renderItem={({ item }) => <Task content={item} />}
          />
        ) : (
          <Text
            style={{
              display: "flex",
              padding: 10,
              backgroundColor: "#55BCF6",
              borderRadius: 10,
              color: "white",
            }}
          >
            No Tasks Available :)
          </Text>
        )}
      </View>
      <AddTask addTask={addTask} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 24,
    color: "black",
    fontFamily: "Poppins-Medium",
  },
  taskContainer: {
    marginVertical: 10,
    flex: 1,
  },
});
