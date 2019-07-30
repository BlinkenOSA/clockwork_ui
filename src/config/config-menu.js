const configMenu = [
  {name: 'Dashboard', icon: 'dashboard'},
  {name: 'Accession', icon: 'swap', submenu: [
      {name: 'Accession Records'},
      {name: 'Donors'},
  ]},
  {name: 'Archival Unit', icon: 'apartment'},
  {name: 'ISAAR-CPF', icon: 'user'},
  {name: 'ISAD(G)', icon: 'profile'},
  {name: 'Finding Aids', icon: 'file', submenu: [
      {name: 'Folders / Items'},
      {name: 'Organizer'},
  ]},
  {name: 'Lists', icon: 'unordered-list', submenu: [
      {name: 'Authority List', submenu: [
          {name: 'Corporations', icon: 'bank'},
          {name: 'Countries', icon: 'flag'},
          {name: 'Genres', icon: 'deployment-unit'},
          {name: 'Languages', icon: 'global'},
          {name: 'People', icon: 'team'},
          {name: 'Places', icon: 'environment'},
          {name: 'Subjects', icon: 'tag'},
      ]},
      {name: 'Controlled List', submenu: [
          {name: 'Access Rights', icon: 'right-circle'},
          {name: 'Archival Unit Themes', icon: 'right-circle'},
          {name: 'Building', icon: 'right-circle'},
          {name: 'Carrier Types', icon: 'right-circle'},
          {name: 'Corporation Roles', icon: 'right-circle'},
          {name: 'Date Types', icon: 'right-circle'},
          {name: 'Extent Units', icon: 'right-circle'},
          {name: 'Geo Roles', icon: 'right-circle'},
          {name: 'Keyword', icon: 'right-circle'},
          {name: 'Language Usages', icon: 'right-circle'},
          {name: 'Person Roles', icon: 'right-circle'},
          {name: 'Primary Types', icon: 'right-circle'},
          {name: 'Reproduction Rights', icon: 'right-circle'},
          {name: 'Restriction Reasons', icon: 'right-circle'},
      ]},
  ]},
  {name: 'MLR', icon: 'inbox'},
  {name: 'Digitization', icon: 'desktop', submenu: [
      {name: 'Digitization Log'},
      {name: 'Digitization Plan'},
  ]},
];

export default configMenu;