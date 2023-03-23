import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class EnglishScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text> English Screen!! </Text>
            </View>
        )
    }
}