import React from "react";
import {
  Text,
  View,
  Button,
  BackAndroid,
  Alert,
  TouchableOpacity
} from "react-native";
import GridView from "react-native-gridview";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import console = require("console");

const itemsPerRow = 8;

// Use data from an array...
// const data = Array(64)
//   .fill(null)
//   .map((item, index) => index + 1);
// var randomNumber = Math.random() >= 0.5;

// ...or create your own data source.
// This will randomly allocate 1-3 items per row, and will be used
// if the `randomizeRows` prop is `true`.
// const randomData = [];
// for (let i = 0; i < data.length; i++) {
// const endIndex = Math.max(Math.round(Math.random() * itemsPerRow), 1) + i;
// randomData.push(data.slice(true, false));
//   var randomNumber = Math.random() >= 0.5;
//   console.log("rrr", randomNumber);
//   randomData.push(randomNumber ? 1 : 2);
// }
// console.log("data", randomData);
// const dataSource = new GridView.DataSource({
//   rowHasChanged: (r1, r2) => r1 !== r2
// }).cloneWithRows(randomData);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      girdData: []
    };
  }
  clean(i, r) {
    const { girdData } = this.state;

    girdData[i] = 1;
    this.setState({ girdData });
    console.log(i);
    console.log("data", r);
    console.log("in", i);
  }
  cleanBoxes() {
    const randomData = [];
    for (let i = 0; i < 64; i++) {
      // const endIndex = Math.max(Math.round(Math.random() * itemsPerRow), 1) + i;
      // randomData.push(data.slice(true, false));

      randomData.push(1);
      this.setState({ girdData: randomData });
    }
    Alert.alert("Clean", "All Boxes Has Been Clean");
  }
  componentDidMount() {
    const randomData = [];
    for (let i = 0; i < 64; i++) {
      // const endIndex = Math.max(Math.round(Math.random() * itemsPerRow), 1) + i;
      // randomData.push(data.slice(true, false));
      var randomNumber = Math.random() >= 0.5;
      console.log("rrr", randomNumber);
      randomData.push(randomNumber ? 1 : 2);
      this.setState({ girdData: randomData });
    }
    console.log("data", randomData);
  }
  dustGenerate() {
    const randomData = [];
    for (let i = 0; i < 64; i++) {
      // const endIndex = Math.max(Math.round(Math.random() * itemsPerRow), 1) + i;
      // randomData.push(data.slice(true, false));
      var randomNumber = Math.random() >= 0.5;
      console.log("rrr", randomNumber);
      randomData.push(randomNumber ? 1 : 2);
      this.setState({ girdData: randomData });
    }
    console.log("data", randomData);
  }
  render() {
    let a = this.state.girdData.filter(v => v == 2);

    return (
      <View
        style={{
          flex: 1,
          marginTop: 80,
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <Text style={{ fontSize: 40 }}>VACUUM CLEANER</Text>
        <Text>Total Dust {a.length} </Text>
        <GridView
          data={this.state.girdData}
          // dataSource={props.randomizeRows ? dataSource : null}
          itemsPerRow={itemsPerRow}
          renderItem={(item, sectionID, rowID, itemIndex, itemID) => {
            return (
              <View style={{ flex: 1, borderWidth: 1 }}>
                {/* <Text>{`${item} (${sectionID}-${rowID}-${itemIndex}-${itemID})`}</Text> */}
                {item == 2 && (
                  <TouchableOpacity onPress={() => this.clean(itemID, rowID)}>
                    <MaterialCommunityIcons name="blur" size={42} />
                  </TouchableOpacity>
                )}
                {item == 1 && (
                  <MaterialCommunityIcons
                    name="check-circle-outline"
                    size={42}
                  />
                )}
              </View>
            );
          }}
        />

        <View
          style={{
            // flex: 2,
            flexDirection: "row",
            marginBottom: 20,
            // height: 20
            justifyContent: "space-around"
          }}
        >
          <Button title="Clean Boxes" onPress={() => this.cleanBoxes()} />
          <Button
            color="orange"
            onPress={() => this.dustGenerate()}
            title="Generate Dust"
          />
          <Button title="Exit" onPress={() => BackAndroid.exitApp()} />
        </View>
      </View>
    );
  }
}
export default App;
