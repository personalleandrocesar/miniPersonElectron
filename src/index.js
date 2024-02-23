
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
 width: 950,
 height: 600,
 // frame: false,
 fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // Caminho para o script de pré-carregamento
    },
  })
  win.setMenuBarVisibility(false)
win.setIcon(path.join(__dirname, '../src/logo.png')) // Caminho para o ícone
  win.loadURL('https://leandrocesar.com')
}

app.whenReady().then(createWindow)

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
