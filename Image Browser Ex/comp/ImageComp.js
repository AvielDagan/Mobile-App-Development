import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

function ImageComponent({ imageURI, navigation, gridComp, loading }) {
  return (
    <View style={styles.container}>
      {gridComp ? (
        <View style={styles.imageHolder}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('BigPic', {
                imageURI,
                loading
              })
            }
          >
            <Image source={{ uri: imageURI.previewURL }} style={styles.image} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.imageHolderList}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('BigPic', {
                imageURI,
                loading
              })
            }
          >
            <View style={styles.textHolder}>
              <Image source={{ uri: imageURI.previewURL }} style={styles.imageList} />
              <Text style={styles.text}>{imageURI.user}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.viewLikeContainer}>
            <Text style={styles.viewLike}>Views: {imageURI.views}</Text>
            <Text style={styles.viewLike}>Likes: {imageURI.likes}</Text>
          </View>
        </View>
      )}
    </View>
  )
}
ImageComponent.propTypes = {
  imageURI: PropTypes.object,
  loading: PropTypes.bool,
  navigation: PropTypes.object,
  gridComp: PropTypes.bool
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageHolder: {
    margin: 5,
    height: 160,
    width: 100
  },
  image: {
    height: '100%',
    width: '100%'
  },
  imageHolderList: {
    marginLeft: '40%',
    margin: 5,
    height: 100,
    width: 100,
    position: 'relative'
  },
  imageList: {
    height: 100,
    width: 100
  },
  textHolder: {
    flexDirection: 'row-reverse',
    width: 200,
    fontSize: 20
  },
  text: {
    marginRight: 15,
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16
  },
  viewLikeContainer: {
    width: '180%',
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse'
  },
  viewLike: {
    marginTop: -30,
    marginRight: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})
export default ImageComponent
