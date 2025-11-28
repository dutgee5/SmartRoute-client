import { StyleSheet } from 'react-native';
import { colors } from '../src/theme/colors'; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        padding: 20
    },
    logo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 10,
        textAlign: 'center'
    },
    slogan: {
        fontSize: 18,
        color: colors.textSecondary,
        marginBottom: 60,
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        gap: 15
    },
    loginButton: {
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: colors.primary,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 4
    },
    loginText: {
        color: colors.textWhite,
        fontWeight: 'bold',
        fontSize: 16
    },
    registerButton: {
        backgroundColor: colors.card,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.primary
    },
    registerText: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 16
    },
});