import 'react-native-gesture-handler'
import React from 'react'
import { View } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import GridView from './GridView'
import ListView from './ListView'
import PropTypes from 'prop-types'

class ViewOptions extends React.Component {
  constructor(props) {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex })
  }
  render() {
    const buttons = ['Grid View', 'List View']
    const { selectedIndex } = this.state
    return (
      <View>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          containerStyle={{ borderRadius: 10 }}
          buttons={buttons}
        />
        {selectedIndex === 0 ? (
          <GridView
            navigation={this.props.navigation}
            images={this.props.images}
            loading={this.props.loading}
          />
        ) : (
          <ListView
            navigation={this.props.navigation}
            images={this.props.images}
            loading={this.props.loading}
          />
        )}
      </View>
    )
  }
}

ViewOptions.propTypes = {
    loading: PropTypes.bool,
    navigation: PropTypes.object,
    images: PropTypes.array
}
export default ViewOptions
