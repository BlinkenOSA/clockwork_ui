import language from "../../../../../services/authority_list/Language";

const fields = [
  {
    name: 'name',
    span: 24,
    type: 'input',
    required: true
  }, {
    name: 'other_url',
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
            name: 'corporation_other_formats',
            span: 24,
            label: 'Other Forms of Name',
            type: 'many',
            elements: [
              {
                name: 'language',
                span: 8,
                type: 'remoteSelect',
                selectFunction: language.select,
                valueField: 'id',
                renderField: 'language',
                placeholder: '- Select Language -',
                label: 'disabled',
                required: true,
              }, {
                name: 'name',
                span: 14,
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
        elements: []
      }, {
        title: 'Wikipedia Link',
        type: 'tab',
        elements: []
      }
    ]
  }
];

export default fields;