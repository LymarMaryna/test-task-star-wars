import { FunctionComponent } from 'react';
import { Card, CardBody, Stack, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import { CharacterProps } from '../../providers';
import { TypeAnimation } from 'react-type-animation';

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
          <TypeAnimation
            sequence={[name]}
            wrapper="h3"
            speed={50}
            style={{ fontSize: '1.2em', fontWeight: 'bold' }}
            repeat={0}
            cursor={false}
          />
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
