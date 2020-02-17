import authorityList from "../../../../../services/authority_list/AuthorityList";

const fields = [
  {
    name: 'place',
    span: 24,
    type: 'input',
    required: true
  }, {
    name: 'other_url',
    label: 'Other URL',
    span: 24,
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
          searchValue: 'place',
          searchParam: 'place'
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
          searchValue: 'place'
        }]
      }
    ]
  }
];

export default fields;