import { StyleSheet, Text, View, Button, ScrollView, Image, Pressable } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
const NomePokemon = (nome) => {
    let nomeSplited = nome.split('')

    nomeSplited[0] = nomeSplited[0].toUpperCase()

    return nomeSplited.join("")
}

const PokeCard = props => {

    const [pokemonData, setPokemonData] = useState({})
    const navigation = useNavigation()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}/`)
            .then(r => setPokemonData(r.data))

        
    }, [])
    return(
        <Pressable key={`pokemon_${props.key}`} onPress={() => navigation.navigate("Details", { name: props.name })}>
            <View style={{backgroundColor: 'yellow', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 100, height: 100, flexGrow: 1, flex: 1}}>
                <Image 
                    source={{uri: `https://img.pokemondb.net/sprites/black-white/anim/normal/${props.name}.gif`}}
                    style={{width: '100%', height: '100%'}}
                />

                {
                    pokemonData.types === undefined ? "" : pokemonData.types.map((item, index) => {
                        return(<Text key={index}>{item.type.name}</Text>)
                    })
                }
                

            </View>
            <Text style={{color: 'white', textAlign: 'center'}}>{NomePokemon(props.name)}</Text>
        </Pressable>
    )
}

export default PokeCard