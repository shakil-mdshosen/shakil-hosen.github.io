# Teleprompter Application

A professional teleprompter application with 10 pre-loaded scripts and advanced features.

## Features

### Core Functionality
- **10 Pre-loaded Scripts**: Variety of professional scripts for different scenarios
  1. Welcome Speech
  2. Product Presentation
  3. News Broadcast
  4. Educational Lecture
  5. Interview Questions
  6. Motivational Speech
  7. Technical Presentation
  8. Event Hosting
  9. YouTube Video Script
  10. Public Announcement

### Advanced Controls
- **Auto-scroll**: Smooth automatic scrolling with adjustable speed (1-10x)
- **Play/Pause**: Start and stop scrolling on demand
- **Reset**: Return to the beginning of the script instantly
- **Speed Control**: Fine-tune scrolling speed to match your reading pace
- **Font Size Adjustment**: Customize text size from 16px to 72px
- **Voice Recording**: Record your voice while reading scripts (auto-downloads when stopped)
- **Color Customization**: Customize background and text colors for optimal visibility
- **Mirror Mode**: Flip text horizontally for use with teleprompter mirrors
- **Center Line Guide**: Visual reading guide at screen center
- **Fullscreen Mode**: Distraction-free reading experience
- **Progress Bar**: Visual indication of script progress
- **Speed Indicator**: Real-time display of current scroll speed
- **Timer**: Elapsed time and estimated time remaining on the stage
- **Custom Scripts**: Create, edit, use and delete your own scripts (saved in your browser)

### User Interface
- **Site-wide Design System**: Uses the shared `/assets/tools.css` and `/assets/tools.js`, so it matches the home page (header, footer, typography, colours)
- **Dark and Light Themes**: Theme toggle in the header, shared with the home page (`theme` key in localStorage); the prompter stage stays high-contrast (black by default) in both themes
- **Layout**: Settings sidebar (script, speed, font size, stage colours, voice recording) next to a large stage with a toolbar (settings toggle, play/pause, reset, mirror, guide line, fullscreen, help). On mobile the sidebar stacks above the stage
- **Settings Toggle**: Hide the sidebar to give the stage the full width; it hides automatically when playback starts
- **Accessible Controls**: Labelled inputs, icon buttons with `aria-label`s, toggle state via `aria-pressed`, visible focus rings, dialogs that close with Escape
- **Responsive Layout**: Works on desktop, tablet, and mobile devices; fullscreen falls back to a full-window view where the Fullscreen API is unavailable (e.g. iPhone Safari)
- **Keyboard Shortcuts**: 
  - Spacebar: Play/Pause
  - Escape: Close the help or custom-scripts dialog
- **Mouse Wheel / Touch Drag**: Manual scrolling when paused
- **Slider Wheel Control**: Mouse wheel over the speed or font-size slider adjusts it

### Additional Features
- **Help System**: Built-in guide explaining all controls
- **Script Selection**: Easy switching between different scripts
- **Smooth Animations**: Professional transitions and movements
- **Auto-stop**: Automatically stops at the end of each script

## Usage

1. Open `/tele/` in your browser
2. Select a script from the dropdown menu (or add your own with **Manage custom scripts**)
3. Adjust font size and speed to your preference
4. Customize background and text colors if desired
5. Click Record to start voice recording (optional)
6. Click Play to start auto-scrolling
7. Use controls to pause, reset, or adjust settings as needed
8. Click Record again to stop recording and download the audio file

## Keyboard Shortcuts

- **Spacebar**: Toggle Play/Pause
- **Escape**: Close the help or custom-scripts dialog

## Tips

- Use Mirror mode when displaying on a teleprompter mirror setup
- Enable Center Line for easier tracking while reading
- Adjust speed based on your speaking pace
- Use fullscreen mode for presentations
- Practice with different speeds to find your optimal reading pace
- Record your voice to review your delivery later
- Customize colors for better contrast based on your environment
- Background and text color preferences are saved automatically
- Hide the settings panel (sliders icon) for a larger stage

## Technical Details

- Pure HTML, CSS, and JavaScript
- No external libraries; uses the site's shared `/assets/tools.css` and `/assets/tools.js`
- Stored in localStorage: `teleprompterCustomScripts`, `teleprompterBgColor`, `teleprompterTextColor`, and the site-wide `theme`
- Works offline after initial load
- Optimized for performance
- Mobile-friendly responsive design

## Access

Visit: `https://shakil.engineer/tele/`
