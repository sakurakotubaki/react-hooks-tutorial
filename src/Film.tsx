import { FragmentType, useFragment } from "./gql/fragment-masking";
import { FilmItemFragmentDoc } from "./gql/graphql";

const Film = (props: {
  /* `film` property has the correct type 🎉 */
  film: FragmentType<typeof FilmItemFragmentDoc>;
}) => {
  const film = useFragment(FilmItemFragmentDoc, props.film);
  return (
    <div>
      <h3>{film.title}</h3>
      <p>{film.releaseDate}</p>
    </div>
  );
};

export default Film;