interface OverlayContentSettings {
  position: string;
  zIndex: number;
  top: number | string;
  left: number | string;
  right: number | string;
  bottom: number | string;
  backgroundColor: string;
}

interface ModalSettings {
  position: string;
  top: string;
  left: string;
  right: string;
  bottom: string;
  marginRight: string;
  transform: string;
  border: string;
  background: string;
  overflow: string;
  WebkitOverflowScrolling: string;
  borderRadius: string;
  outline: string;
  padding: string;
}

interface Settings {
  overlay: OverlayContentSettings;
  content: ModalSettings;
}

const windowWidth = window.innerWidth;

const overlayContentSettings: OverlayContentSettings = {
  position: 'fixed',
  zIndex: 999,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(250, 250, 210, 0.5)',
};

const contentSettings: ModalSettings = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  border: '1px solid #ccc',
  background: 'rgb(245, 187, 86)',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '4px',
  outline: 'none',
  padding: windowWidth > 768 ? '60px 40px' : '20px 10px',
};

const settings: Settings = {
  overlay: overlayContentSettings,
  content: contentSettings,
};

const overlayContentSettings2: OverlayContentSettings = {
  position: 'fixed',
  zIndex: 999,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(48, 45, 62, 0.3)',
};

const contentSettings2: ModalSettings = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  border: '1px solid #ccc',
  background: 'rgb(4, 23, 55)',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '4px',
  outline: 'none',
  padding: windowWidth > 768 ? '60px 40px' : '20px 10px',
};

const settings2: Settings = {
  overlay: overlayContentSettings2,
  content: contentSettings2,
};

export { settings, settings2 };
