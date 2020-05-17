import React from 'react';
import { object } from 'prop-types';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const RecentList = ({ route }) => {
    let { recentQueries } = route.params;
    recentQueries = recentQueries.slice(Math.max(recentQueries.length - 5, 0));
    return (
        <View style={styles.container}>
            <Text style={styles.titleRecent}>Recent Queries</Text>
            <FlatList
                keyExtractor={(index) => index.toString()}
                data={recentQueries}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <Text style={styles.recentQueries} keyExtractor={(item, index)}>
                                {index + 1}. {item}
                            </Text>
                        </View>
                    );
                }}
                ListEmptyComponent={() => (
                    <View style={styles.noQueries}>
                        <Text style={styles.noQueriesText}>No Recent Querires For Now</Text>
                    </View>
                )}
            />
        </View>
    );
};

RecentList.propTypes = {
    route: object
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleRecent: {
        marginTop: 40,
        marginRight: 125,
        height: 50,
        fontFamily: 'sans-serif',
        fontSize: 14,
        fontWeight: 'bold'
    },
    noQueries: {
        marginRight: 100,
        fontFamily: 'sans-serif',
        fontSize: 14,
        fontWeight: 'bold'
    },
    recentQueries: {
        marginRight: 100,
        fontFamily: 'sans-serif',
        fontSize: 14
    }
});
export default RecentList;
