import {ACCESSION_EDIT, ACCESSION_LIST, ACCESSION_VIEW} from "./config-urls";

const breadcrumbs = [
  { path: ACCESSION_LIST, breadcrumbs: [
    { text: 'Accession Records', icon: 'swap' }
  ]},
  { path: ACCESSION_VIEW, breadcrumbs: [
    { text: 'Accession Records', link: ACCESSION_LIST, icon: 'swap' },
    { text: 'View Accession Record'}
  ]},
  { path: ACCESSION_EDIT, breadcrumbs: [
      { text: 'Accession Records', link: ACCESSION_LIST, icon: 'swap' },
      { text: 'Edit Accession Record'}
    ]},
];

export default breadcrumbs;