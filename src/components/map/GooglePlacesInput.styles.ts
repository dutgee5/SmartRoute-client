import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: colors.background,
        paddingTop: 50,
        paddingHorizontal: 20,
        zIndex: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        padding: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    input: {
        height: 50,
        backgroundColor: colors.input,
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        color: colors.textPrimary,
    },
    listView: {
        marginTop: 10,
        backgroundColor: colors.background,
    },
});