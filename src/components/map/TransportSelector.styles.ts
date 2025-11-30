import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  closeButton: {
    padding: 5,
  },
  closeText: {
    fontSize: 20,
    color: colors.textSecondary,
    fontWeight: 'bold',
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: colors.primary,
    backgroundColor: colors.input,
  },
  icon: {
    fontSize: 24,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  detailText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
  },
  startButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  startButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});