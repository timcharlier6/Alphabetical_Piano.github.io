import getKeyMapping from "./getKeyMapping.mjs";

export default function melodyToQwerty(melody) {
  const noteQwertyMapping = getKeyMapping().reduce((acc, key) => {
    acc[key.note] = key.qwerty;
    return acc;
  }, {});
  return melody.map((note) => noteQwertyMapping[note]);
}
