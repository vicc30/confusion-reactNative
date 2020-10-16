import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import SwipeOut from 'react-native-swipeout';

import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { deleteFavorite } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
});

class Favorites extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    const renderMenuItem = ({ item, index }) => {

      const rightButton = [
        {
          text: 'Delete',
          type: 'Delete',
          onPress: () => this.props.deleteFavorite(item.id)
        }
      ];

      return (
        <SwipeOut right={rightButton} autoClose={true}>
          <ListItem
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            onPress={() => navigate('Favorites', { dishId: item.id })}
            leftAvatar={{ source: { uri: baseUrl + item.image } }}
          />
        </SwipeOut>

      );
    };

    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMess) {
      return (
        <View>
          <Text>{this.props.dishes.errMess}</Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.props.dishes.dishes.filter((dish) =>
            this.props.favorites.some((el) => el === dish.id)
          )}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);