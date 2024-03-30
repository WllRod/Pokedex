import { StyleSheet, Text, View, Button, ScrollView, Image, Pressable } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PokeCard from './PokeCard';


const Body = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(q => setPokemons(q.data.results))
    }, [])
    

    return(
        <ScrollView style={style.container}>
            <View style={style.pokemons}>
                {
                    pokemons.map((item, index) => {
                        
                        return(
                            <PokeCard name={item.name} index={index} />
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        height:'100%'
    },
    pokemons: {
        display:'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        backgroundColor: 'blue',
        justifyContent:'center',
        gap: 10,
        padding: 5
    }
})
export default Body