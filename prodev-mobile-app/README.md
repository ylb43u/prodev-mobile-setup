Expo Go Setup Guide

This document outlines the steps taken to install and set up the Expo Go mobile application for mobile development, along with a log of any challenges encountered.
Installation and Initial Setup

    Visit the official Expo Go homepage: The first step was to navigate to the official Expo Go website at https://expo.dev/go.

    Select SDK Version: The latest SDK version was chosen for the installation.

    Install the Expo Go App: The app was installed on the mobile device from the respective app store:

        Android: Installed from the Google Play Store.

        iOS: Installed from the Apple App Store.

    Open and Log In: The Expo Go app was opened on the device, and an existing account was used to log in.

Challenges and Troubleshooting

During the setup, a significant challenge was encountered when trying to run an app on a physical Infinix device using Expo Orbit.
Challenge #1: Device Not Detected

The error message "no running device or emulator named Infinix" was displayed, despite the phone being connected to the PC.

The following steps were taken to troubleshoot and resolve this issue:

    Enabled USB Debugging: Confirmed that USB debugging was enabled in the phone's Developer Options.

    Checked USB Connection Mode: Ensured the phone was connected in "File Transfer" mode, not "Charging only."

    Installed Android Debug Bridge (ADB) Drivers: The necessary ADB drivers were installed by setting up Android Studio on the PC, which is crucial for the computer to recognize the Android device for debugging.

    Restarted Devices: A simple restart of both the PC and the phone was performed to clear any temporary glitches.

    Used a Different Cable/Port: Tested the connection with a different USB cable and a different USB port on the PC to rule out any hardware issues.

Challenge #2: Installation Failure

After resolving the device detection, a new error occurred during the app installation, indicating that "Something went wrong while installing the app." The error log referenced an aapt.exe tool and a "non-zero code: 1" exit.

This type of error points to a problem with the Android SDK's build tools. Here are the steps to troubleshoot this specific issue:

    Check Android SDK Manager: Open Android Studio and go to the SDK Manager. Ensure that the "SDK Build-Tools" are correctly installed and up to date. You may need to uninstall and reinstall the specific version mentioned in the error log (36.1.0-rc1) or the latest stable version.

    Verify Environment Variables: Confirm that your system's ANDROID_HOME and PATH environment variables are correctly set to the Android SDK location. This allows your system and other applications like Expo Orbit to find the necessary tools.

    Manually Install the APK: As a workaround, you can try to manually install the Expo Go APK. You can download it from https://expo.dev/go and then use the following command in your terminal to install it on your device:

    adb install [path_to_expo_go_apk]

    Make sure your phone is connected and recognized by adb by running adb devices.

This README.md serves as a comprehensive log of the setup and troubleshooting process, providing a reference for future development work.