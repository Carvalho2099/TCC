import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#140270'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 15,
        color: 'white'

    },
    headerTextBold: {
        fontWeight: 'bold',
        color: 'white'
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: 'white'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: 'white'
    },
    incidentList: {
        marginTop: 32,
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: 'royalblue',
        marginBottom: 16,
    },
    incidentProperty: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: 'white'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
