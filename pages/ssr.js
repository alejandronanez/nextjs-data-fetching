import { getRandomPhoto } from "../data/api";

function SSR({ photo }) {
  return (
    <div>
      <h1>{photo.title}</h1>
      <img src={photo.url} />
    </div>
  );
}

export async function getServerSideProps() {
  let photo;
  try {
    photo = await getRandomPhoto();
  } catch (e) {
    /**
     * If something goes wrong, we return a 404 page
     */
    return {
      notFound: true,
    };
  }

  if (!photo) {
    /**
     * If we don't get a `photo` back, we return a 404 page
     */
    return {
      notFound: true,
    };
  }

  return {
    props: {
      photo,
    },
  };
}

export default SSR;
