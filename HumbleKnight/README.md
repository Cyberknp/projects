# Humble Knight 2.0

A 2D platformer project with a medieval theme and multiplayer ambitions, built with **Godot 4** (GDScript).

> Godot project entry: `project.godot`  
> Main scene: `res://tcns/game.tscn`  
> Autoload: `Music` (`res://tcns/music.tscn`)

---

## About the game

**Humble Knight 2.0** is a platforming game centered around medieval story lines, designed for a fun and unique experience with multiplayer support.

---

## Tech stack

- **Engine:** Godot **4.4** (per `project.godot` features)
- **Language:** GDScript
- **Renderer:** GL Compatibility

---

## Project structure (high level)

- `tcns/` — Main `.tscn` scenes (includes the main entry `game.tscn`)
- `scenes/` — Additional scenes (organization/levels/actors, depending on usage)
- `script/` — Gameplay scripts (GDScript)
- `assets/` — Art/audio and other game assets
- `tres/` — Godot `.tres` resources
- `saved/` — Saved data (dev/testing)
- `export_presets.cfg` — Export configurations
- `project.godot` — Godot project configuration

---

## Getting started

### Prerequisites
- Install **Godot 4.4** (or a compatible Godot 4.x version)

### Run locally (Godot Editor)
1. Clone the repository:
   ```bash
   git clone https://github.com/Cyberknp/Humble-knight-2.0.git
   cd Humble-knight-2.0
   ```
2. Open **Godot** → **Import** → select the project folder (the one containing `project.godot`)
3. Press **Play** to run the main scene (`tcns/game.tscn`)

---

## Controls

Configured in **Project Settings → Input Map**. Current actions include:

- `move_left` (Arrow Left / A)
- `move_right` (Arrow Right / D)
- `jump` (Space)

(If you add more actions, document them here.)

---

## Exporting

This repo includes `export_presets.cfg`.

1. Open the project in Godot
2. Go to **Project → Export**
3. Choose a preset (Windows/Linux/macOS/Web, etc.)
4. Export build artifacts

---

## Contributing

If you’d like to contribute:
1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description of changes

---

## License

No license file is currently included in this repository. If you want, add a `LICENSE` (MIT, GPL-3.0, etc.) and update this section.

---

## Credits

- Project owner: **Cyberknp**
- Built with: **Godot Engine**
