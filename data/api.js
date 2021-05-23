// Grabbed from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export async function getRandomPhoto() {
  const randomPhotoId = getRandomInt(1, 10);
  let photo;
  try {
    photo = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${randomPhotoId}`
    ).then((response) => {
      /**
       * We consider any response not in the ranges of 200-299 as an
       * invalid response.
       * That covers 4xx errors and 5xx errors.
       */
      if (!response.ok) {
        throw new Error("Something went wrong with the request");
      }
      return response.json();
    });
  } catch (e) {
    /**
     * We'll get to this block if:
     * - Response was NOT OK.
     * - We couldn't complete the request
     *
     * We should log whatever is coming from `e` to our
     * reporting/alerting system (see Sentry.io)
     */
    console.log("...logging error to our system...");
    throw e;
  }

  return photo;
}
