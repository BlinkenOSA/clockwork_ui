import authorityList from "../../../../../services/authority_list/AuthorityList";

const fields = [
  {
    name: 'country',
    span: 8,
    type: 'input',
    required: true
  }, {
    name: 'alpha2',
    label: 'Alpha 2',
    span: 8,
    type: 'input',
  }, {
    name: 'alpha3',
    label: 'Alpha 3',
    span: 8,
    type: 'input',
    required: true
  }, {
    type: 'tabs',
    elements: [
      {
        title: 'Authority Link (VIAF)',
        type: 'tab',
        elements: [{
          type: 'authority',
          label: 'Authority URL',
          name: 'authority_url',
          api: authorityList.viaf,
          tableColumnTitle: 'VIAF ID',
          tableColumnField: 'viaf_id',
          searchValue: 'country',
          searchParam: 'country'
        }]
      }, {
        title: 'Wikipedia Link',
        type: 'tab',
        elements: [{
          type: 'authority',
          label: 'Wikipedia URL',
          name: 'wiki_url',
          api: authorityList.wikipedia,
          tableColumnTitle: 'Wikipedia URL',
          tableColumnField: 'url',
          searchValue: 'country'
        }]
      }
    ]
  }
];

export default fields;