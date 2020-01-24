import accession from '../../../../services/accession/Accession';
import archival_unit from '../../../../services/archival_unit/ArchivalUnit';
import building from "../../../../services/controlled_list/Building";
import donor from '../../../../services/donor/Donor';
import DonorFormFields from "../../../donor/DonorForm/DonorFormFields";

const fields = [
  {
    name: 'seq',
    span: 12,
    type: 'input',
    label: 'Accession Number',
    disabled: true,
  }, {
    name: 'donor',
    span: 12,
    type: 'remoteSelectWithEdit',
    placeholder: '- Select Donor -',
    selectFunction: donor.select,
    valueField: 'id',
    renderField: 'name',
    formFields: DonorFormFields,
    search: true
  }, {
    name: 'archival_unit',
    span: 24,
    type: 'remoteSelect',
    placeholder: '- Select Fonds -',
    selectFunction: archival_unit.selectFonds,
    valueField: 'id',
    renderField: 'title_full',
    search: true,
  }, {
    name: 'archival_unit_legacy_number',
    span: 8,
    type: 'input',
    label: 'Archival Unit Number (Legacy)',
    disabled: true,
  }, {
    name: 'archival_unit_legacy_name',
    span: 16,
    type: 'input',
    label: 'Archival Unit Name (Legacy)',
    disabled: true,
  }, {
    name: 'title',
    span: 24,
    type: 'input',
    required: true,
  }, {
    name: 'creation_date_from',
    span: 6,
    type: 'input',
  }, {
    name: 'creation_date_to',
    span: 6,
    type: 'input',
  }, {
    name: 'copyright_status',
    span: 12,
    type: 'remoteSelect',
    selectFunction: accession.selectCopyrightStatus,
    valueField: 'id',
    renderField: 'status',
    required: true,
  }, {
    name: 'transfer_date',
    span: 12,
    type: 'input',
    required: true,
    help: 'Date format: YYYY, or YYYY-MM, or YYYY-MM-DD',
  }, {
    name: 'custodial_history',
    span: 12,
    type: 'textarea',
    rows: 3
  }, {
    name: 'description',
    span: 24,
    type: 'textarea',
    rows: 3
  }, {
    name: 'items',
    span: 24,
    label: 'Items',
    type: 'many',
    elements: [
      {
        name: 'quantity',
        span: 4,
        label: 'disabled',
        type: 'input',
        placeholder: 'Quantity'
      }, {
        name: 'container',
        span: 8,
        label: 'disabled',
        type: 'input',
        placeholder: 'Container'
      }, {
        name: 'content',
        span: 10,
        label: 'disabled',
        type: 'input',
        placeholder: 'Content'
      }
    ]
  }, {
    type: 'column',
    span: 12,
    elements: [
      {
        name: 'method',
        type: 'remoteSelect',
        selectFunction: accession.selectAccessionMethod,
        valueField: 'id',
        renderField: 'method',
        required: true,
      }, {
        name: 'access_note',
        type: 'textarea',
        rows: 5
      }
    ]
  }, {
    type: 'column',
    span: 12,
    elements: [
      {
        name: 'copyright_note',
        type: 'textarea',
        rows: 3
      }, {
        name: 'note',
        type: 'textarea',
        rows: 3
      }
    ]
  }, {
    name: 'building',
    type: 'remoteSelect',
    required: true,
    selectFunction: building.select,
    valueField: 'id',
    renderField: 'building',
    span: 8
  }, {
    name: 'module',
    type: 'input',
    span: 4
  }, {
    name: 'row',
    type: 'input',
    span: 4
  }, {
    name: 'section',
    type: 'input',
    span: 4
  }, {
    name: 'shelf',
    type: 'input',
    span: 4
  }
];

export default fields;