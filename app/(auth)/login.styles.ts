import { StyleSheet } from 'react-native';
import { colors } from '../../src/theme/colors';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: colors.background, 
    padding: 24, 
    justifyContent: 'center' 
  },
  header: { 
    alignItems: 'center', 
    marginBottom: 40 
  },
  title: { 
    fontSize: 32, 
    fontWeight: '800', 
    color: colors.primary, 
    letterSpacing: -0.5 
  },
  subtitle: { 
    fontSize: 16, 
    color: colors.textSecondary, 
    marginTop: 8 
  },
  form: { 
    backgroundColor: colors.card, 
    padding: 24, 
    borderRadius: 24, 
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowRadius: 15, 
    elevation: 4 
  },
  label: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: colors.textPrimary, 
    marginBottom: 8, 
    marginTop: 16 
  },
  input: { 
    backgroundColor: colors.input, 
    padding: 16, 
    borderRadius: 12, 
    fontSize: 16, 
    borderWidth: 1, 
    borderColor: colors.border, 
    color: colors.textPrimary 
  },
  loginButton: { 
    backgroundColor: colors.primary, 
    padding: 16, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginTop: 32,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5
  },
  loginButtonText: { 
    color: colors.textWhite, 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  registerLink: { 
    marginTop: 24, 
    alignItems: 'center' 
  },
  registerLinkText: { 
    color: colors.primary, 
    fontWeight: '600', 
    fontSize: 14 
  }
});