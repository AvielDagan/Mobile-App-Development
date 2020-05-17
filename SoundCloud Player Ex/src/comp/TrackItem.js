import * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

const soundObject = new Audio.Sound();
async function play(stream_url) {
    try {
        await soundObject.unloadAsync();
        await soundObject.loadAsync({
            uri: stream_url + '?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE'
        });
        await soundObject.playAsync();
    } catch (error) {
        console.log(error);
    }
}

function TrackItem({ showItem, trackItem }) {
    return (
        <TouchableOpacity
            onPress={() => {
                play(trackItem.stream_url);
            }}
        >
            {showItem ? (
                <Image style={styles.noImg} source={{ uri: trackItem.artwork_url }} />
            ) : (
                    <View style={styles.items}>
                        <Image style={styles.img} source={{ uri: trackItem.waveform_url }} />
                        <View style={styles.textArea}>
                            <Text style={styles.title}>{trackItem.title}</Text>
                            <View style={styles.items}>
                                <Text style={styles.text}>Artist: {trackItem.user.username}</Text>
                                <Text style={styles.text}>Play Count: {trackItem.comment_count}</Text>
                            </View>
                        </View>
                    </View>
                )}
        </TouchableOpacity>
    );
}

TrackItem.propTypes = {
    trackItem: PropTypes.object,
    showItem: PropTypes.bool
};

const styles = StyleSheet.create({
    text: {
        flex: 1,
        fontSize: 14,
        color: 'grey'
    },
    title: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold'
    },
    noImg: {
        margin: 5,
        width: 120,
        height: 120
    },
    items: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    img: {
        margin: 10,
        width: 60,
        height: 60
    },
    textArea: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 5,
        paddingLeft: 8
    }
});

export default TrackItem;
