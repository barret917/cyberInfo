
import styles from './Iframe.module.css';

export const Iframe = ({ src, ratio = 9 / 20 }) => {
  return (
    <div className={styles.iframeContainer} style={{ paddingBottom: `${ratio * 50}%` }}>
      <iframe
        src={src}
        className={styles.iframe}
        allowFullScreen
      ></iframe>
    </div>
  );
};

