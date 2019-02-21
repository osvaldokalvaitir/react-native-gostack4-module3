import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    height: 50,
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
  },

  buttonText: {
    color: colors.darkTransparent,
    fontSize: 14,
    fontWeight: 'bold',
  },

  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    flex: 1,
  },

  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding * 2,
  },

  description: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 20,
    marginTop: metrics.baseMargin / 2,
    textAlign: 'center',
  },

  error: {
    alignSelf: 'center',
    color: colors.danger,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
  },

  footer: {
    paddingBottom: metrics.basePadding,
  },

  footerLink: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },

  form: {
    alignSelf: 'stretch',
    marginTop: metrics.baseMargin * 2,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 50,
    paddingHorizontal: metrics.basePadding,
  },

  loading: {
    color: colors.darkTransparent,
  },

  title: {
    color: colors.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default styles;
