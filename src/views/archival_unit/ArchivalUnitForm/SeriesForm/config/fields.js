import locale from "../../../../../services/controlled_list/Locale";
import archivalUnitTheme from "../../../../../services/controlled_list/ArchivalUnitTheme";

const fields = [
  {
    name: 'fonds',
    span: 4,
    type: 'input',
    label: 'Fonds',
    disabled: true,
  }, {
    name: 'fonds_title',
    span: 12,
    type: 'input',
    label: 'Fonds Title',
    disabled: true,
  }, {
    name: 'fonds_acronym',
    span: 8,
    type: 'input',
    label: 'Fonds Acronym',
    disabled: true,
  }, {
    name: 'subfonds',
    span: 4,
    type: 'input',
    label: 'Subfonds',
    disabled: true,
  }, {
    name: 'subfonds_title',
    span: 12,
    type: 'input',
    label: 'Subfonds Title',
    disabled: true,
  }, {
    name: 'subfonds_acronym',
    span: 8,
    type: 'input',
    label: 'Subfonds Acronym',
    disabled: true,
  }, {
    name: 'series',
    span: 4,
    type: 'input',
    label: 'Series',
    required: true,
  }, {
    name: 'title',
    span: 12,
    type: 'input',
    label: 'Title',
  }, {
    name: 'acronym',
    span: 8,
    type: 'input',
    label: 'Acronym',
  }, {
    name: 'level',
    span: 4,
    type: 'input',
    label: 'disabled',
    hidden: true
  }, {
    name: 'title_original',
    span: 12,
    type: 'input',
    label: 'Original Title',
  }, {
    name: 'original_locale',
    span: 8,
    type: 'remoteSelect',
    placeholder: '- Select Locale -',
    selectFunction: locale.select,
    valueField: 'id',
    renderField: 'locale_name',
    search: true,
  }, {
    name: 'theme',
    span: 24,
    type: 'remoteSelect',
    placeholder: '- Select Archival Unit Theme -',
    selectFunction: archivalUnitTheme.select,
    valueField: 'id',
    renderField: 'theme',
    mode: 'multiple'
  }, {
    name: 'parent',
    type: 'input',
    label: 'disabled',
    hidden: true,
  },
];

export default fields;
