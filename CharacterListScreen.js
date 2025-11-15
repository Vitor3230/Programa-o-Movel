import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import { GlobalStyles } from '../styles/globalStyles';

// URL da API
const API_URL = 'https://rickandmortyapi.com/api/character'; 

const CharacterListScreen = () => {
    
    // Requisito: Utilizar useState para armazenar os dados
    const [characters, setCharacters] = useState([]);

    // Requisito: Utilizar useEffect para buscar os dados ao montar a tela
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                // Consumir a API
                const response = await fetch(API_URL); 
                const data = await response.json();
                
                // A API retorna os personagens dentro da chave 'results'
                if (data && data.results) {
                    setCharacters(data.results);
                }

            } catch (e) {
                console.error("Erro ao buscar personagens:", e);
                // Aqui você implementaria o tratamento de erro (Bônus)
            } 
        };

        fetchCharacters();
        // O array vazio [] garante que o useEffect rode apenas uma vez.
    }, []); 

    return (
        <View style={GlobalStyles.container}>
            {/* Requisito: Usar FlatList para renderizar os personagens */}
            <FlatList
                data={characters} 
                renderItem={({ item }) => <CharacterCard character={item} />} 
                
                // Requisito: Usar keyExtractor baseado no id
                keyExtractor={(item) => String(item.id)} 
                
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        paddingTop: 8,
        paddingBottom: 20,
    },
});

export default CharacterListScreen;