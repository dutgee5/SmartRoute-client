import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors'; 

export const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 15 
  },
  button: { 
    flex: 1, 
    alignItems: 'center', 
    padding: 12, 
    marginHorizontal: 5, 
    borderRadius: 12, 
    backgroundColor: colors.input,  
    borderWidth: 1, 
    borderColor: colors.border 
  },
  buttonSelected: { 
    backgroundColor: colors.primary, 
    borderColor: colors.primary 
  },
  icon: { 
    fontSize: 24, 
    marginBottom: 4 
  },
  text: { 
    fontSize: 13, 
    fontWeight: '600', 
    color: colors.textPrimary 
  },
  textSelected: { 
    color: colors.textWhite 
  },
});