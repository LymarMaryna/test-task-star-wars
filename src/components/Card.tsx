import { FunctionComponent } from 'react';
import { Character } from '../utils';

export interface CharacterProps extends Character {}

/**
 *
 */
const Card: FunctionComponent<CharacterProps> = ({ name, avatar }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={avatar} />
    </div>
  );
};

export default Card;
