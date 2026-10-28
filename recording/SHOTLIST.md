# Feature clips shot list

Each clip fills one slot in the Features section. Drop the exported files in a folder and tell Claude where they are. Claude compresses them, makes the posters and saves them as `assets/features/<name>.mp4` and `.jpg`.

**For every clip:**
- Export as MP4, 16:9 (the four "finishing" cards crop to 16:10, so keep the action near the middle).
- Use a dark or grey background in Demodrop, to match the monochrome site.
- No audio. Keep each clip short, 6–12 s, and make it loop cleanly: end roughly where it started.
- Use the Acme board (`recording/main.js`) or any tidy app. Keep personal tabs, notifications and names off screen.

**Two kinds of clip:**
- **Result clips** are recorded and exported with Demodrop, so they show what viewers see.
- **Editor clips** show Demodrop's own editor UI. Record these with the Windows Snipping Tool (Win+Shift+R, then select the Demodrop window), since Demodrop can't record itself.

| File | Kind | What to show |
|---|---|---|
| `zoom` | Result | Two or three clicks on buttons, each getting an auto-zoom in and out. |
| `zoom-timeline` | Editor | The timeline with zoom blocks: drag one, resize one, change its zoom level. |
| `cursor` | Result | Slow, curvy cursor moves and a few clicks, with the cursor size bumped up so the smoothing and ripples show. |
| `backgrounds` | Editor | Click through 3–4 backgrounds, then drag padding and corner radius. |
| `formats` | Editor | Switch 16:9 → 1:1 → 9:16 and back, showing the preview reframe. |
| `speed` | Editor | Select a slow part (typing or loading) on the timeline and set it to 4×. |
| `blur` | Editor | Draw a blur mask over an email or API key in the preview. |
| `record` | Editor | Demodrop's record screen: pick a window, click Record, show the 3-2-1 countdown. |
| `export` | Editor | The export dialog: choose MP4, then GIF, then click Export. |

Any slot without a clip shows a dark "Product clip coming soon" placeholder, so the page works in the meantime. Every clip should be in place before the site goes live.
