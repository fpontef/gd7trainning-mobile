import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: theme.colors.input,
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: theme.colors.title,
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    marginRight: 16,
  },
});
