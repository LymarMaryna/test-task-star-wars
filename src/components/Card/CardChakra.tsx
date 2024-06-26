import { FunctionComponent } from 'react';
import { Card, CardBody, Heading, Stack, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import { CharacterProps } from '../utils';

/**
 * Renders a card with character information using Chakra UI
 * @component Card
 */
const CardChakra: FunctionComponent<CharacterProps> = ({ name, avatar, gender, mass, height }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={avatar} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <UnorderedList listStyleType="none">
            <ListItem>
              Gender: <b>{gender}</b>
            </ListItem>
            <ListItem>
              Height: <b>{height}</b>
            </ListItem>
            <ListItem>
              Mass: <b>{mass}</b>
            </ListItem>
          </UnorderedList>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardChakra;
