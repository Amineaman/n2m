# GSAP Animation Customization Template

This file shows you exactly where to modify animations in Hero.jsx.

---

## Animation Timing Quick Adjustments

### All animations happening too slowly?
**Find this line (line ~30):**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
```

**Add to make ALL animations faster:**
```jsx
const tl = gsap.timeline({ 
  defaults: { ease: 'power2.out', duration: 0.5 }  // 0.5 = faster
});
```

Adjust `duration`:
- `0.3` = Very fast
- `0.5` = Fast
- `0.8` = Medium (current)
- `1.2` = Slow
- `1.5` = Very slow

---

## Individual Animation Speed Control

### Badge Animation (First element)
**Around line 50:**
```jsx
tl.fromTo(
  badgeRef.current,
  { opacity: 0, scale: 0.8, y: 20 },
  { opacity: 1, scale: 1, y: 0, duration: 0.8 },  // ← Change this
  0
);
```
Change `duration: 0.8` to any value you want.

### Title Animation
**Around line 60:**
```jsx
tl.fromTo(
  titleRef.current,
  { opacity: 0, y: 40 },
  { opacity: 1, y: 0, duration: 1 },  // ← Change this
  0.2
);
```

### Subtitle Animation
**Around line 70:**
```jsx
tl.fromTo(
  subtitleRef.current,
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 0.8 },  // ← Change this
  0.5
);
```

### Feature Pills (Staggered)
**Around line 80:**
```jsx
tl.fromTo(
  pillElements,
  { opacity: 0, scale: 0.9, y: 15 },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.6,  // ← Individual pill duration
    stagger: 0.1,   // ← Delay between pills
  },
  0.7
);
```

- `duration: 0.6` = How long each pill animates
- `stagger: 0.1` = Delay between pills (0.1 = 100ms)

**Stagger Examples:**
- `stagger: 0.05` = Pills appear fast (50ms apart)
- `stagger: 0.1` = Current (100ms apart)
- `stagger: 0.2` = Pills appear slow (200ms apart)

### Buttons (Staggered)
**Around line 95:**
```jsx
tl.fromTo(
  buttons,
  { opacity: 0, scale: 0.85, y: 20 },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.7,  // ← Button animation speed
    stagger: 0.15,  // ← Delay between buttons
  },
  0.9
);
```

### Stats Section
**Around line 110:**
```jsx
tl.fromTo(
  statsRef.current,
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 0.8 },  // ← Change this
  1.2
);
```

### Scroll Indicator
**Around line 120:**
```jsx
tl.fromTo(
  scrollIndicatorRef.current,
  { opacity: 0, y: -10 },
  { opacity: 1, y: 0, duration: 0.6 },  // ← Change this
  1.4
);
```

---

## When Each Animation Starts

The last number in each `tl.fromTo()` controls when it starts:

**Around lines 50-130:**
```jsx
tl.fromTo(..., 0);      // Badge: Starts at 0s
tl.fromTo(..., 0.2);    // Title: Starts at 0.2s
tl.fromTo(..., 0.5);    // Subtitle: Starts at 0.5s
tl.fromTo(..., 0.7);    // Pills: Start at 0.7s
tl.fromTo(..., 0.9);    // Buttons: Start at 0.9s
tl.fromTo(..., 1.2);    // Stats: Start at 1.2s
tl.fromTo(..., 1.4);    // Scroll: Starts at 1.4s
```

**Change these numbers to adjust the sequence:**
- Smaller = starts sooner
- Larger = starts later

Example: Make buttons start at 0.8s instead of 0.9s:
```jsx
tl.fromTo(buttons, ..., 0.8);  // Changed from 0.9
```

---

## Animation Movement Distance

### Vertical Movement (Y-axis)

**Badge:**
```jsx
{ opacity: 0, scale: 0.8, y: 20 }  // Slides up 20px
```
Change `y: 20` to:
- `y: 5` = Barely moves
- `y: 20` = Current (medium)
- `y: 50` = Big movement

**Title:**
```jsx
{ opacity: 0, y: 40 }  // Slides up 40px
```

**All elements use same pattern:**
- Positive `y: 20` = Moves DOWN
- Negative `y: -20` = Moves UP

### Scale (Size Growth)

**Badge:**
```jsx
{ opacity: 0, scale: 0.8, y: 20 }  // Starts at 80% size
```
Change `scale: 0.8` to:
- `scale: 0.5` = Starts at 50% (big zoom)
- `scale: 0.8` = Current (medium)
- `scale: 0.95` = Starts at 95% (subtle)

**Buttons:**
```jsx
{ opacity: 0, scale: 0.85, y: 20 }  // Starts at 85% size
```

---

## Background Blob Floating

**Around line 130:**

### Left Blob
```jsx
gsap.to(blobLeftRef.current, {
  y: 30,           // ← Float distance (pixels)
  duration: 4,     // ← Float speed (seconds per cycle)
  yoyo: true,      // Keep this true for floating
  repeat: -1,      // Keep this -1 for infinite
  ease: 'sine.inOut',
});
```

**Customize:**
- `y: 30` = How far it floats (larger = more movement)
- `duration: 4` = How long it takes (4 seconds per up/down cycle)

### Right Blob
```jsx
gsap.to(blobRightRef.current, {
  y: -40,          // ← Float distance (opposite direction)
  duration: 5,     // ← Float speed
  yoyo: true,
  repeat: -1,
  ease: 'sine.inOut',
});
```

**Make blobs float faster:**
- Change `duration: 5` to `duration: 3`

**Make blobs float slower:**
- Change `duration: 5` to `duration: 8`

**Make blobs float more:**
- Change `y: -40` to `y: -60`

---

## Easing Options

Change `ease: 'power2.out'` to any of these:

**Smooth & Elegant:**
- `'power1.out'` - Quick, smooth
- `'power2.out'` - **CURRENT** - Perfect balance
- `'power3.out'` - Slow, smooth
- `'sine.out'` - Very smooth

**Bouncy & Fun:**
- `'back.out'` - Pulls back then springs
- `'elastic.out'` - Spring effect
- `'bounce.out'` - Bouncy landing

**Other:**
- `'circ.out'` - Fast start, quick stop
- `'quad.out'` - Simple smooth

**Example - Make animations bouncier:**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'back.out' } });
```

**Example - Make animations very smooth:**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
```

---

## Change Element Animation From "From" State

The first object in `fromTo()` defines the starting state:

```jsx
tl.fromTo(
  badgeRef.current,
  { opacity: 0, scale: 0.8, y: 20 },  // ← STARTING STATE
  { opacity: 1, scale: 1, y: 0, duration: 0.8 },  // Ending state
  0
);
```

**Examples:**

### Make badge start invisible instead of small:
```jsx
{ opacity: 0, scale: 1, y: 20 }  // Removed scale change, just fades in
```

### Make title slide in from the side:
```jsx
{ opacity: 0, y: 40, x: -50 }  // Now slides from LEFT + UP
```

### Make pills start smaller:
```jsx
{ opacity: 0, scale: 0.5, y: 15 }  // Started at 50% size (bigger zoom)
```

---

## Master Quick Reference

| What to Change | Where | How |
|---|---|---|
| All animations slower/faster | `defaults: { duration: X }` | Increase/decrease X |
| Individual element speed | `duration: X` in each animation | Change X value |
| Start time of animation | Last number in `tl.fromTo(...)` | Change timing |
| Movement distance | `y: 20` or `x: 50` | Increase/decrease |
| Size change | `scale: 0.8` | Change scale factor |
| Fade effect | `opacity: 0` | Change to 0.5 for partial fade |
| Stagger between elements | `stagger: 0.1` | Increase for more spacing |
| Easing feel | `ease: 'power2.out'` | Pick different easing |
| Blob float speed | `duration: 4` | Decrease for faster |
| Blob float distance | `y: 30` | Increase for more movement |

---

## Testing Your Changes

After each change:
1. Save the file (Ctrl+S)
2. Hot reload should update automatically
3. Refresh browser if needed (Ctrl+R)
4. Open DevTools (F12) to check console

**Keyboard shortcuts:**
- `Ctrl+S` = Save
- `Ctrl+R` = Refresh browser
- `F12` = Open DevTools
- `Esc` = Close DevTools

---

## Common Customization Examples

### Make All Animations Faster
```jsx
// Change this line (around line 30):
const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.4 } });
```

### Make All Animations Slower
```jsx
// Change this line (around line 30):
const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1.2 } });
```

### Start All Animations Earlier (Overlapping)
```jsx
// Change timing numbers:
0       // Badge (earlier)
0.1     // Title (was 0.2, now sooner)
0.3     // Subtitle (was 0.5, now sooner)
0.4     // Pills (was 0.7, now sooner)
0.6     // Buttons (was 0.9, now sooner)
```

### Make Animations More Dramatic
```jsx
// In Badge animation:
{ opacity: 0, scale: 0.5, y: 50 }  // Larger movement + scale

// In Title animation:
{ opacity: 0, y: 80 }  // More vertical movement

// In Buttons:
{ opacity: 0, scale: 0.7, y: 40 }  // More scale change
```

### Make Animations Subtle
```jsx
// In Badge animation:
{ opacity: 0, scale: 0.95, y: 5 }  // Minimal movement

// In Title animation:
{ opacity: 0, y: 10 }  // Less vertical movement

// In Buttons:
{ opacity: 0, scale: 0.98, y: 5 }  // Almost no scale change
```

---

## Undo Changes

If you mess up the file:
1. Don't save
2. Press `Ctrl+Z` to undo
3. Or restore from Git: `git checkout src/components/Hero.jsx`

---

**Happy animating!** 🚀

Save your customizations and refresh to see changes instantly!
