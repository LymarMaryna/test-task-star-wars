import { Character, sleep } from '../utils';

// const MOCK_DATA = [
//   {
//     avatar: 'https://starwars-visualguide.com/assets/img/characters/1.jpg',
//     name: 'Luke Skywalker',
//     height: '172',
//     mass: '77',
//     hair_color: 'blond',
//     skin_color: 'fair',
//     eye_color: 'blue',
//     birth_year: '19BBY',
//     gender: 'male',
//   },
//   {
//     avatar: 'https://starwars-visualguide.com/assets/img/characters/2.jpg',
//     name: 'C-3PO',
//     height: '167',
//     mass: '75',
//     hair_color: 'n/a',
//     skin_color: 'gold',
//     eye_color: 'yellow',
//     birth_year: '112BBY',
//     gender: 'n/a',
//   },
//   {
//     avatar: 'https://starwars-visualguide.com/assets/img/characters/3.jpg',
//     name: 'R2-D2',
//     height: '96',
//     mass: '32',
//     hair_color: 'n/a',
//     skin_color: 'white, blue',
//     eye_color: 'red',
//     birth_year: '33BBY',
//     gender: 'n/a',
//   },
// ];

async function getCharacters(page = 1, search = ''): Promise<Character[] | undefined> {
  const response = await fetch(`https://swapi.py4e.com/api/people/?page=${page}&search=${search}`);
  const characterList = await response.json();

  const result = characterList?.results?.map((current: Character & { url: string }) => {
    const { url } = current;
    const id = url.split('/').reverse()[1];
    current.avatar = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    return current;
  });

  //   await sleep(2500);
  return result;
}

export default getCharacters;
