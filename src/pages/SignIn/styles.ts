import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.title,
    marginTop: 64,
    marginBottom: 24,
    marginLeft: 0,
    marginRight: 0,
  },
});

/* Tabela de comparação */
// Class	          Properties
// font-medium	    font-weight: 500;
// font-semibold	  font-weight: 600;
// font-bold	      font-weight: 700;
// font-extrabold	  font-weight: 800;

// Tabela de Shorthand CSS:
// - margin: 64, 0, 0, 24
// Fica: margin-top: 64, right e left: 0, bottom: 24
// - margin: top_bottom left_right
