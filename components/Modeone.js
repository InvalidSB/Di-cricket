import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Modeone() {
  const [target, setTarget] = useState(12);

  const [wmsg, setWMessage] = useState(false);
  const [lmsg, setLMessage] = useState(false);

  const [rolledValue, setRolledValue] = useState(0);
  const [showreset, SetShowreset] = useState(false);
  const [IsPlaying, setIsPlaying] = useState(true);
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);
  const [imgsrc, setImgsrc] = useState("Hi");
  const roll = (input) => {
    setText("");

    calculateSum(input);
    const value = Math.ceil(Math.random() * 6);
    if (value == 0) {
      setRolledValue("Do again");
    } else {
      setRolledValue(value);
    }

    if (value == input) {
      setText("You are Out");
      if (score <= target) {
        setLMessage(true);
        setWMessage(false);
      }
      SetShowreset(true);
      setIsPlaying(false);
      setScore(score);
    }
    if (value == 1) {
      setImgsrc(img1);
    } else if (value == 2) {
      setImgsrc(img2);
    } else if (value == 3) {
      setImgsrc(img3);
    } else if (value == 4) {
      setImgsrc(img4);
    } else if (value == 5) {
      setImgsrc(img5);
    } else if (value == 6) {
      setImgsrc(img6);
    }
  };

  const calculateSum = (val) => {
    if (score + val >= target) {
      setWMessage(true);
      setLMessage(false);
      SetShowreset(true);
      setIsPlaying(false);
    } else {
      setScore(score + val);
    }
  };

  const one = () => {
    roll(1);
  };
  const two = () => {
    roll(2);
  };
  const three = () => {
    roll(3);
  };
  const four = () => {
    roll(4);
  };
  const five = () => {
    roll(5);
  };
  const six = () => {
    roll(6);
  };

  const reset = () => {
    setText("");
    SetShowreset(false);
    setIsPlaying(true);
    setScore(0);
    setImgsrc(
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eIXIA2s4HTHAMs5PE0tl2QHaF7%26pid%3DApi&f=1"
    );
    setRolledValue(0);
    setTarget(Math.ceil(Math.random() * 100));
  };

  const img3 = require("../assets/3.png");
  const img1 = require("../assets/1.jpeg");
  const img2 = require("../assets/3.png");
  const img4 = require("../assets/4.jpeg");
  const img5 = require("../assets/5.jpeg");
  const img6 = require("../assets/6.jpeg");

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            backgroundColor: "tomato",
            padding: 20,
            marginBottom: 20,
          }}
        >
          Target of {target}
        </Text>
      </View>
      <Text style={{ fontWeight: "bold" }}>ROBOT :</Text>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          borderBottomWidth: 2,
          borderBottomColor: "gray",
        }}
      >
        <Text
          style={{
            fontSize: 60,
            padding: 15,
            fontWeight: "bold",
          }}
        >
          {rolledValue}
        </Text>
        <TouchableOpacity
          onPress={() => setText("Click on the Number Not on me !!!")}
        >
          <Image style={styles.tinyLogo} source={imgsrc} />
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 10, alignItems: "center" }}>
        <Text style={{ color: "tomato" }}>{text}</Text>
      </View>

      <View
        style={{
          backgroundColor: "lightgray",
          paddingVertical: 20,
          padding: 8,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 20 }}>YOU :</Text>
        <View>
          {IsPlaying ? (
            <>
              <Text
                style={{
                  marginBottom: 20,
                  textAlign: "center",
                  fontSize: 16,
                  color: "navy",
                }}
              >
                Choose any Number :
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 28,
                }}
              >
                <Text
                  onPress={one}
                  style={{
                    paddingHorizontal: 18,
                    fontSize: 36,
                    backgroundColor: "teal",
                    color: "white",
                    borderRadius: 300,
                  }}
                >
                  1
                </Text>
                <Text
                  onPress={two}
                  style={{
                    paddingHorizontal: 18,
                    fontSize: 36,
                    backgroundColor: "red",
                    borderRadius: 300,
                    color: "white",
                  }}
                >
                  2
                </Text>

                <Text
                  onPress={three}
                  style={{
                    paddingHorizontal: 18,
                    fontSize: 36,
                    backgroundColor: "indigo",
                    borderRadius: 300,
                    color: "white",
                  }}
                >
                  3
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 32,
                  paddingHorizontal: 28,
                }}
              >
                <Text
                  onPress={four}
                  style={{
                    paddingHorizontal: 18,
                    fontSize: 36,
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: 300,
                  }}
                >
                  4
                </Text>
                <Text
                  onPress={five}
                  style={{
                    paddingHorizontal: 18,
                    fontSize: 36,
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: 300,
                  }}
                >
                  5
                </Text>
                <Text
                  onPress={six}
                  style={{
                    paddingHorizontal: 18,
                    fontSize: 36,
                    backgroundColor: "gray",
                    color: "white",
                    borderRadius: 300,
                  }}
                >
                  6
                </Text>
              </View>
            </>
          ) : (
            <Text
              style={{
                color: "white",
                fontSize: 18,
                marginVertical: 20,
                borderRadius: 10,
                textAlign: "center",
                padding: 10,
                backgroundColor: "green",
              }}
            >
              {wmsg ? <>Congratulations !!! You have Won the game</> : null}
              {lmsg ? (
                <>
                  You have scored {score} runs and Lost the game by{" "}
                  {target - score} runs
                </>
              ) : null}
            </Text>
          )}
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          marginVertical: 30,
          alignItems: "center",
        }}
      >
        {showreset ? (
          <AntDesign onPress={reset} name="reload1" size={60} color="black" />
        ) : (
          <>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                textAlign: "center",
                padding: 10,
                borderRadius: 10,
                backgroundColor: "green",
              }}
            >
              You have scored {score} runs
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                textAlign: "center",
                padding: 10,
                marginTop: 30,
                borderRadius: 10,
                backgroundColor: "green",
              }}
            >
              You need {target - score} runs
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  tinyLogo: {
    height: 80,
    width: 80,
  },
});
