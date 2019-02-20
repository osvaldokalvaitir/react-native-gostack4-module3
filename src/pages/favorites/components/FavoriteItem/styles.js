import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  avatar: {
    height: 54,
    width: 54,
  },

  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.basePadding,
    padding: metrics.basePadding,
  },

  description: {
    color: colors.dark,
    fontSize: 12,
    marginTop: 3,
  },  

  info: {
    flex: 1,
    marginLeft: metrics.baseMargin,
  },

  title: {
    color: colors.darker,
    fontWeight: 'bold',
  },
});

export default styles;