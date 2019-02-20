import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors } from '~/styles';

import Main from '~/pages/main';
import Favorites from '~/pages/favorites';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Favorites: { screen: Favorites },
    }, 
    {
      defaultNavigationOptions: {
        headerStyle: { 
          backgroundColor: colors.primaryDark,
        },
        headerTintColor: colors.white,
        headerBackTitle: null,
      },
      headerLayoutPreset: 'center',
    }
  )
);

export default Routes;