import authorityList from "../../../../../services/authority_list/AuthorityList";

const fields = [
  {
    name: 'subject',
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
        title: 'Authority Link (LCSH)',
        type: 'tab',
        elements: [{
          type: 'authority',
          label: 'Authority URL',
          name: 'authority_url',
          api: authorityList.lcsh,
          tableColumnTitle: 'LCHS ID',
          tableColumnField: 'lcsh_id',
          searchValue: 'subject',
          searchParam: 'subject'
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
          searchValue: 'subject'
        }]
      }
    ]
  }
];

export default fields;