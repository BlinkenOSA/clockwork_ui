import language from "../../../../../services/authority_list/Language";
import authorityList from "../../../../../services/authority_list/AuthorityList";

const fields = [
  {
    name: 'first_name',
    span: 12,
    type: 'input',
    required: true
  }, {
    name: 'last_name',
    span: 12,
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
        title: 'Other Forms of Name',
        type: 'tab',
        span: 24,
        elements: [
          {
            name: 'person_other_formats',
            span: 24,
            label: 'Other Forms of Name',
            type: 'many',
            elements: [
              {
                name: 'language',
                span: 6,
                type: 'remoteSelect',
                selectFunction: language.select,
                valueField: 'id',
                renderField: 'language',
                placeholder: '- Select Language -',
                label: 'disabled',
                required: true
              }, {
                name: 'first_name',
                span: 8,
                type: 'input',
                label: 'disabled',
                required: true,
                placeholder: 'Name'
              }, {
                name: 'last_name',
                span: 8,
                type: 'input',
                label: 'disabled',
                required: true,
                placeholder: 'Name'
              }
            ]
          }
        ]
      }, {
        title: 'Authority Link (VIAF)',
        type: 'tab',
        elements: [{
          type: 'authority',
          label: 'Authority URL',
          name: 'authority_url',
          api: authorityList.viaf,
          tableColumnTitle: 'VIAF ID',
          tableColumnField: 'viaf_id',
          searchValue: 'last_name',
          searchParam: 'person'
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
          searchValue: 'last_name'
        }]
      }
    ]
  }
];

export default fields;