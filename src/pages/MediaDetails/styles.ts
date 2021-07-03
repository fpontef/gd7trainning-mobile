import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    backgroundColor: theme.colors.headerBackground,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: theme.colors.heading,
    fontSize: 20,
    marginLeft: 16,
  },
  backButton: {
    color: theme.colors.title,
  },
  mediaContainer: {
    backgroundColor: theme.colors.input,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  mediaTitle: {
    color: theme.colors.heading,
    fontSize: 24,
    paddingTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 20,
  },
  mediaImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  mediaImage: {
    height: 240,
    width: 320,
    borderRadius: 10,
  },
  mediaMeta: {
    fontSize: 16,
  },
});
