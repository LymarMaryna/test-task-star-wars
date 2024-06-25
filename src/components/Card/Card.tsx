import { FunctionComponent } from 'react';
import { Character } from '../../utils';
import styles from './Card.module.css';

export interface CharacterProps extends Character {}

/**
 * Renders a card with character information
 * @component Card
 */
const Card: FunctionComponent<CharacterProps> = ({ name, avatar, gender, mass, height }) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <img src={avatar} />
      <p>{gender}</p>
      <p>{mass}</p>
      <p>{height}</p>
    </div>
  );
};

export default Card;
