// Opens the Acme demo board in its own window for recording the hero video.
// Run with the Electron binary from demodrop-desktop:
//   ..\demodrop-desktop\node_modules\electron\dist\electron.exe recording\main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    useContentSize: true,
    title: "Acme",
    backgroundColor: "#fbfbfa",
    autoHideMenuBar: true,
    titleBarStyle: "hidden",
    titleBarOverlay: { color: "#f4f4f2", symbolColor: "#75727f", height: 44 },
  });
  win.loadFile(path.join(__dirname, "board.html"));
});

app.on("window-all-closed", () => app.quit());
