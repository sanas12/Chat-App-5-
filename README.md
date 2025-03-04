# Chat-App
# Description
This is an react native app for messaging. In this project, React Native, Expo and Google Firestore Database are used to build this chat app.

# Key Features
1. A page where users can enter their name and choose a background color for the chat screen
before joining the chat.
2. A page displaying the conversation, as well as an input field and submit button.
3. The chat must provide users with two additional communication features: sending images
and location data.
4. Data gets stored online and offline.

# User Stories
- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.
- As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.
- As a user, I want to send images to my friends to show them what I’m currently doing.
- As a user, I want to share my location with my friends to show them where I am.
- As a user, I want to be able to read my messages offline so I can reread conversations at any
time.
- As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface

# Project Setup
## Testing Setup
- Android


## Testing Procedure
1. Install Nodejs version 16.19.0 on computer
2. Install expo into mobile device - https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=web_share
3. Make sure expo on mobile device support SDK 50
4. Run this project using command "npm start"
5. Open expo app, then scan QR code or enter URL manually
![image](https://github.com/CoderMCH/chat-app/assets/160289936/09581daf-fb15-4d4a-9b99-e4d59ff5505d)


##Installation
Clone the repository: git clone https://github.com/sanas12/Chat-App
Install dependencies: npm install
Install required dependencies:
Google Firestor/Firebase

Create an account
Start a new project
Set up database under build --> Firestore Database
Activate storage
Change rules from 'allow read, write: if false;' to 'allow read, write: if true;'
Start the Expo development server: npx expo start Usage
Running on an Emulator:

Ensure you have an Android or iOS emulator running. Press a (for Android) or i (for iOS) in the Expo CLI to start the app on the emulator. 2. Running on a Physical Device:

Install the Expo Go app from the App Store or Google Play. Scan the QR code generated by npx expo start to run the app on your device.

