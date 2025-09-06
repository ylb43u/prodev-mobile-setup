# Mobile Development Setup

This repository contains a mobile development project, with a focus on a clean, scalable setup.

## 🚀 Scaffolding

This project was initially set up by following these steps:

1.  **Project Creation**: We used `npx create-expo-app@latest` to scaffold a new Expo project.
2.  **Template Selection**: We chose the `tabs` template, which comes with a pre-built example app with two tab screens. This provided a functional starting point for our development.
3.  **Dependency Installation**: We navigated into the project directory and ran `npm install` to install all necessary dependencies.

---

## 🧹 Project Reset

The pre-built example app served as a great learning tool, but to start our own project from a clean slate, we used the `npm run reset-project` command. 

### Observations from the Command

When we ran `npm run reset-project`, we observed the following:

1.  **Interactive Prompt**: The script prompted us with a question: "Do you want to move existing files to `/app-example` instead of deleting them?"
2.  **File Movement**: Upon answering 'y' (yes), the script performed a `rename` operation. It moved the entire contents of the original `app` directory to a new directory named `app-example`. This action essentially archived the demo app for future reference.
3.  **Clean Slate**: The script then created a new, minimal `app` directory containing only the necessary files (`index.tsx` and `_layout.tsx`) to start building our application from scratch. This left us with a clean, empty project ready for new code.

This process is a safe and efficient way to remove boilerplate code and prepare the project for custom development without manually deleting files.