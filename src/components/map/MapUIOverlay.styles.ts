import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
    overlayContainer: { ...StyleSheet.absoluteFillObject },

    searchContainer: {
        position: 'absolute', left: 20, right: 20,
        backgroundColor: colors.card, borderRadius: 25,
        paddingVertical: 12, paddingHorizontal: 20,
        flexDirection: 'row', alignItems: 'center',
        shadowColor: '#000', shadowOpacity: 0.1, elevation: 6,
        zIndex: 10,
    },
    searchIcon: { marginRight: 10 },
    searchText: { color: colors.textSecondary, fontSize: 15, flex: 1 },
    profileAvatar: { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' },
    profileText: { color: 'white', fontWeight: 'bold' },

    bottomCard: {
        position: 'absolute', left: 20, right: 20,
        backgroundColor: colors.card, borderRadius: 20, padding: 20,
        shadowColor: '#000', shadowOpacity: 0.1, elevation: 10,
    },
    cardTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15, color: colors.textPrimary },
    actionButtons: { flexDirection: 'row', justifyContent: 'space-between' },
    actionBtn: { flex: 1, alignItems: 'center', backgroundColor: colors.input, padding: 12, marginHorizontal: 4, borderRadius: 12 },
    actionEmoji: { fontSize: 22, marginBottom: 4 },
    actionBtnText: { fontSize: 12, fontWeight: '600', color: colors.textPrimary },
});