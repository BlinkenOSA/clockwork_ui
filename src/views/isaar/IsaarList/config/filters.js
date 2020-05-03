const types = [
  { id: 'P', type: 'Personal'},
  { id: 'C', type: 'Corporate Body'},
  { id: 'F', type: 'Family'}
];

const statuses = [
  { id: '1', status: 'draft'},
  { id: '2', status: 'final'}
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
