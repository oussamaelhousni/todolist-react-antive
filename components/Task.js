import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
const Task = ({ content }) => {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        color: "red",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "2px 4px 20px 0px #0000001A",
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: "#55BCF6",
            borderRadius: 5,
          }}
        ></View>
        <Text>{content}</Text>
      </View>
      <TouchableOpacity>
        <View
          style={{
            width: 10,
            height: 10,
            borderColor: "#55BCF6",
            borderWidth: 1,
            borderRadius: 2,
          }}
        ></View>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
