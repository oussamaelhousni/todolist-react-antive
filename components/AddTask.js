import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");
  const onChange = (val) => setValue(val);
  return (
    <View style={{ height: 40, flexDirection: "row", gap: 10 }}>
      <TextInput
        style={{
          paddingVertical: 5,
          paddingHorizontal: 15,
          borderWidth: 1,
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: 50,
          borderColor: "transparent",
        }}
        placeholder="Add new task"
        value={value}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          height: "90%",
          aspectRatio: "1/1",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          addTask(value);
          setValue("");
          Keyboard.dismiss();
        }}
      >
        <Text style={{ fontSize: 20, color: "gray" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTask;
