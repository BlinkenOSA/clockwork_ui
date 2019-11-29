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
      filterParam: 'transfer_year',
      data: Array(new Date().getFullYear()+1 - 1995).fill().map((_, idx) => 1995 + idx),
      placeholder: 'Filter by Transfer Year'
    }, {
      type: 'number',
      span: 7,
      filterParam: 'fonds',
      placeholder: 'Filter by Fonds'
    }
  ]
];

export default filters;