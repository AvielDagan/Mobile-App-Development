import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content'

class GamesRoom extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} />
                <Text style={styles.text}> Games Room</Text>
                <Content />
            </View>
        );
    }
}
GamesRoom.propTypes = {
    navigation: PropTypes.object
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22343C'
      },
      text:{
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
    }
});
export default GamesRoom;
