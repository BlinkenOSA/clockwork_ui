import React from "react";
import {
  ACCESS_RIGHTS_LIST,
  ARCHIVAL_UNIT_THEME_LIST,
  BUILDING_LIST,
  CARRIER_TYPE_LIST,
  CORPORATION_ROLE_LIST,
  DATE_TYPE_LIST,
  EXTENT_UNIT_LIST,
  GEO_ROLE_LIST,
  KEYWORD_LIST,
  LANGUAGE_USAGE_LIST,
  PERSON_ROLE_LIST,
  PRIMARY_TYPE_LIST,
  REPRODUCTION_RIGHT_LIST,
  RESTRICTION_REASON_LIST
} from "../../config-urls";
import popupFormRoutes from "../popupFormRoutes";

const controlledListRoutes = () => {
  const AccessRightsList = React.lazy(() => import('../../../views/controlled_list/AccessRights/AccessRightsList/AccessRightsList'));
  const ArchivalUnitThemeList = React.lazy(() => import('../../../views/controlled_list/ArchivalUnitTheme/ArchivalUnitThemeList/ArchivalUnitThemeList'));
  const BuildingList = React.lazy(() => import('../../../views/controlled_list/Building/BuildingList/BuildingList'));
  const CarrierTypeList = React.lazy(() => import('../../../views/controlled_list/CarrierType/CarrierTypeList/CarrierTypeList'));
  const CorporationRoleList = React.lazy(() => import('../../../views/controlled_list/CorporationRole/CorporationRoleList/CorporationRoleList'));
  const DateTypeList = React.lazy(() => import('../../../views/controlled_list/DateType/DateTypeList/DateTypeList'));
  const ExtentUnitList = React.lazy(() => import('../../../views/controlled_list/ExtentUnit/ExtentUnitList/ExtentUnitList'));
  const GeoRoleList = React.lazy(() => import('../../../views/controlled_list/GeoRole/GeoRoleList/GeoRoleList'));
  const KeywordList = React.lazy(() => import('../../../views/controlled_list/Keyword/KeywordList/KeywordList'));
  const LanguageUsageList = React.lazy(() => import('../../../views/controlled_list/LanguageUsage/LanguageUsageList/LanguageUsageList'));
  const PersonRoleList = React.lazy(() => import('../../../views/controlled_list/PersonRole/PersonRoleList/PersonRoleList'));
  const PrimaryTypeList = React.lazy(() => import('../../../views/controlled_list/PrimaryType/PrimaryTypeList/PrimaryTypeList'));
  const ReproductionRightList = React.lazy(() => import('../../../views/controlled_list/ReproductionRight/ReproductionRightList/ReproductionRightList'));
  const RestrictionReasonList = React.lazy(() => import('../../../views/controlled_list/RestrictionReason/RestrictionReasonList/RestrictionReasonList'));

  return [
    ...popupFormRoutes(ACCESS_RIGHTS_LIST, AccessRightsList),
    ...popupFormRoutes(BUILDING_LIST, BuildingList),
    ...popupFormRoutes(ARCHIVAL_UNIT_THEME_LIST, ArchivalUnitThemeList),
    ...popupFormRoutes(CARRIER_TYPE_LIST, CarrierTypeList),
    ...popupFormRoutes(CORPORATION_ROLE_LIST, CorporationRoleList),
    ...popupFormRoutes(DATE_TYPE_LIST, DateTypeList),
    ...popupFormRoutes(EXTENT_UNIT_LIST, ExtentUnitList),
    ...popupFormRoutes(GEO_ROLE_LIST, GeoRoleList),
    ...popupFormRoutes(KEYWORD_LIST, KeywordList),
    ...popupFormRoutes(LANGUAGE_USAGE_LIST, LanguageUsageList),
    ...popupFormRoutes(PERSON_ROLE_LIST, PersonRoleList),
    ...popupFormRoutes(PRIMARY_TYPE_LIST, PrimaryTypeList),
    ...popupFormRoutes(REPRODUCTION_RIGHT_LIST, ReproductionRightList),
    ...popupFormRoutes(RESTRICTION_REASON_LIST, RestrictionReasonList)
  ]
};

export default controlledListRoutes;