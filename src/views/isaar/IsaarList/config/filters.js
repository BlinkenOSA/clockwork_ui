const types = [
  { id: 'P', type: 'Personal'},
  { id: 'C', type: 'Corporate Body'}
];

const statuses = [
  { id: '1', status: 'Draft'},
  { id: '2', status: 'Final'}
];

const filters = [
  // Row 1
  [
    {
      type: 'search',
      span: 10,
      placeholder: 'Search...'
    }, {
      type: 'select',
      span: 7,
      filterParam: 'type',
      filterKey: 'id',
      filterValue: 'type',
      data: types,
      placeholder: 'Filter by Type',
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