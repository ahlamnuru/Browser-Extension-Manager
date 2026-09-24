# Frontend Mentor - Browser extensions manager UI solution

This is my solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yzSJ-y_p7p). This was for my class - my mentor wanted to see React and TypeScript specifically for this one, with Tailwind for the styling like usual.

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter extensions by All / Active / Inactive
- Remove extensions from the list
- Switch between light and dark theme
- Get a layout that works well on mobile and desktop
- See hover and focus states on everything clickable

### Links

- Solution URL: (add your repo link here)
- Live Site URL: (add your deployed link here)

## My process

### Built with

- React (with Vite)
- TypeScript
- Tailwind CSS
- Mobile-first layout
- useState for the extensions list, the active filter, and the theme

### What I learned

This was my first time using TypeScript with React. The main difference from plain JS is that i had to describe the "shape" of my data up front - like, an extension always has an `id`, a `logo`, a `name`, a `description`, and `isActive` (true or false). I put that in a file called `types.ts`. Once that's defined, TypeScript will warn me in my editor if I ever try to use an extension that's missing a field or has the wrong type in it, instead of only finding out when the app breaks in the browser.

I split it into these pieces:
- `Header` - logo, title, and the light/dark toggle button
- `FilterBar` - the "Extensions List" heading plus the All/Active/Inactive buttons
- `ExtensionCard` - one single extension: logo, name, description, remove button, toggle switch
- `ToggleSwitch` - a small reusable on/off switch, it's really just a styled checkbox
- `App` - holds all the state (the list itself, which filter is picked, dark mode on/off) and passes it down to the others

For dark mode, I used a bit of Tailwind's newer setup that lets a `dark` class control the theme instead of only following the device's setting, so the toggle button actually works.

### Continued development

Next I want to get more comfortable writing TypeScript types myself instead of asking for help with them, and maybe look into saving the theme choice so it doesn't reset when the page reloads.