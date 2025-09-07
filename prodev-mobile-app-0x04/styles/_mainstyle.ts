import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: Dimensions.get("window").height,
    },
    companyLogo: {
        width: "100%",
        alignItems: "center",
        padding: 20,
        marginBottom: 50,
    },
    textGroup: {
        alignItems: "center",
    },
    textLarge: {
        color: "white",
        fontWeight: "800",
        fontSize: 40,
        textAlign: "center",
        marginBottom: 12,
    },
    textSmall: {
        color: "white",
        fontSize: 18,
        fontWeight: "200",
        textAlign: "center",
    },
    transparentButton: {
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 5,
        alignItems: "center",
        fontSize: 20,
        flex: 1,
    },
    button: {
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 5,
        alignItems: "center",
        fontSize: 20,
        backgroundColor: "white",
        flex: 1,
    },
    buttonGroup: {
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 20,
    },
});
export { styles };