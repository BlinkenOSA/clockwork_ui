import locale from "../../../../../services/controlled_list/Locale";
import archivalUnitTheme from "../../../../../services/controlled_list/ArchivalUnitTheme";

const fields = [
  {
    name: 'fonds',
    span: 4,
    type: 'input',
    label: 'Fonds',
    required: true,
  }, {
    name: 'title',
    span: 12,
    type: 'input',
    label: 'Title'
  }, {
    name: 'acronym',
    span: 8,
    type: 'input',
    label: 'Acronym'
  }, {
    name: 'level',
    span: 4,
    type: 'input',
    label: 'disabled',
    hidden: true
  }, {
    name: 'original_title',
    span: 12,
    type: 'input',
    label: 'Original Title',
  }, {
    name: 'locale',
    span: 8,
    type: 'remoteSelect',
    placeholder: '- Select Locale -',
    selectFunction: locale.select,
    valueField: 'id',
    renderField: 'locale_name',
  }, {
    name: 'theme',
    span: 24,
    type: 'remoteSelect',
    placeholder: '- Select Archival Unit Theme -',
    selectFunction: archivalUnitTheme.select,
    valueField: 'id',
    renderField: 'theme',
    mode: 'multiple'
  }
];

export default fields;