import React, { useEffect, useState } from "react";
import SongDetails2 from "../components/SongDetails2";
import { getMusicByVenues } from "../api/bandsintown";
import { StyleSheet, FlatList, View, Button } from "react-native";

const SongListScreen2 = props => {
  const [artists, setArtists] = useState({});

  useEffect(() => {
    getMusicByVenues(
      props.navigation.getParam("genre"),
      34.1035949,
      -118.3267643
    )
      .then(response => {
        const info = response.events.map(show => {
          let artistInfo = response._embedded.artists.filter(
            a => a.id === show.artist_id
          )[0];
          return artistInfo;
        });
        setArtists(info);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <View>
      <FlatList
        data={artists}
        keyExtractor={(info, index) => index.toString()}
        renderItem={({ item }) => {
          return <SongDetails2 item={item} navigation={props.navigation} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default SongListScreen2;
