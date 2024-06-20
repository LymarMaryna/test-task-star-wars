import { Character, sleep } from '../utils';

async function lookupCharacters(search = ''): Promise<Character[] | undefined> {
  const response = await fetch(`https://swapi.py4e.com/api/people/?search=${search}`);
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

export default lookupCharacters;
