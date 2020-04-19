import React from 'react'
import { Image, ActivityIndicator, StyleSheet, View, Text, AsyncStorage } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'
import PropTypes from 'prop-types'

class BigPic extends React.Component {
  constructor(props) {
    super()
    this.state = {
      favorite: false,
      loading: true
    }
  }

  async componentDidMount() {
    try {
      const data = await AsyncStorage.getItem(this.props.route.params.imageURI.id.toString())
      if (data !== null) {
        this.setState({
          favorite: true,
          loading: false
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  favImages = async () => {
    try {
      await AsyncStorage.setItem(
        this.props.route.params.imageURI.id.toString(),
        JSON.stringify(this.props.route.params.imageURI)
      )
      this.setState({
        favorite: true
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Please Wait...</Text>
          </View>
        ) : (
          <View style={styles.containter}>
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
            <View>
              <Image
                style={styles.image}
                source={{ uri: this.props.route.params.imageURI.largeImageURL }}
              />
            </View>
            {!this.state.favorite ? (
              <View style={styles.likeBtn}>
                <IconButton
                  icon="heart"
                  color={Colors.red500}
                  onPress={() => {
                    this.favImages()
                  }}
                  size={70}
                />
              </View>
            ) : (
              <View></View>
            )}
          </View>
        )}
      </View>
    )
  }
}
BigPic.propTypes = {
  route: PropTypes.object,
  loading: PropTypes.bool,
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  titleContainer: {
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
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
    marginBottom: -150
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
  likeBtn: {
    marginLeft: '33%',
    marginBottom: -120
  }
})
export default BigPic
