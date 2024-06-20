import { FunctionComponent } from 'react';
import { Character } from '../utils';

export interface CharacterProps extends Character {}

/**
 *
 */
const Card: FunctionComponent<CharacterProps> = ({ name, avatar, gender, mass, height }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={avatar} />
      <p>{gender}</p>
      <p>{mass}</p>
      <p>{height}</p>
    </div>
  );
};

export default Card;
