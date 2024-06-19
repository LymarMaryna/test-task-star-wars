import { FunctionComponent } from 'react';
import Card, { CharacterProps } from './Card';

interface Props {
  characters?: CharacterProps[];
}

const CardList: FunctionComponent<Props> = ({ characters }) => {
  if (!characters || characters?.length < 1) {
    return null;
  }

  return (
    <div>
      {characters.map((data) => (
        <Card key={data.name} {...data} />
      ))}
    </div>
  );
};

export default CardList;
