import authorityList from "../../../../services/AuthorityList";

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
  }, {
    name: 'phone',
    span: 12,
    type: 'input',
  }, {
    name: 'country',
    span: 12,
    type: 'remoteSelect',
    placeholder: '- Select Country -',
    selectFunction: authorityList.selectCountry,
    valueField: 'id',
    renderField: 'country',
    search: true
  }, {
    name: 'fax',
    span: 12,
    type: 'input',
  }, {
    name: 'city',
    span: 12,
    type: 'input',
  }, {
    name: 'email',
    span: 12,
    type: 'input',
  }, {
    name: 'address',
    span: 12,
    type: 'input',
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