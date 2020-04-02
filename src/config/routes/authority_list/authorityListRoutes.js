import React from "react";
import {
  CORPORATION_LIST, COUNTRY_LIST, GENRE_LIST, LANGUAGE_LIST, PERSON_LIST, PLACE_LIST, SUBJECT_LIST,
} from "../../config-urls";
import popupFormRoutes from "../popupFormRoutes";

const authorityListRoutes = () => {
  const CorporationList = React.lazy(() => import('../../../views/authority_list/Corporation/CorporationList/CorporationList'));
  const CountryList = React.lazy(() => import('../../../views/authority_list/Country/CountryList/CountryList'));
  const GenreList = React.lazy(() => import('../../../views/authority_list/Genre/GenreList/GenreList'));
  const LanguageList = React.lazy(() => import('../../../views/authority_list/Language/LanguageList/LanguageList'));
  const PersonList = React.lazy(() => import('../../../views/authority_list/Person/PersonList/PersonList'));
  const PlaceList = React.lazy(() => import('../../../views/authority_list/Place/PlaceList/PlaceList'));
  const SubjectList = React.lazy(() => import('../../../views/authority_list/Subject/SubjectList/SubjectList'));

  return [
    ...popupFormRoutes(CORPORATION_LIST, CorporationList),
    ...popupFormRoutes(COUNTRY_LIST, CountryList),
    ...popupFormRoutes(GENRE_LIST, GenreList),
    ...popupFormRoutes(LANGUAGE_LIST, LanguageList),
    ...popupFormRoutes(PERSON_LIST, PersonList),
    ...popupFormRoutes(PLACE_LIST, PlaceList),
    ...popupFormRoutes(SUBJECT_LIST, SubjectList),
  ]
};

export default authorityListRoutes;