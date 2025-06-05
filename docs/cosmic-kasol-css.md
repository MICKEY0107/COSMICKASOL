# CosmicKasol CSS Styling

## Core Cosmic Variables

```css
:root {
  /* Cosmic Color Palette */
  --cosmic-purple: #8A2BE2;
  --cosmic-blue: #4B0082;
  --psychedelic-pink: #FF00FF;
  --cosmic-teal: #00FFFF;
  --cosmic-black: #0D0221;
  --cosmic-dark: #1A0D35;
  --cosmic-space: #191230;
  --neon-glow: 0 0 10px rgba(138, 43, 226, 0.8), 0 0 20px rgba(255, 0, 255, 0.5);
  --holo-gradient: linear-gradient(45deg, #8A2BE2, #4B0082, #FF00FF, #00FFFF);
}
```

## Neon Text and Button Effects

```css
.neon-text {
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px var(--cosmic-purple), 
               0 0 20px var(--cosmic-purple), 0 0 25px var(--psychedelic-pink);
  letter-spacing: 3px;
}

.neon-heading {
  background: var(--holo-gradient);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  letter-spacing: 2px;
  animation: pulseGlow 2s infinite alternate;
}

.neon-button {
  display: inline-block;
  padding: 12px 24px;
  color: white;
  background: transparent;
  border: 2px solid var(--cosmic-purple);
  border-radius: 4px;
  box-shadow: var(--neon-glow);
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
}

.neon-button:hover {
  color: white;
  box-shadow: 0 0 15px var(--cosmic-purple), 0 0 30px var(--psychedelic-pink);
}
```

## 3D Card Effects

```css
.cosmic-card {
  background: var(--cosmic-dark);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  position: relative;
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.cosmic-card:hover {
  transform: rotateY(10deg) rotateX(10deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(138, 43, 226, 0.4);
}
```

## Animations

```css
@keyframes pulseGlow {
  0% {
    text-shadow: 0 0 5px #fff, 0 0 10px var(--cosmic-purple);
  }
  100% {
    text-shadow: 0 0 10px #fff, 0 0 20px var(--cosmic-purple), 0 0 30px var(--psychedelic-pink);
  }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

## Background Patterns

```css
body {
  background-color: var(--cosmic-black);
  color: white;
  font-family: 'Orbitron', sans-serif;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.2) 0%, transparent 20%),
    radial-gradient(circle at 80% 60%, rgba(255, 0, 255, 0.2) 0%, transparent 20%);
  background-attachment: fixed;
}

.starry-bg:before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: 
    radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 2px),
    radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-size: 100px 100px, 50px 50px;
  background-position: 0 0, 25px 25px;
  pointer-events: none;
  z-index: -1;
}
```