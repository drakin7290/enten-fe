import styles from './styles.module.scss';

export default function ItemPopup({ icon, label, onClick = () => {} }) {
  return (
    <div className={styles['item-popup']} onClick={onClick}>
      {icon} <label className={styles['label']}>{label}</label>
    </div>
  );
}
