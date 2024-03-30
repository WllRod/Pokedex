import { StyleSheet, Text, View, Button } from 'react-native';


const Header = () => {
    return(
        <View style={styles.container}>
            <Text>Menu</Text>
            <Text>Logo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        height: '10%',
        alignItems: 'center'
    }
})
export default Header