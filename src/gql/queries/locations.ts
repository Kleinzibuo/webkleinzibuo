import { gql } from "@apollo/client";

export const SEARCH_LOCATIONS = gql`
  query WebQuery($term: String!, $searchBy: String) {
    locations(term: $term, searchBy: $searchBy) {
      _id
      name
      suburb
      city
      postal_code
      province
      country
      latitude
      longitude
    }
  }
`;
