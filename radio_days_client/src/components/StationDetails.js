import React, { useState } from "react";
import Card from "../components/Card";
import CardSection from "../components/CardSection";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const StationDetails = props => {
  const [gps, setGps] = useState([]);

  const gpsfunc = async () => {
    const coord = () =>
      navigator.geolocation.getCurrentPosition(position => {
        gpsPosition = position;
        return position;
      });
    const gpsCoord = () => coord();
    return gpsCoord();
  };

  let totalWords = props.item;
  let firstWord = totalWords.replace(/ .*/, "");
  return (
    <Card>
      <CardSection>
        <Button
          title={props.item}
          key={props.item}
          style={styles.textStyle}
          onPress={() => {
            return props.navigation.navigate("SongList2", {
              genre: firstWord,
              coordinates: gpsfunc()
            });
          }}
        />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    height: 50,
    flex: 1,
    fontSize: 25,
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  }
});

export default StationDetails;
