import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  headerContainer: {
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
    lineHeight: 28,
  },
  userName: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  profileButton: {},
  mediaList: {
    paddingTop: 25,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  mediaContainer: {
    backgroundColor: theme.colors.input,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20, // espaçamento grande mas pode ir pra 10 ou 15
    flexDirection: 'row',
    alignItems: 'center',
  },
  mediaThumb: {
    width: 160,
    height: 90,
    borderRadius: 10,
  },
  mediaInfo: {
    flex: 1,
    marginLeft: 10,
  },
  mediaTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.title,
  },
  mediaListTitle: {
    fontSize: 24,
    marginBottom: 20,
    color: theme.colors.heading,
  },
});

// // Lista Thumb em cima do titulo
// import { StyleSheet } from 'react-native';
// import { theme } from '../../global/styles/theme';

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     padding: 24,
//     backgroundColor: theme.colors.headerBackground,
//     flexDirection: 'row',
//     // justifyContent: 'space-around',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: theme.colors.heading,
//     fontSize: 20,
//     lineHeight: 28,
//   },
//   userName: {
//     color: theme.colors.primary,
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   profileButton: {},
//   mediaList: {
//     paddingTop: 32,
//     paddingRight: 24,
//     paddingLeft: 24,
//     paddingBottom: 16,
//   },
//   mediaContainer: {
//     backgroundColor: theme.colors.input,
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 16, // 16 dessa margin + 16 padding do medialist = 32px
//     flexDirection: 'column',
//     // flexDirection: 'row',
//     alignItems: 'center',
//     // justifyContent: 'space-around',
//   },
//   mediaThumb: {
//     width: 200,
//     height: 150,
//     borderRadius: 10,
//   },
//   mediaInfo: {
//     flex: 1,
//     // marginLeft: 20,
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   mediaTitle: {
//     fontSize: 18,
//     color: theme.colors.title,
//   },
// });
