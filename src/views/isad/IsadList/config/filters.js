const statuses = [
  { id: '1', status: 'published'},
  { id: '2', status: 'draft'},
  { id: '3', status: 'not exists'}
];

const filters = [
  // Row 1
  [
    {
      type: 'search',
      span: 10,
      placeholder: 'Search...'
    }, {
      type: 'number',
      span: 7,
      filterParam: 'fonds',
      placeholder: 'Filter by Fonds'
    }, {
      type: 'select',
      span: 7,
      filterParam: 'status',
      filterKey: 'status',
      filterValue: 'status',
      data: statuses,
      placeholder: 'Filter by Status'
    },
  ]
];

export default filters;
