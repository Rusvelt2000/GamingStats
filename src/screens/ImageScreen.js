import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 0, padding: 24 }}
    >
      <View>
        <ImageDetails
          title="Everdell"
          imageSource={require("../../assets/games/everdell.png")}
          caption={"A city building game with amazing critters."}
          robScore={8}
          rosScore={5}
        />
      </View>
      <View>
        <ImageDetails
          title="The Castles of Burgundy"
          caption="A beautiful game of strategy and luck."
          imageSource={require("../../assets/games/castles.png")}
          robScore={19}
          rosScore={20}
        />
      </View>
      <View>
        <ImageDetails
          title="Harmonies"
          imageSource={require("../../assets/games/harmonies.png")}
          caption={"A game of animalistic harmonies."}
          robScore={17}
          rosScore={27}
        />
      </View>

      <View>
        <ImageDetails
          title="Arboretum"
          imageSource={require("../../assets/games/arboretum.png")}
          caption={"A game of tree placement."}
          robScore={1}
          rosScore={0}
        />
      </View>
      <View>
        <ImageDetails
          title="Ark Nova"
          imageSource={require("../../assets/games/arkNova.png")}
          caption={"A game of zoo management."}
          robScore={0}
          rosScore={1}
        />
      </View>
      <View style={{ marginBottom: 40 }}>
        <ImageDetails
          title="Carcassonne"
          imageSource={require("../../assets/games/carcassonne.png")}
          caption={"A game of tile placement."}
          robScore={18}
          rosScore={12}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
