import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content'

// function fetchStream(reader) {
//     // const reader = stream.getReader();
//     let charsReceived = 0;

//     // read() returns a promise that resolves
//     // when a value has been received
//     reader.read().then(function processText({ done, value }) {
//         // Result objects contain two properties:
//         // done  - true if the stream has already given you all its data.
//         // value - some data. Always undefined when done is true.
//         if (done) {
//             console.log("Stream complete");
//             para.textContent = result;
//             return;
//         }
//         // value for fetch streams is a Uint8Array
//         charsReceived += value.length;
//         const chunk = value;
//         // let listItem = document.createElement('li');
//         // listItem.textContent = 'Received ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
//         // list2.appendChild(listItem);

//         result += chunk;

//         // Read some more, and call this function again
//         return reader.read().then(processText);
//     })
// }

class Livescore extends React.Component {
    _isMounted = false
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this._isMounted = true
        fetch("https://football-prediction-api.p.rapidapi.com/api/v2/performance-stats?market=classic", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "football-prediction-api.p.rapidapi.com",
                "x-rapidapi-key": "b78d8edbacmsh0d14864fbf5ad4ap1427d6jsn0b94b1b8d032"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }

    componentWillUnmount() {
        this._isMounted = false
    }


    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} />
                <Text style={styles.text}> Livescore</Text>
                <Content />
            </View>
        );
    }
}
Livescore.propTypes = {
    navigation: PropTypes.object
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22343C'
    },
    text: {
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
    }
});
export default Livescore;
