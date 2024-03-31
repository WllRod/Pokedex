import { View, Text, Image } from "react-native";
import Animated from "react-native-reanimated";
const Details = ({navigation, route}) => {
    return(
        <View>
            <Animated.Image 
                    source={{uri: `https://img.pokemondb.net/sprites/black-white/anim/normal/${route.params.name}.gif`}}
                    style={{width: 100, height: 100}}
                    sharedTransitionTag="tag"
                />
        </View>
    )
}

export default Details