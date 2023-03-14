import Container from '~/components/base/Container';
import TableVocabularies from '~/components/common/TableVocabularies';
import styles from './styles.module.scss';
export default function PopuplarVocabularies() {
  return (
    <Container>
      <h3 className={styles['title']}>TỪ VỰNG PHỔ BIẾN</h3>
      <TableVocabularies />
    </Container>
  );
}
