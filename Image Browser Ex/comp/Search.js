import 'react-native-gesture-handler'
import React from 'react'
import { View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import PropTypes from 'prop-types'

class Search extends React.Component {
  constructor(props) {
    super()
    this.state = {
      searchQuery: '',
      loading: true,
      imagesData: []
    }
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch = (searchQuery) => {
    this.setState({ searchQuery, loading: false })
    const API_KEY = '15994120-6fe3406bd9069682f972c7b13'
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${this.state.searchQuery}&image_type=photo`
    const images = fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.props.search(data.hits)
      })
      .catch((error) => {})
  }
  render() {
    const { searchQuery } = this.state
    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={(text) => this.setState({ searchQuery: text })}
          onSubmitEditing={() => this.updateSearch(searchQuery)}
          value={searchQuery}
          round
          lightTheme
          containerStyle={{ borderTopWidth: 0 }}
        />
      </View>
    )
  }
}
Search.propTypes = {
  search: PropTypes.func
}
export default Search
