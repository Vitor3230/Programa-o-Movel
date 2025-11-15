import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CharacterCard = ({ character }) => {
    return (
        <View style={styles.card}>
            
            {/* Requisito: Imagem (image) */}
            <Image 
                source={{ uri: character.image }} 
                style={styles.image} 
            />
            
            <View style={styles.infoContainer}>
                {/* Requisito: Título (name) estilizado */}
                <Text style={styles.name}>{character.name}</Text>
                
                {/* Requisito: Status (status) */}
                <Text style={styles.detail}>Status: {character.status}</Text>
                
                {/* Requisito: Espécie (species) */}
                <Text style={styles.detail}>Espécie: {character.species}</Text>

                {/* Requisito: ID (id) */}
                <Text style={styles.id}>ID: {character.id}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // Requisito: Card com borda e padding, Espaçamento entre cards
    card: {
        flexDirection: 'row', 
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10, 
        marginVertical: 8, 
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    // Requisito: Imagem no topo ou à esquerda
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    detail: {
        fontSize: 14,
        color: '#555',
    },
    id: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    }
});

export default CharacterCard;