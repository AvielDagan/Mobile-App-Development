import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Button,
    TextInput
} from 'react-native';
import { arrayOf, string, bool, shape, func, object, array, number } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './comp/PlayerActions';
import TrackItem from './comp/TrackItem';

const mapStateToProps = ({ player }) => {
    return {
        items: player.tracks,
        recentQueries: player.recentQueries
    };
};

const PlayerApp = ({ items, loadData, navigation, recentQueries }) => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder={'Type Here...'}
                    placeholderTextColor="rgb(161,159,159)"
                    style={styles.searchInput}
                    onSubmitEditing={({ nativeEvent: { text } }) => loadData(text)}
                />
            </View>
            {false && (
                <View style={styles.activityIndator}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )}
            {items.length === 0 ? (
                <View style={styles.activityIndator}>
                    <View style={styles.noResHolder}>
                        <Text style={styles.noResult}>No results were found</Text>
                    </View>
                </View>
            ) : (
                    <FlatList
                        key={2}
                        data={items}
                        renderItem={({ item }) => (
                            <TrackItem showItem={false} navigation={navigation} trackItem={item} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                )}
            <Button
                style={styles.buttun}
                title="Recent Queries"
                color="rgb(178,176,176)"
                onPress={() => {
                    navigation.navigate('RecentScreen', {
                        recentQueries
                    });
                }}
            />
        </View>
    );
};

PlayerApp.propTypes = {
    items: arrayOf(
        shape({
            id: number,
            text: string,
            isDone: bool,
            length: string
        })
    ),
    loadData: func,
    navigation: object,
    recentQueries: array
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    noResult: {
        fontFamily: 'sans-serif',
        fontSize: 16,
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    noResHolder: {
        marginTop: 10
    },
    activityIndator: {
        flex: 1,
        justifyContent: 'center'
    },
    searchContainer: {
        paddingTop: 10
    },
    searchInput: {
        backgroundColor: 'rgb(225, 232, 238)',
        height: 45,
        borderRadius: 90,
        fontSize: 14,
        paddingRight: 20
    }
});

const ConnectedPlayerApp = connect(mapStateToProps, actions)(PlayerApp);
export default ConnectedPlayerApp;
