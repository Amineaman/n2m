# GSAP Hero Animation - Copy-Paste Snippets

Quick copy-paste code snippets for common customizations.

---

## 🚀 Easy Copy-Paste Modifications

### 1. Make ALL Animations Faster
**Find this line (around 30):**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
```

**Replace with:**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.4 } });
```

---

### 2. Make ALL Animations Slower
**Find this line (around 30):**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
```

**Replace with:**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1.2 } });
```

---

### 3. Make Animations Bouncy/Fun
**Find this line (around 30):**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
```

**Replace with:**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'back.out' } });
```

---

### 4. Make Animations Very Smooth/Elegant
**Find this line (around 30):**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
```

**Replace with:**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
```

---

### 5. Make Animations Spring/Elastic
**Find this line (around 30):**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
```

**Replace with:**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'elastic.out' } });
```

---

### 6. Speed Up Background Blobs
**Find these lines (around 130):**
```jsx
gsap.to(blobLeftRef.current, {
  y: 30,
  duration: 4,  // ← Change this
  yoyo: true,
  repeat: -1,
  ease: 'sine.inOut',
});

gsap.to(blobRightRef.current, {
  y: -40,
  duration: 5,  // ← Change this
  yoyo: true,
  repeat: -1,
  ease: 'sine.inOut',
});
```

**Replace with:**
```jsx
gsap.to(blobLeftRef.current, {
  y: 30,
  duration: 2,  // Faster: was 4
  yoyo: true,
  repeat: -1,
  ease: 'sine.inOut',
});

gsap.to(blobRightRef.current, {
  y: -40,
  duration: 2.5,  // Faster: was 5
  yoyo: true,
  repeat: -1,
  ease: 'sine.inOut',
});
```

---

### 7. Slow Down Background Blobs
**Find these lines (around 130):**
```jsx
duration: 4,  // ← Change this
```

**Replace with:**
```jsx
duration: 8,  // Slower
```

And:
```jsx
duration: 5,  // ← Change this
```

**Replace with:**
```jsx
duration: 10,  // Slower
```

---

### 8. Make Blobs Float More (Higher)
**Find these lines (around 130):**
```jsx
gsap.to(blobLeftRef.current, {
  y: 30,  // ← Change this
  duration: 4,
```

**Replace with:**
```jsx
gsap.to(blobLeftRef.current, {
  y: 60,  // Higher: was 30
  duration: 4,
```

And:
```jsx
gsap.to(blobRightRef.current, {
  y: -40,  // ← Change this
  duration: 5,
```

**Replace with:**
```jsx
gsap.to(blobRightRef.current, {
  y: -80,  // Higher: was -40
  duration: 5,
```

---

### 9. Increase Spacing Between Feature Pills
**Find this line (around 80):**
```jsx
stagger: 0.1,  // ← Change this
```

**Replace with:**
```jsx
stagger: 0.2,  // More spacing: was 0.1
```

---

### 10. Decrease Spacing Between Feature Pills
**Find this line (around 80):**
```jsx
stagger: 0.1,  // ← Change this
```

**Replace with:**
```jsx
stagger: 0.05,  // Less spacing: was 0.1
```

---

### 11. Make Buttons Appear Faster
**Find this line (around 100):**
```jsx
duration: 0.7,  // ← Change this
```

**Replace with:**
```jsx
duration: 0.4,  // Faster: was 0.7
```

---

### 12. Make Buttons Scale More Dramatically
**Find these lines (around 95):**
```jsx
{ opacity: 0, scale: 0.85, y: 20 },  // ← Change scale: 0.85
```

**Replace with:**
```jsx
{ opacity: 0, scale: 0.5, y: 20 },  // More dramatic: was 0.85
```

---

### 13. Make Title Larger/Slide More
**Find this line (around 60):**
```jsx
{ opacity: 0, y: 40 },  // ← Change y value
```

**Replace with:**
```jsx
{ opacity: 0, y: 80 },  // Slides more: was 40
```

---

### 14. Make Everything More Subtle (Minimal Movement)
**Find this section (around 50-120):**
```jsx
// Badge
{ opacity: 0, scale: 0.8, y: 20 },
// Title
{ opacity: 0, y: 40 },
// Subtitle
{ opacity: 0, y: 20 },
// Pills
{ opacity: 0, scale: 0.9, y: 15 },
// Buttons
{ opacity: 0, scale: 0.85, y: 20 },
```

**Replace with:**
```jsx
// Badge
{ opacity: 0, scale: 0.95, y: 5 },
// Title
{ opacity: 0, y: 10 },
// Subtitle
{ opacity: 0, y: 5 },
// Pills
{ opacity: 0, scale: 0.98, y: 5 },
// Buttons
{ opacity: 0, scale: 0.98, y: 5 },
```

---

### 15. Make Everything More Dramatic (Large Movement)
**Find this section (around 50-120):**
```jsx
// Badge
{ opacity: 0, scale: 0.8, y: 20 },
// Title
{ opacity: 0, y: 40 },
// Subtitle
{ opacity: 0, y: 20 },
// Pills
{ opacity: 0, scale: 0.9, y: 15 },
// Buttons
{ opacity: 0, scale: 0.85, y: 20 },
```

**Replace with:**
```jsx
// Badge
{ opacity: 0, scale: 0.5, y: 50 },
// Title
{ opacity: 0, y: 100 },
// Subtitle
{ opacity: 0, y: 50 },
// Pills
{ opacity: 0, scale: 0.5, y: 50 },
// Buttons
{ opacity: 0, scale: 0.5, y: 50 },
```

---

### 16. Delay Animation Start (Wait Before Playing)
**Find this line (around 30):**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
```

**Replace with:**
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power2.out' }, delay: 0.5 });
```

Now all animations wait 0.5 seconds before starting.

---

### 17. Remove Stagger (All Pills at Same Time)
**Find this section (around 80):**
```jsx
tl.fromTo(
  pillElements,
  { opacity: 0, scale: 0.9, y: 15 },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,  // ← Remove stagger
  },
  0.7
);
```

**Replace with:**
```jsx
tl.fromTo(
  pillElements,
  { opacity: 0, scale: 0.9, y: 15 },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.6,
    // stagger removed - all pills animate together
  },
  0.7
);
```

---

### 18. Skip Badge Animation (Start with Title)
**Find this section (around 50-60):**
```jsx
// ===== BADGE ANIMATION =====
tl.fromTo(
  badgeRef.current,
  { opacity: 0, scale: 0.8, y: 20 },
  { opacity: 1, scale: 1, y: 0, duration: 0.8 },
  0
);

// ===== TITLE ANIMATION =====
tl.fromTo(
  titleRef.current,
  { opacity: 0, y: 40 },
  { opacity: 1, y: 0, duration: 1 },
  0.2
);
```

**Replace with:**
```jsx
// ===== BADGE ANIMATION SKIPPED =====
// Badge won't animate - show it immediately
gsap.set(badgeRef.current, { opacity: 1 });

// ===== TITLE ANIMATION =====
tl.fromTo(
  titleRef.current,
  { opacity: 0, y: 40 },
  { opacity: 1, y: 0, duration: 1 },
  0  // Start immediately (was 0.2)
);
```

---

### 19. Slide Badge from Left Instead of Up
**Find this section (around 50):**
```jsx
tl.fromTo(
  badgeRef.current,
  { opacity: 0, scale: 0.8, y: 20 },
  { opacity: 1, scale: 1, y: 0, duration: 0.8 },
  0
);
```

**Replace with:**
```jsx
tl.fromTo(
  badgeRef.current,
  { opacity: 0, scale: 0.8, x: -50 },  // Changed y to x
  { opacity: 1, scale: 1, x: 0, duration: 0.8 },
  0
);
```

---

### 20. Slide Badge from Right Instead of Up
**Find this section (around 50):**
```jsx
tl.fromTo(
  badgeRef.current,
  { opacity: 0, scale: 0.8, y: 20 },
  { opacity: 1, scale: 1, y: 0, duration: 0.8 },
  0
);
```

**Replace with:**
```jsx
tl.fromTo(
  badgeRef.current,
  { opacity: 0, scale: 0.8, x: 50 },  // Positive x = from right
  { opacity: 1, scale: 1, x: 0, duration: 0.8 },
  0
);
```

---

## 📋 Quick Reference

### Animation Property Values

| Property | Min | Current | Max | Effect |
|----------|-----|---------|-----|--------|
| `duration` | 0.2 | 0.8 | 2.0 | Speed (lower=faster) |
| `y` | -100 | 20 | 100 | Vertical distance |
| `x` | -100 | 0 | 100 | Horizontal distance |
| `scale` | 0 | 0.8 | 1.5 | Size change |
| `opacity` | 0 | 0.5 | 1 | Transparency |
| `stagger` | 0 | 0.1 | 0.5 | Spacing between elements |

---

### Easing Options Reference

```
power1.out     - Smooth & quick
power2.out     - Smooth & balanced ← CURRENT
power3.out     - Smooth & slow
back.out       - Pulls back, springs forward
elastic.out    - Spring/bouncy effect
sine.out       - Very smooth curve
circ.out       - Circular motion
bounce.out     - Bouncy landing effect
```

---

### Timing Reference (in seconds)

```
0.0s  - Badge
0.2s  - Title
0.5s  - Subtitle
0.7s  - Pills
0.9s  - Buttons
1.2s  - Stats
1.4s  - Scroll
∞     - Blobs
```

---

## ✅ Testing Your Changes

1. **Save file** (Ctrl+S)
2. **Hot reload** (should happen automatically)
3. **Refresh browser** (Ctrl+R) if needed
4. **Check DevTools** (F12) for errors

---

## 🆘 If Something Breaks

**Undo changes:**
- Ctrl+Z in VS Code (undo)
- Or restore from Git: `git checkout src/components/Hero.jsx`

**Common mistakes:**
- Missing commas after values
- Wrong bracket closing
- Typos in property names
- Missing semicolons (optional but recommended)

**Check syntax:**
- Look for red squiggly lines in VS Code
- Check browser console (F12) for errors
- Verify indentation is correct

---

## 💡 Pro Tips

1. **Test one change at a time** - easier to debug
2. **Keep original values** - note them in case you want to revert
3. **Use browser DevTools** - slow down animations to 25% speed to see details
4. **Hot reload is your friend** - changes appear instantly
5. **Take screenshots** - compare before/after

---

## 🎨 Popular Preset Combinations

### Super Fast & Snappy
```jsx
duration: 0.3
ease: 'power1.out'
stagger: 0.05
```

### Slow & Elegant
```jsx
duration: 1.5
ease: 'power3.out'
stagger: 0.2
```

### Bouncy & Fun
```jsx
duration: 0.8
ease: 'back.out'
stagger: 0.15
```

### Smooth & Modern
```jsx
duration: 0.7
ease: 'power2.out'
stagger: 0.1
```

### Dramatic & Impressive
```jsx
duration: 1.2
ease: 'elastic.out'
stagger: 0.25
```

---

## 📊 Animation Speed Guide

| Duration | Effect | Best For |
|----------|--------|----------|
| 0.2 - 0.3s | Very fast | Snappy, energetic |
| 0.4 - 0.6s | Fast | Modern, quick |
| 0.7 - 0.9s | Medium | **BALANCED** ← Current |
| 1.0 - 1.5s | Slow | Elegant, luxurious |
| 1.5 - 2.0s | Very slow | Dramatic, premium |

---

**Remember:** You can't break anything permanently - just undo if needed! 🚀

Happy animating!
