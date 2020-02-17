import country from "../../../../services/authority_list/Country";

const fields = [
  {
    name: 'name',
    span: 24,
    type: 'input',
    disabled: true,
  }, {
    name: 'first_name',
    span: 8,
    type: 'input',
    validate: ''
  }, {
    name: 'middle_name',
    span: 8,
    type: 'input',
  }, {
    name: 'last_name',
    span: 8,
    type: 'input',
  }, {
    name: 'corporation_name',
    span: 24,
    type: 'input',
  }, {
    name: 'extra_info',
    span: 24,
    type: 'input',
    label: 'Additional Information'
  }, {
    name: 'postal_code',
    span: 12,
    type: 'input',
    required: true
  }, {
    name: 'phone',
    span: 12,
    type: 'input',
  }, {
    name: 'country',
    span: 12,
    type: 'remoteSelect',
    placeholder: '- Select Country -',
    selectFunction: country.select,
    valueField: 'id',
    renderField: 'country',
    search: true,
    required: true
  }, {
    name: 'fax',
    span: 12,
    type: 'input',
  }, {
    name: 'city',
    span: 12,
    type: 'input',
    required: true
  }, {
    name: 'email',
    span: 12,
    type: 'input',
  }, {
    name: 'address',
    span: 12,
    type: 'input',
    required: true
  }, {
    name: 'website',
    span: 12,
    type: 'input',
  }, {
    name: 'note',
    span: 24,
    type: 'textarea',
    rows: 5
  }
];

export default fields;