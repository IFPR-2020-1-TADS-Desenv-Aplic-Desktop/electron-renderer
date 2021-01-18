const { webFrame } = require('electron');

document.querySelector('#zoom-in').addEventListener('click', () => {
  const zoom = webFrame.getZoomLevel();
  webFrame.setZoomLevel(zoom + 1);
});

document.querySelector('#zoom-out').addEventListener('click', () => {
  const zoom = webFrame.getZoomLevel();
  webFrame.setZoomLevel(zoom - 1);
});

document.querySelector('#reset-zoom').addEventListener('click', () => {
  webFrame.setZoomLevel(0);
});
