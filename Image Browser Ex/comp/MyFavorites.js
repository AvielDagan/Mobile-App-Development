import React from 'react'
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Dimensions,
  AsyncStorage
} from 'react-native'
import ImageComponent from './ImageComp'
import { IconButton, Colors } from 'react-native-paper'
import PropTypes from 'prop-types'

class MyFavorites extends React.Component {
  constructor(props) {
    super()
    this.state = {
      imagesData: [],
      loading: true
    }
  }

  componentDidMount() {
    AsyncStorage.getAllKeys((_err, keys) => {
      AsyncStorage.multiGet(keys, (_err, stores) => {
        stores.map((result, i, store) => {
          const value = store[i][1]
          this.state.imagesData.push(JSON.parse(value))
          return result
        })
        this.setState({ loa: false })
      })
    })
  }

  render() {
    const dimensions = Dimensions.get('window')
    const screenWidth = dimensions.width
    const screenHeight = dimensions.height
    return (
      <View>
        {this.props.loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Please Wait...</Text>
          </View>
        ) : this.state.imagesData.length === 0 ? (
          <View style={styles.noResHolder}>
            <Text style={styles.noResult}>No results were found</Text>
          </View>
        ) : (
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.headline} adjustsFontSizeToFit>
                Image Browser{' '}
              </Text>
              <View>
                <IconButton
                  icon="chevron-left"
                  color={Colors.black}
                  onPress={() => this.props.navigation.goBack()}
                  size={30}
                />
              </View>
            </View>
            <View style={{ width: screenWidth, height: screenHeight }}>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                data={this.state.imagesData}
                renderItem={({ item }) => (
                  <ImageComponent imageURI={item} navigation={this.props.navigation} gridComp />
                )}
              />
            </View>
          </View>
        )}
      </View>
    )
  }
}
MyFavorites.propTypes = {
    loading: PropTypes.bool,
    navigation: PropTypes.object
}
const styles = StyleSheet.create({
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
  titleContainer: {
    marginTop: 50,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgb(225, 232, 238)'
  },
  headline: {
    padding: 13,
    paddingRight: '30%',
    height: 50,
    fontFamily: 'sans-serif-thin',
    fontSize: 18,
    fontWeight: 'bold'
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
export default MyFavorites
