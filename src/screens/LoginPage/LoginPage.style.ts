import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    imageContainer: {
        alignItems: "center"
    },
    image: {
        height: 250,
        width: 250,
        resizeMode: "center"
    },
    signUpContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
    },
    signUpText: {
        fontWeight: "bold",
        fontSize: 20
    }
})

export default styles