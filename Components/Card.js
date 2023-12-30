import React, { useState } from "react";
import { StyleSheet, Button, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-web";

const Card = () => {
  return (
    <View>
      {/* Header */}
      <View style={style.titleHeader}>
        <Text> HI! </Text>
        <Button color="blue" title="bruh!" />
      </View>
      {/* Gallery */}

      <View>
        <ScrollView>
          <Image src="https://picsum.photos/200" />
        </ScrollView>
      </View>
      {/* Description */}
      <View></View>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    flex: 1,
    padding: 20,
  },

  titleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Card;
