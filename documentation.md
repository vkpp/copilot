# Task Manager - User Documentation

## Overview

The Task Manager is a lightweight, accessible web application designed to help you organize and track your daily tasks. It features a clean, modern interface with dark and light theme support, keyboard accessibility, and automatic data persistence using your browser's local storage.

**Key Features:**
- ✅ Add, complete, and delete tasks
- ✅ Filter tasks (All, Pending, Completed)
- ✅ Clear all completed tasks at once
- ✅ Dark/Light theme toggle
- ✅ Keyboard navigation support
- ✅ Automatic data persistence (saved locally in your browser)
- ✅ Fully responsive design
- ✅ Accessible with ARIA labels and keyboard controls

---

## Getting Started

### Opening the Application

1. Navigate to the project folder on your computer
2. Open `index.html` in your web browser (double-click the file or right-click and select "Open with Browser")
3. The Task Manager will load with your previously saved tasks (if any)

---

## Using the Application

### Adding a Task

**Method 1: Using the Input Field and Button**
1. Locate the text input field at the top with placeholder text "Add a new task…"
2. Type your task description (up to 200 characters)
3. Click the **Add** button
4. Your task will appear at the top of the task list

**Method 2: Using Your Keyboard**
1. Type your task in the input field
2. Press **Enter** on your keyboard
3. The task is added automatically, and the input field clears

**Example:**
- Input: "Buy groceries"
- Click Add or press Enter
- Task appears in the list with "Done" and "Delete" buttons

### Marking Tasks as Complete

**Mark a Task as Done:**
1. Look for your task in the "Your Tasks" section
2. Click the **Done** button next to the task
3. The task text will appear with a strikethrough, indicating completion
4. The task count updates to show remaining tasks

**Mark a Task as Incomplete (Undo):**
1. Find the completed task (with strikethrough text)
2. Click the **Undo** button (replaces "Done" for completed tasks)
3. The task returns to active status, and the strikethrough is removed

**Alternative Method: Using Keyboard**
- Click on the task text and press **Space** or **Enter** to toggle completion status

### Deleting Tasks

**Remove a Single Task:**
1. Locate the task you want to delete
2. Click the **Delete** button next to that task
3. The task is immediately removed from your list

**Clear All Completed Tasks:**
1. Complete one or more tasks (mark them as Done)
2. Click the **Clear completed** button in the tasks controls section
3. All completed tasks are removed at once
4. Active tasks remain in your list

---

## Filtering and Organizing Tasks

### Using Task Filters

The application provides three filter views to help organize your tasks:

**All Tasks**
- Shows every task in your list (both completed and pending)
- Default view when you open the application

**Pending Tasks**
- Displays only incomplete tasks
- Use this to focus on tasks you still need to do

**Completed Tasks**
- Shows only finished tasks
- Useful for reviewing what you've accomplished

**How to Use Filters:**
1. Look for the filter buttons: **All**, **Pending**, **Completed**
2. Click the filter you want to apply
3. The task list updates to show only tasks matching that filter
4. The task count reflects the filtered view

### Task Counter

The application displays a task counter showing:
- **X remaining · Y total** (e.g., "3 remaining · 5 total")
- Updates automatically as you add, complete, or delete tasks

---

## Theme Toggle

### Switching Between Dark and Light Mode

1. Look for the theme toggle button in the header (moon 🌙 for dark mode, sun ☀️ for light mode)
2. Click the button to switch themes
3. Your preference is automatically saved and will be applied the next time you open the application

---

## Keyboard Navigation

The Task Manager is fully keyboard accessible:

| Keyboard Shortcut | Action |
|---|---|
| **Enter** (in input field) | Add a task |
| **Tab** | Navigate between interactive elements |
| **Space** or **Enter** (on task text) | Toggle task completion |
| **Tab** (on Delete button) | Select and delete a task |

---

## Data Persistence

Your tasks are automatically saved to your browser's local storage, which means:
- ✅ Your tasks persist when you close and reopen the browser
- ✅ Your theme preference is remembered
- ✅ Your last used filter is restored
- ✅ No data is sent to any server (all data stays on your device)

**Note:** Clearing your browser's cache or site data will delete all saved tasks.

---

## Tips and Best Practices

1. **Use Clear Completed Regularly** - Keep your task list clean by clearing completed tasks periodically
2. **Keyboard Shortcuts** - Use Enter and Space for faster task management without the mouse
3. **Filter by View** - Switch between "Pending" and "Completed" to stay focused on actionable items
4. **Browser Sync** - Your tasks are only saved in this specific browser on this device (not synced across devices)
5. **Max Task Length** - Keep task descriptions concise (200 character limit)

---

## Project Files Overview

### Developer Information

The Task Manager is built with semantic HTML5, modern CSS, and vanilla JavaScript. Below is a description of each file:

#### `index.html`
- **Purpose:** Defines the structure and layout of the application
- **Contains:** HTML elements for the header, task input form, task list, filters, and footer
- **Features:** Semantic HTML5 elements (header, main, section, article), ARIA labels for accessibility, and responsive meta viewport settings

#### `styles.css`
- **Purpose:** Styles the application with a modern, responsive design
- **Features:**
  - CSS custom properties (variables) for theming
  - Dark theme (default) and light theme support
  - Responsive layout that works on mobile, tablet, and desktop
  - Smooth transitions and animations
  - Accessibility-focused styling with visible focus states

#### `app.js`
- **Purpose:** Handles all application logic and interactivity
- **Key Functions:**
  - `addTask()` - Creates and adds a new task
  - `toggleTask()` - Marks a task as complete or incomplete
  - `removeTask()` - Deletes a single task
  - `clearCompleted()` - Removes all completed tasks
  - `setFilter()` - Changes the current filter view
  - `toggleTheme()` - Switches between dark and light themes
  - `save()` - Persists data to localStorage
  - `load()` - Retrieves saved data from localStorage

**Storage Keys:**
- `taskmgr.tasks.v1` - Stores the task list
- `taskmgr.filter.v1` - Stores the current filter selection
- `taskmgr.theme.v1` - Stores the theme preference

---

## Troubleshooting

### Tasks Not Saving?
- Check if your browser allows localStorage
- Try clearing browser cache and reloading
- Ensure you're not in private/incognito mode (some browsers don't allow storage in private mode)

### Theme Not Changing?
- Click the theme toggle button (moon 🌙 or sun ☀️) in the header
- Refresh the page to confirm the theme was saved

### Can't Add a Task?
- Ensure the input field isn't empty
- Check that you're not exceeding the 200 character limit
- Try pressing Enter instead of clicking Add

### Tasks Disappeared?
- If you cleared your browser cache or site data, your tasks will be deleted
- Consider creating a backup by taking screenshots of your task list

---

## Accessibility

The Task Manager is designed with accessibility in mind:

- ✅ Full keyboard navigation
- ✅ ARIA labels and descriptions for screen readers
- ✅ Semantic HTML structure
- ✅ High contrast colors in both themes
- ✅ Focus indicators on all interactive elements
- ✅ Live regions that announce task updates to screen readers

---

## Browser Compatibility

The Task Manager works in all modern browsers that support:
- ES6 JavaScript
- localStorage API
- CSS custom properties (CSS variables)

**Tested on:**
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

---

## Support & Feedback

For issues or feature requests, please refer to the project repository or contact the development team.

---

**Last Updated:** December 19, 2025