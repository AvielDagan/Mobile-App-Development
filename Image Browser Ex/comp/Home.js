import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Search from './Search'
import ViewOptions from './ViewOptions'
import Title from './Title'
import PropTypes from 'prop-types'

class Home extends React.Component {
  _isMounted = false
  constructor(props) {
    super()
    this.state = {
      imagesData: [],
      loading: true,
      searchQuery: ''
    }
    this.setSearchImages = this.setSearchImages.bind(this)
  }

  componentDidMount() {
    this._isMounted = true
    const API_KEY = '15994120-6fe3406bd9069682f972c7b13'
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${this.state.searchQuery}`
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if (this._isMounted) {
          this.setState({
            imagesData: data.hits,
            loading: false
          })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  setSearchImages(imagesSearched) {
    this.setState({ imagesData: imagesSearched })
  }

  render() {
    return (
      <View style={styles.container}>
        <Title navigation={this.props.navigation} />
        <Search search={this.setSearchImages} />
        <ViewOptions
          navigation={this.props.navigation}
          images={this.state.imagesData}
          loading={this.state.loading}
        />
      </View>
    )
  }
}
Home.propTypes = {
  navigation: PropTypes.object
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  }
})
export default Home
