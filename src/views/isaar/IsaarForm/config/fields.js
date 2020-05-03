import language from "../../../../services/authority_list/Language";

const types = [
  { id: 'P', type: 'Personal'},
  { id: 'C', type: 'Corporate Body'},
  { id: 'F', type: 'Family'}
];

const requiredValuesTab = [
  {
    name: 'name',
    label: 'Authorized forms of name',
    span: 12,
    type: 'input',
    required: true,
  }, {
    name: 'type',
    span: 12,
    type: 'select',
    placeholder: '- Select Type -',
    data: types,
    valueField: 'id',
    renderField: 'type',
    required: true
  }, {
    name: 'date_existence_from',
    label: 'Date existence from',
    span: 12,
    type: 'input',
    required: true,
    help: 'Date format: YYYY, or YYYY-MM, or YYYY-MM-DD'
  }, {
    name: 'date_existence_to',
    label: 'Date existence to',
    span: 12,
    type: 'input'
  }
];

const identityTab = [
  {
    name: 'parallel_names',
    type: 'many',
    label: 'Parallel form(s) of name',
    elements: [
      {
        name: 'name',
        label: 'disabled',
        placeholder: 'Parallel form of name',
        span: 22,
        type: 'input'
      }
    ]
  }, {
    name: 'other_names',
    type: 'many',
    label: 'Other forms of name',
    elements: [
      {
        name: 'name',
        label: 'disabled',
        placeholder: 'Other form of name',
        span: 10,
        type: 'input'
      }, {
        name: 'year_from',
        label: 'disabled',
        placeholder: 'Year from',
        span: 4,
        type: 'input'
      }, {
        name: 'year_to',
        label: 'disabled',
        placeholder: 'Year to',
        span: 4,
        type: 'input'
      }, {
        name: 'relationship',
        label: 'disabled',
        type: 'select',
        span: 4,
        placeholder: '- Select relationship -',
        data: types,
        valueField: 'id',
        renderField: 'type',
      }
    ]
  }, {
    name: 'standardized_names',
    type: 'many',
    label: 'Standardized forms of name according to other rules',
    elements: [
      {
        name: 'name',
        type: 'input',
        label: 'disabled',
        placeholder: 'Standardized form of name',
        span: 12
      }, {
        name: 'standard',
        type: 'input',
        label: 'disabled',
        placeholder: 'Standard',
        span: 10
      }
    ]
  }, {
    name: 'corporate_body_identifiers',
    type: 'many',
    label: 'Identifiers for corporate bodies',
    elements: [
      {
        name: 'identifier',
        type: 'input',
        label: 'disabled',
        placeholder: 'Corporate body identifier',
        span: 12
      }, {
        name: 'rule',
        type: 'input',
        label: 'disabled',
        placeholder: 'Rule',
        span: 10
      }
    ]
  }
];

const descriptionTab = [
  {
    name: 'places',
    type: 'many',
    label: 'Places',
    elements: [
      {
        name: 'place',
        type: 'input',
        label: 'disabled',
        placeholder: 'Place',
        span: 6
      }, {
        name: 'year_from',
        type: 'input',
        label: 'disabled',
        placeholder: 'Year from',
        span: 4
      }, {
        name: 'year_to',
        type: 'input',
        label: 'disabled',
        placeholder: 'Year to',
        span: 4
      }, {
        name: 'place_qualifier',
        type: 'select',
        data: [],
        valueField: 'id',
        renderField: 'qualifier',
        label: 'disabled',
        placeholder: '- Select Qualifier -',
        span: 8
      }
    ]
  }, {
    type: 'column',
    span: 12,
    elements: [
      {
        name: 'function',
        type: 'formattedText',
        height: 200
      }, {
        name: 'legal_status',
        type: 'input'
      }, {
        name: 'general_context',
        type: 'formattedText',
        height: 200
      }
    ]
  }, {
    type: 'column',
    span: 12,
    elements: [
      {
        name: 'history',
        type: 'formattedText',
      }, {
        name: 'mandate',
        type: 'formattedText',
      }, {
        name: 'internal_structure',
        type: 'formattedText',
      }
    ]
  }
];

const controlTab = [
  {
    type: 'column',
    span: 12,
    elements: [
      {
        name: 'institution_identifier',
        type: 'input',
        disabled: true
      }, {
        name: 'old_id',
        type: 'input',
        label: 'Authority record identifier'
      }, {
        name: 'language',
        type: 'remoteSelect',
        selectFunction: language.select,
        valueField: 'id',
        renderField: 'language',
        placeholder: '- Select Language -',
        mode: 'multiple',
      }, {
        name: 'level_of_detail',
        type: 'input',
        disabled: true,
      }, {
        name: 'status',
        type: 'input',
        disabled: true
      }
    ]
  }, {
    type: 'column',
    span: 12,
    elements: [
      {
        name: 'convention',
        type: 'textarea',
      }, {
        name: 'source',
        type: 'textarea',
      }, {
        name: 'internal_note',
        type: 'textarea',
      }
    ]
  }
];

const fields = [
  {
    type: 'tabs',
    elements: [
      {
        title: 'Required Values',
        type: 'tab',
        elements: requiredValuesTab
      }, {
        title: 'Identity',
        type: 'tab',
        elements: identityTab
      }, {
        title: 'Description',
        type: 'tab',
        elements: descriptionTab
      }, {
        title: 'Control',
        type: 'tab',
        elements: controlTab
      }
    ]
  }
];

export default fields;
