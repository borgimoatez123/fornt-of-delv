import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { COLORS } from '../constants/theme';
import Menu from '../screens/restaurant/Menu'
import Directions from '../screens/restaurant/Directions'
import New from '../screens/restaurant/New'
const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }} />
);

const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }} />
  );

const renderScene = SceneMap({
  first: Menu,
  second: Directions,
  three: New,
});

const RestaurantPage = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Menu' },
    { key: 'second', title: 'Directions' },
    { key: 'three', title: 'New' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

export default RestaurantPage