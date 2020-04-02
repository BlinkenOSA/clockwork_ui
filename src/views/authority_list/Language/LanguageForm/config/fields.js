const fields = [
  {
    name: 'country',
    span: 8,
    type: 'input',
    required: true
  }, {
    name: 'iso_639_1',
    label: 'ISO 639 1',
    span: 8,
    type: 'input',
  }, {
    name: 'iso_639_2',
    label: 'ISO 639 2',
    span: 8,
    type: 'input',
  }, {
    name: 'authority_url',
    label: 'Authority URL',
    span: 12,
    type: 'input',
    required: false
  }, {
    name: 'wiki_url',
    label: 'Wikipedia URL',
    span: 12,
    type: 'input',
    required: false
  },
];

export default fields;