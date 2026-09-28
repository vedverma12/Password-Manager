# PassOP Password Manager

PassOP is a lightweight password management interface built with React and Vite. It lets users store website, username, and password details for multiple accounts, then view, edit, delete, and copy them from a single dashboard.

The app is designed as a simple front-end demonstration of password management. It stores saved entries in the browser's localStorage so they remain available after a refresh, making it easy to test and learn how a password manager could be structured in a real React application.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Production Build](#production-build)
- [Usage Guide](#usage-guide)
- [Important Notes](#important-notes)
- [Potential Improvements](#potential-improvements)

## Overview

This project is a CRUD-style password manager UI. Users can:

- Add a password entry with a site URL, username, and password
- Toggle password visibility
- Copy the site, username, or password to the clipboard
- Edit an existing saved credential
- Delete an entry permanently from the list
- Keep the data saved locally in the browser

The app intentionally focuses on a clean, minimal user experience rather than enterprise-level security features. It is ideal for learning React state management, local persistence, form handling, and UI interaction patterns.

## Features

### 1. Add Password Entries
The form collects:

- Website or app URL
- Username or email
- Password

Validation ensures the required fields are not empty and meet the minimum length requirement before saving.

### 2. Password Visibility Toggle
The password field includes an eye icon, which lets users show or hide the value while typing.

### 3. Save to Local Storage
Every saved password is stored in `localStorage` under the key `passwords`. This means records persist across page refreshes without needing a backend.

### 4. Copy to Clipboard
Each field (site, username, password) contains a copy icon. Clicking it copies the value to the user's clipboard and shows a toast notification.

### 5. Edit Existing Entries
Users can click the edit icon to load a record back into the form. The selected item is removed from the table temporarily so it can be updated and saved again.

### 6. Delete Entries
Entry cards are removed with a delete icon. The app updates both the React state and localStorage immediately.

### 7. Toast Notifications
The app uses `react-toastify` to show user feedback for:

- successful save
- deletion
- copy action
- errors for invalid input

### 8. Responsive Layout
The interface is designed to work well on desktop and smaller screens using utility classes from Tailwind CSS.

## Tech Stack

This project uses:

- React 19
- Vite for fast development and builds
- Tailwind CSS for styling
- React Toastify for notifications
- UUID for unique IDs
- Browser localStorage for persistence
- ESLint for code quality checks

### Core Dependencies

- `react`
- `react-dom`
- `uuid`
- `react-toastify`
- `bootstrap-icons`

### Development Tools

- `vite`
- `tailwindcss`
- `postcss`
- `autoprefixer`
- `eslint`

## Project Structure

```text
Password-Manager/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── README.md
├── public/
│   ├── copy.svg
│   ├── eye-close_1.png
│   ├── eye-open_2.png
│   ├── github.svg
│   ├── pen-to-square-solid-full.svg
│   └── trash-solid-full.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── Manager.jsx
│       └── Navbar.jsx
└── dist/    (generated after build)
```

## How It Works

### App Bootstrapping
The app starts in `src/App.jsx`, which renders the main layout:

- `Navbar`
- `Manager`

### Manager Component
The `Manager` component contains the main password logic.

It manages:

- the form state (`site`, `username`, `password`)
- the list of saved passwords
- localStorage synchronization
- validation and notifications
- copy actions
- editing and deleting records

### State Management
The component uses React hooks:

- `useState` for form and password list state
- `useEffect` to load saved entries when the app mounts
- `useRef` to access the password input and eye icon for toggling visibility

### Save Flow
When the user clicks the Save Password button:

1. The app validates the site, username, and password lengths.
2. If valid, it creates a new object with a `uuid` key.
3. The new entry is appended to the existing list.
4. The updated list is saved to localStorage.
5. A success toast is displayed.

### Edit Flow
When the user clicks edit on a record:

1. The selected password object is found by `id`.
2. Its values are inserted into the form fields.
3. The item is removed from the current list in the UI.
4. The user can modify the fields and save again.

### Delete Flow
When the user clicks delete:

1. The item is filtered out from the password array.
2. The updated array is saved to localStorage.
3. A delete toast appears.

### Data Persistence
On startup, the app loads from localStorage using:

```js
let passwords = localStorage.getItem('passwords')
if (passwords) {
  setpasswordArray(JSON.parse(passwords))
}
```

This makes the app persistent while the browser keeps the data.

## Installation

1. Open a terminal in the project root.
2. Install the dependencies:

```bash
npm install
```

## Running the App

Start the Vite development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually something like `http://localhost:5173`).

## Production Build

Generate a production build:

```bash
npm run build
```

This creates a `dist` folder with the optimized production files.

To preview the production build locally:

```bash
npm run preview
```

## Usage Guide

### Saving a password

1. Enter the website URL in the first input.
2. Enter a username or email.
3. Enter the password.
4. Click the Save Password button.
5. The entry appears in the table below.

### Showing and hiding a password

- Click the eye icon next to the password field.
- The field toggles between hidden and visible mode.

### Copying values

- Click the copy icon next to any field in the table.
- The value is copied to the clipboard.

### Editing a password

- Click the pencil icon.
- The values are loaded into the form.
- Update them and save again.

### Deleting a password

- Click the trash icon.
- The deleted item is removed immediately.

## Important Notes

### Security Warning
This project stores passwords in plain text in the browser's localStorage. That makes it convenient for demos and learning, but it is not safe for real-world production password storage.

For a production-ready solution, you should use:

- encrypted storage
- secure backend APIs
- password hashing
- proper authentication
- strong encryption at rest and in transit

### Browser Dependency
Because the app uses `navigator.clipboard.writeText()`, clipboard access is browser-dependent and may require a secure context or user interaction.

### No Backend
This is a frontend-only application. It does not connect to a database, authentication service, or secure vault API.

## Potential Improvements

Here are a few enhancements that could make the project more realistic and robust:

- Encrypt saved passwords before storing them
- Add a master password lock screen
- Implement password strength checking
- Add categories or tags for accounts
- Use a real database and API
- Support search and filtering
- Add CSV export/import
- Add a dark mode
- Add account sorting by website or date
- Add confirmation dialogs for destructive actions

## Summary

PassOP is a beginner-friendly React password manager demo that demonstrates state, form handling, clipboard features, local persistence, and interactive UI patterns. It is an excellent starting point for anyone learning front-end development or building a simple personal password organizer.

## License

This project does not currently include a license file. If you are using it for personal or educational purposes, you may treat it as a local learning project unless the author explicitly specifies otherwise.
