import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGO, HEROLOGOGREEN } from "@/constants";
import { Link } from "expo-router";

export default function Index() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.navGroup}>
                    <Link href='/'>
                        <Ionicons name="arrow-back" size={25} />
                    </Link>
                    <Image source={HEROLOGOGREEN} />
                </View>
                <Text style={styles.largeText}>Sign up to your</Text>
                <Text style={styles.largeText}>Account</Text>
                <Text style={[styles.smallText, { marginTop: 8 }]}>
                    Enter your email and password to sign up.
                </Text>

                <View style={styles.formGroup}>
                    <View>
                        <Text style={styles.placeholderText}>Email</Text>
                        <TextInput keyboardType="email-address" style={styles.inputField} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.placeholderText}>Password</Text>
                        <View style={styles.passwordGroup}>
                            <TextInput style={{ flex: 1 }} />
                            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>

                <View style={styles.dividerGroup}>
                    <View
                        style={styles.divider}
                    ></View>
                    <Text
                        style={styles.dividerText}
                    >
                        OR
                    </Text>
                    <View
                        style={styles.divider}
                    ></View>
                </View>

                <View style={styles.socialMediaButtonGroup}>
                    <TouchableOpacity style={styles.socialMediaButton}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5,
                            }}
                        >
                            <Image source={GOOGLELOGO} />
                            <Text style={styles.socialMediaButtonText}>
                                Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialMediaButton}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5,
                            }}
                        >
                            <Image source={FACEBOOKLOGO} />
                            <Text style={styles.socialMediaButtonText}>
                                Continue with Facebook
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.subTextGroup}>
                    <Text style={styles.subText}>Have An Account?
                    </Text>
                    <Link href="/signin">
                        <Text style={styles.subTextJoin}>Sign In</Text>
                    </Link>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}