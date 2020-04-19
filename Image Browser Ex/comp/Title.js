import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'
import PropTypes from 'prop-types'

class Title extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <IconButton
              icon="heart"
              color={Colors.red500}
              onPress={() => this.props.navigation.navigate('MyFavorites')}
            />
          </View>
        </View>
        <View>
          <Text style={styles.headline} adjustsFontSizeToFit>
            Image Browser{' '}
          </Text>
        </View>
      </View>
    )
  }
}
Title.propTypes = {
    loading: PropTypes.bool,
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgb(225, 232, 238)'
  },
  headline: {
    padding: 13,
    paddingRight: '17%',
    height: 50,
    fontFamily: 'sans-serif-thin',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
export default Title
