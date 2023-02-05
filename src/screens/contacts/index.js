import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as ExpoContacts from "expo-contacts";
import { FlashList } from "@shopify/flash-list";
const Contacts = () => {
  const [contacts, setcontacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await ExpoContacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await ExpoContacts.getContactsAsync({
          fields: [ExpoContacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const contact = data;
          setcontacts(contact);
          //   console.log(contact);
        }
      }
    })();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Text>Contacts</Text>
      <FlashList
        data={contacts}
        estimatedItemSize={200}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "white",
  },
});
