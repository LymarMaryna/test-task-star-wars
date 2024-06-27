import { Character } from '../utils';

async function getAllCharacters(search = ''): Promise<Character[]> {
  let characters = [];
  let url: string | null = `https://swapi.py4e.com/api/people/?search=${search}`;

  do {
    const response = await fetch(url);
    const data: { results: any[]; next: string | null } = await response.json();
    const list = data.results;
    characters.push(...list);
    url = data.next;
  } while (url);

  const result = characters?.map((current: Character & { url: string }) => {
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

  console.log('getAllCharacters - result:', result.length, result);

  //   await sleep(2500);
  return result;
}

getAllCharacters();

export default getAllCharacters;
