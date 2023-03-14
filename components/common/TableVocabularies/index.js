import clsx from 'clsx';
import styles from './styles.module.scss';
export default function TableVocabularies() {
  return (
    <div>
      <table className={styles['table']}>
        <thead>
          <tr>
            <th>Từ vựng</th>
            <th>Từ loại</th>
            <th>Dịch nghĩa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
