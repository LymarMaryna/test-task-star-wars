import Card from '../Card';
import { CharacterProps } from '../../providers';
import { FunctionComponent } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

interface Props {
  characters?: CharacterProps[];
}

/**
 * Renders a list of cards with character information using Chakra UI
 * @param {CharacterProps[]} characters - Array of characters to render
 */
const CardListChakra: FunctionComponent<Props> = ({ characters }) => {
  if (!characters || characters?.length < 1) {
    return null;
  }

  return (
    <SimpleGrid mt={4} columns={{ sm: 2, md: 3, lg: 4 }} spacing="1rem">
      {characters.map((data) => (
        <Card key={data.name} {...data} />
      ))}
    </SimpleGrid>
  );
};

export default CardListChakra;
