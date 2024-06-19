import { CardList } from '../components';

const MOCK_DATA = [
  {
    avatar: 'https://starwars-visualguide.com/assets/img/characters/1.jpg',
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    avatar: 'https://starwars-visualguide.com/assets/img/characters/2.jpg',
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    avatar: 'https://starwars-visualguide.com/assets/img/characters/3.jpg',
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
];
/**
 * StarWars explorer
 */
const StarWarsView = () => {
  return (
    <div>
      <CardList characters={MOCK_DATA} />
    </div>
  );
};

export default StarWarsView;
