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
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: 'royalblue',
        marginBottom: 16,
        marginTop: 48,
    },
    incidentProperty: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 24,
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: 'white'
    },
    contact: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: 'royalblue',
        marginBottom: 16,
    },
    contactTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        lineHeight: 30,
    },
    contactDescription: {
        fontSize: 15,
        color: 'white',
        marginTop: 16,
    },
    buttons: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
});