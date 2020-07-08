import carrier_type from "../../../../services/controlled_list/CarrierType";

const fields = [
  {
    name: 'container_no',
    type: 'input',
    disabled: true,
    label: 'Container No.'
  }, {
    name: 'carrier_type',
    type: 'remoteSelect',
    selectFunction: carrier_type.select,
    valueField: 'id',
    renderField: 'type',
    placeholder: '- Select Carrier Type -',
    required: true
  }, {
    name: 'legacy_id',
    label: 'Legacy ID',
    type: 'input',
  }, {
    name: 'container_label',
    type: 'input',
  }, {
    name: 'digital_version_exists',
    type: 'checkbox'
  }, {
    name: 'digital_version_creation_date',
    type: 'input',
    disabled: true
  }
];

export default fields;
