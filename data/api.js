// Grabbed from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export async function getRandomPhoto() {
  const randomPhotoId = getRandomInt(1, 10);
  const photo = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${randomPhotoId}`
  ).then((response) => response.json());

  return photo;
}