import { useQuery } from "@apollo/client";

import "./App.css";
import Film from "./Film";
import { AllFilmsWithVariablesQueryDocument } from "./gql/graphql";

function App() {
  // `data` is typed!
  const { data } = useQuery(AllFilmsWithVariablesQueryDocument, {
    variables: { first: 10 },
  });
  return (
    <div className="App">
      {data && (
        <ul>
          {data.allFilms?.edges?.map(
            (e, i) => e?.node && <Film film={e?.node} key={`film-${i}`} />
          )}
        </ul>
      )}
    </div>
  );
}

export default App;