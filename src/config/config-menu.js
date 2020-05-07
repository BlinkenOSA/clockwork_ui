import React from 'react';
import {
  ACCESS_RIGHTS_LIST,
  ACCESSION_LIST, ARCHIVAL_UNIT_LIST,
  ARCHIVAL_UNIT_THEME_LIST,
  BUILDING_LIST,
  CARRIER_TYPE_LIST, CORPORATION_LIST,
  CORPORATION_ROLE_LIST, COUNTRY_LIST,
  DATE_TYPE_LIST,
  DONOR_LIST,
  EXTENT_UNIT_LIST, FINDING_AIDS, GENRE_LIST,
  GEO_ROLE_LIST, ISAAR_LIST, ISAD_LIST,
  KEYWORD_LIST, LANGUAGE_LIST,
  LANGUAGE_USAGE_LIST, PERSON_LIST,
  PERSON_ROLE_LIST, PLACE_LIST,
  PRIMARY_TYPE_LIST, REPRODUCTION_RIGHT_LIST, RESTRICTION_REASON_LIST, SUBJECT_LIST
} from "./config-urls";

import { DashboardOutlined, SwapOutlined, ApartmentOutlined, UserOutlined, ProfileOutlined, FileOutlined,
  UnorderedListOutlined, BankOutlined, FlagOutlined, DeploymentUnitOutlined, GlobalOutlined, TeamOutlined,
  EnvironmentOutlined, TagOutlined, RightCircleOutlined, DesktopOutlined, InboxOutlined
} from '@ant-design/icons';

const configMenu = [
  {name: 'Dashboard', icon: <DashboardOutlined/>, link: '/'},
  {name: 'Accession', icon: <SwapOutlined/>, submenu: [
      {name: 'Accession Records', link: ACCESSION_LIST},
      {name: 'Donors', link: DONOR_LIST},
  ]},
  {name: 'Archival Unit', icon: <ApartmentOutlined/>, link: ARCHIVAL_UNIT_LIST},
  {name: 'ISAAR-CPF', icon: <UserOutlined/>, link: ISAAR_LIST},
  {name: 'ISAD(G)', icon: <ProfileOutlined/>, link: ISAD_LIST},
  {name: 'Finding Aids', icon: <FileOutlined/>, submenu: [
      {name: 'Folders / Items', link: FINDING_AIDS},
      {name: 'Organizer', link: '/'},
  ]},
  {name: 'Lists', icon: <UnorderedListOutlined/>, submenu: [
      {name: 'Authority List', submenu: [
          {name: 'Corporations', icon: <BankOutlined/>, link: CORPORATION_LIST},
          {name: 'Countries', icon: <FlagOutlined/>, link: COUNTRY_LIST},
          {name: 'Genres', icon: <DeploymentUnitOutlined/>, link: GENRE_LIST},
          {name: 'Languages', icon: <GlobalOutlined/>, link: LANGUAGE_LIST},
          {name: 'People', icon: <TeamOutlined/>, link: PERSON_LIST},
          {name: 'Places', icon: <EnvironmentOutlined/>, link: PLACE_LIST},
          {name: 'Subjects', icon: <TagOutlined/>, link: SUBJECT_LIST},
      ]},
      {name: 'Controlled List', submenu: [
          {name: 'Access Rights', icon: <RightCircleOutlined/>, link: ACCESS_RIGHTS_LIST},
          {name: 'Archival Unit Themes', icon: <RightCircleOutlined/>, link: ARCHIVAL_UNIT_THEME_LIST},
          {name: 'Building', icon: <RightCircleOutlined/>, link: BUILDING_LIST},
          {name: 'Carrier Types', icon: <RightCircleOutlined/>, link: CARRIER_TYPE_LIST},
          {name: 'Corporation Roles', icon: <RightCircleOutlined/>, link: CORPORATION_ROLE_LIST},
          {name: 'Date Types', icon: <RightCircleOutlined/>, link: DATE_TYPE_LIST},
          {name: 'Extent Units', icon: <RightCircleOutlined/>, link: EXTENT_UNIT_LIST},
          {name: 'Geo Roles', icon: <RightCircleOutlined/>, link: GEO_ROLE_LIST},
          {name: 'Keyword', icon: <RightCircleOutlined/>, link: KEYWORD_LIST},
          {name: 'Language Usages', icon: <RightCircleOutlined/>, link: LANGUAGE_USAGE_LIST},
          {name: 'Person Roles', icon: <RightCircleOutlined/>, link: PERSON_ROLE_LIST},
          {name: 'Primary Types', icon: <RightCircleOutlined/>, link: PRIMARY_TYPE_LIST},
          {name: 'Reproduction Rights', icon: <RightCircleOutlined/>, link: REPRODUCTION_RIGHT_LIST},
          {name: 'Restriction Reasons', icon: <RightCircleOutlined/>, link: RESTRICTION_REASON_LIST},
      ]},
  ]},
  {name: 'MLR', icon: <InboxOutlined/>},
  {name: 'Digitization', icon: <DesktopOutlined/>, submenu: [
      {name: 'Digitization Log', link: '/'},
      {name: 'Digitization Plan', link: '/'},
  ]},
];

export default configMenu;
