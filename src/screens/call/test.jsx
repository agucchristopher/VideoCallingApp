import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import('agora-rn-uikit').AgoraUIKitProps

const test = () => {
    const [videoCall, setVideoCall] = useState(true);
    const props: AgoraUIKitProps = {
      connectionData: {
        appId: '<Agora App ID>',
        channel: 'test',
      },
      rtcCallbacks: {
        EndCall: () => setVideoCall(false),
      },
    };
  
    return videoCall ? (
      <AgoraUIKit connectionData={props.connectionData} rtcCallbacks={props.rtcCallbacks} />
    ) : null;
  };
  
}

export default test

const styles = StyleSheet.create({})