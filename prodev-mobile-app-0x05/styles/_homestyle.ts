// styles/_homestyle.ts
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    /** Search Group */
    searchGroup: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
        backgroundColor: "#fff",
    },
    searchFormGroup: {
        marginHorizontal: "auto",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    searchControlGroup: {
        flex: 1,
    },
    searchFormText: {
        paddingHorizontal: 8,
        fontSize: 14,
        color: "#333",
    },
    searchControl: {
        flex: 1,
        fontSize: 14,
        paddingVertical: 4,
        color: "#000",
    },
    searchButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#ff385c",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 8,
    },

    /** Filters */
    filterGroup: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        gap: 12,
        paddingBottom: 7,
    },
    filterContainer: {
        width: 70,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    /** Listings */
    listingContainer: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
    },

    /** Pagination */
    paginationContainer: {
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    showMoreButton: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 30,
        backgroundColor: "#ff385c",
    },
    showMoreButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
