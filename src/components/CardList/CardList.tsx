import { FunctionComponent } from 'react';
import styles from './CardList.module.css';
import Card from '../Card';
import { CharacterProps } from '../Card/Card';

interface Props {
  characters?: CharacterProps[];
}

/**
 * Renders a list of cards with character information
 * @param characters - Array of characters to render
 */
const CardList: FunctionComponent<Props> = ({ characters }) => {
  if (!characters || characters?.length < 1) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        {characters.map((data) => (
          <Card key={data.name} {...data} />
        ))}
      </div>
    </>
  );
};

export default CardList;
