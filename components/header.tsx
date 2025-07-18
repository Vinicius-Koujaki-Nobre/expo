import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <View style={styles.background}>
            <Text>Header Exemplo</Text>
            <Image source={image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#090909',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 30
    }
})