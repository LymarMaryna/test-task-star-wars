import { IS_DEBUG } from '../config';
import { Character } from '../providers';
import { sleep } from '../utils';

type ExtendedCharacter = Character & { url: string };

async function getAllCharacters(search = ''): Promise<Character[]> {
  const characters = [];
  let url: string | null = `https://swapi.py4e.com/api/people/?search=${search}`;

  do {
    const response = await fetch(url);
    const data: { results: unknown[]; next: string | null } = await response.json();
    const list = data.results as ExtendedCharacter[];
    characters.push(...list);
    url = data.next;
  } while (url);

  const result = characters?.map((current: ExtendedCharacter) => {
    const { url, name, gender, mass, height } = current;
    const id = url.split('/').reverse()[1];
    const avatar = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    return {
      name,
      gender,
      mass,
      height,
      avatar,
    };
  });

  IS_DEBUG && (await sleep(2500)); // Simulate slow network

  return result;
}

getAllCharacters();

export default getAllCharacters;
