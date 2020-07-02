import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BoasVindas from './components/BoasVindas';

export default function App() {
    return (
        <View style={styles.container}>
            <BoasVindas/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
