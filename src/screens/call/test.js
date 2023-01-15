import "expo-dev-client";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AgoraUIKit from "agora-rn-uikit";

const TestApp = () => {
  const [videoCall, setVideoCall] = useState(false);
  const props = {
    connectionData: {
      appId: "<Agora App ID>",
      channel: "test",
    },
    rtcCallbacks: {
      EndCall: () => setVideoCall(false),
    },
  };

  return videoCall ? (
    <AgoraUIKit
      connectionData={props.connectionData}
      rtcCallbacks={props.rtcCallbacks}
    />
  ) : (
    // <View>
    //   <Text>hi</Text>
    // </View>
    <Text style={styles.title}>Sign In</Text>
  );
};

// }

export default TestApp;

const styles = StyleSheet.create({});
