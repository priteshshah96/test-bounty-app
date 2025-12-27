# Test Bounty App

A simple React app for testing CodeBounty's AI-enhanced bug description feature.

## Known Bug 🐛

**Login button throws TypeError when clicked**

When a user enters their email and password and clicks the "Login" button, the browser console shows:
```
TypeError: Cannot read property 'authenticate' of undefined
```

The page loads fine, but authentication fails completely.

## Steps to Reproduce

1. Open the app in browser
2. Enter any email and password
3. Click "Login" button
4. Check browser console - TypeError appears

## Expected Behavior

User should see "Login successful!" alert after clicking login button.

## Actual Behavior

Browser console shows TypeError and login fails.

## Tech Stack

- React 18
- TypeScript
- Create React App

## Setup

```bash
npm install
npm start
```

The app will run on http://localhost:3000

