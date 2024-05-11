# sleek-chat-messenger

# NeoMessage

NeoMessage serves as a secure messaging app designed to offer an efficient and engaging user communication platform similar to WhatsApp, emphasizing a sleek, user-friendly design.

## Screens

### Home Screen
Displays a list of recent chats, with options for initiating new chats and searching through existing conversations.

- **Behavior:** Dynamically updates with new messages and displays sorted chats based on recent activity.
- **Layout:** Clean and organized with a focus on recent chats and easy navigation to major features like new chats and search.

### Chat Screen
Shows detailed conversation threads between the user and their contacts.

- **Behavior:** Supports text messages, voice messages, photo and video sharing, as well as live location updates.
- **Layout:** Messages are clearly separated with bubbles, differentiating incoming from outgoing messages through alignment and color.

## Components

### Navigation Bar
Located at the top of the Home Screen for accessing various features like Camera, Chats, Status, and Calls.

- **Behavior:** Tapping on any section shifts the view to the respective feature. An active indicator highlights the currently active tab.
- **Design:** Utilizes a light base color with text and icons in black for clarity. The active tab is underlined or colored in a vibrant accent tone to denote activity and focus.

### Chat List Item
Represents individual conversations on the Home Screen with the most recent message snippet, contact name, and time of the last message.

- **Behavior:** Tapping a chat item opens the respective Chat Screen.
- **Design:** Contact names are bold and larger, while message snippets and time stamps are in smaller, lighter text. Utilizes grey scale and vibrant colors minimally to highlight unread messages.

### Message Bubble
Used in the Chat Screen to display sent and received messages.

- **Behavior:** Aligns received messages to the left and sent messages to the right. Supports multimedia display and interactive links.
- **Design:** Received messages have a light background with dark text, while sent messages feature a darker background with light text for easy differentiation. Round-cornered bubbles add to a friendly, informal appearance.

### Status Tab
Allows users to post and view status updates that last for 24 hours.

- **Behavior:** Status updates from contacts are displayed as a list with thumbnail previews.
- **Design:** Thumbnails are highlighted with a vibrant border if they contain unviewed updates, drawing user's attention.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/sleek-chat-messenger.git
cd sleek-chat-messenger
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
