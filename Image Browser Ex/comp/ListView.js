import React from 'react'
import { FlatList, ActivityIndicator, StyleSheet, View, Text, Dimensions } from 'react-native'
import ImageComponent from './ImageComp'
import PropTypes from 'prop-types'

class ListView extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    const dimensions = Dimensions.get('window')
    const screenWidth = dimensions.width
    const screenHeight = dimensions.height
    return (
      <View style={styles.container}>
        {this.props.loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Please Wait...</Text>
          </View>
        ) : this.props.images.length === 0 ? (
          <View style={styles.noResHolder}>
            <Text style={styles.noResult}>No results were found</Text>
          </View>
        ) : (
          <View style={{ width: screenWidth, height: screenHeight }}>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              numColumns={1}
              data={this.props.images}
              renderItem={({ item }) => (
                <ImageComponent
                  imageURI={item}
                  navigation={this.props.navigation}
                  gridComp={false}
                  loading={this.props.loading}
                />
              )}
            />
          </View>
        )}
      </View>
    )
  }
}
ListView.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
  navigation: PropTypes.object
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    paddingTop: 10,
    fontSize: 18,
    color: 'black'
  },
  noResult: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  noResHolder: {
    marginTop: 50
  }
})
export default ListView
