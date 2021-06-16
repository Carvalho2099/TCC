import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import * as MailComposer from 'expo-mail-composer';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato para ajudar no caso ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`;

    function navigateBack(){
        navigation.goBack();
    }
    function mail(){
        MailComposer.composeAsync({
            subject:`Caso: ${incident.title}`,
            recipients:[incident.email],
            body: message,
        })
    }
    function whatsApp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Ajuda Animal</Text>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.cidade}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
            </View>

            <View style={styles.contact}>
                <Text style={styles.contactTitle}>Salve o dia!</Text>
                <Text style={styles.contactTitle}>Ajude este caso.</Text>
                <Text style={styles.contactDescription}>Entre em contato</Text>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={whatsApp}>
                        <Text style={styles.buttonText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={mail}>
                        <Text style={styles.buttonText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}