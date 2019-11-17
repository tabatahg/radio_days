import React from "react";
import SongDetails from "../components/SongDetails";

import {
  StyleSheet,
  FlatList,
  View,
  Button,
  TouchableOpacity
} from "react-native";

const songs = [
  { title: "Gimme Shelter", artist: "Rolling Stones", id: "1" },
  { title: "Bohemiab Rhapsody", artist: "Queen", id: "2" },
  { title: "Sweet Child O' Mine", artist: "Guns N' Roses", id: "3" },
  { title: "Livin' On A Prayer", artist: "Bon Jovi", id: "4" },
  { title: "Kickstart My Heart", artist: "Motley Crue", id: "5" }
];

const SongListScreen = props => {
  return (
    <View>
      <FlatList
        data={songs}
        keyExtractor={song => song.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("PlaySong", {
                  songId: item.id,
                  songTitle: item.title,
                  artist: item.artist
                });
              }}
            >
              <SongDetails item={item} />
            </TouchableOpacity>
          );
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

export default SongListScreen;
