import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },

  empty: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: 14,
    marginTop: metrics.basePadding,
  },
});

export default styles;