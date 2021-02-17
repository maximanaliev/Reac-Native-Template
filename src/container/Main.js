import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {TouchableOpacity} from "react-native-gesture-handler";
import {useDispatch, useSelector} from "react-redux";
import {decrease, increase, reset} from "../store/actions/mainActions";

const Main = props => {

    const data = useSelector(state => state.main.data);
    const dispatch = useDispatch();

    const value = 5;

    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Step One</Text>
                    <Text style={styles.sectionDescription}>
                        <Text style={styles.highlight}>{data}</Text>
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => dispatch(increase(value))}
                >
                    <Text>
                        + {value}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => dispatch(decrease(value))}
                >
                    <Text>
                        - {value}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => dispatch(reset())}
                >
                    <Text>
                        Reset
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Secondary')}
                >
                    <Text>
                        Go to Secondary
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Main;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
});