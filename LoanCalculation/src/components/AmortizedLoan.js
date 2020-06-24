/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TextInput } from "react-native-paper";
import { Text, View, StyleSheet, Dimensions, Picker, TouchableOpacity } from 'react-native';


const AmortizedLoan = () => {
  const [value, onChangeText] = React.useState('');
  const [type, setType] = React.useState("Monthly APR");
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginTop: 20, marginBottom: 10 }]}>Amortized Loan</Text>
      <Text>Paying Back a Fixed Amount Periodically</Text>
      <View style={{ width: "80%", marginTop: 20 }}>
        <TextInput
          mode="flat"
          style={styles.input}
          //placeholder="Loan Amount"
          label="Loan Amount"
          onChangeText={(text) => onChangeText('Loan Amount', text)}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          label="Loan Term"
          placeholder="Years"
          onChangeText={(text) => onChangeText('Loan Term', text)}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          placeholder="Months"
          onChangeText={(text) => onChangeText(text)}
        />
        <TextInput
          mode="flat"
          style={styles.input}
          label="Interest Rate"
          onChangeText={(text) => onChangeText('Interest Rate', text)}
        />

        <Picker
          style={styles.input}
          selectedValue={type}
          onValueChange={(itemValue) => {
            setType(itemValue);
          }}
        >
          <Picker.Item label="Monthly (APR)" value="Monthly (APR)" />
          <Picker.Item label="Annually (APY)" value="Annually (APY)" />
          <Picker.Item label="Semi-Annually" value="Semi-Annually" />
          <Picker.Item label="Quarterly" value="Quarterly" />
          <Picker.Item label="Semi-Monthly" value="Semi-Monthly" />
          <Picker.Item label="Biweekly" value="Biweekly" />
          <Picker.Item label="Weekly" value="Weekly" />
          <Picker.Item label="Daily" value="Daily" />
          <Picker.Item label="Continuously" value="Continuously" />
        </Picker>

        <Picker
          style={styles.input}
          selectedValue={type}
          onValueChange={(itemValue) => {
            setType(itemValue);
          }}
        >
          <Picker.Item label="Every Day" value="Every Day" />
          <Picker.Item label="Every Week" value="Every Week" />
          <Picker.Item label="Every 2 Weeks" value="Every 2 Weeks" />
          <Picker.Item label="Every Half Month" value="Every  Half Month" />
          <Picker.Item label="Every Month" value="Every Month" />
          <Picker.Item label="Every Quarter" value="Every Quarter" />
          <Picker.Item label="Every 6 Months" value="Every 6 Months" />
          <Picker.Item label="Every Year" value="Every Year" />
        </Picker>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            //onPress={pickImage}
            style={styles.touchableOpacity}
          >
            <Text style={styles.text}>
              Calculate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    marginBottom: 20,
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 7,
  },
  input2: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 7,
    width: Dimensions.get("window").width / 2.4,
  },
  touchableOpacity: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    height: 50,
    width: 200,
    backgroundColor: "white",
    elevation: 10,
    marginHorizontal: 40,
    borderColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: "center",
  },
});

export default AmortizedLoan;
