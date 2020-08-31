import primary_type from "../../../../services/controlled_list/PrimaryType";
import locale from "../../../../services/controlled_list/Locale";
import genre from "../../../../services/authority_list/Genre";
import date_type from "../../../../services/controlled_list/DateType";

const description_levels = [
  { id: 'L1', level: 'Level 1'},
  { id: 'L2', level: 'Level 2'},
];

const levels = [
  { id: 'F', level: 'Folder'},
  { id: 'I', level: 'Item'},
];

const basicMetadataTab = [
  {
    name: 'description_level',
    type: 'select',
    span: 6,
    placeholder: '- Select Description Level -',
    data: description_levels,
    valueField: 'id',
    renderField: 'level',
    required: true
  }, {
    name: 'folder_no',
    type: 'input',
    span: 6,
    label: 'Level 1 Number',
    disabled: true,
    required: true
  }, {
    name: 'level',
    type: 'select',
    span: 6,
    placeholder: '- Select Level -',
    data: levels,
    valueField: 'id',
    renderField: 'level',
    required: true
  }, {
    name: 'uuid',
    type: 'input',
    span: 6,
    label: 'UUID',
    disabled: true,
    required: true
  }, {
    name: 'legacy_id',
    type: 'input',
    span: 6,
    label: 'Legacy ID',
  }, {
    name: 'primary_type',
    span: 6,
    type: 'remoteSelect',
    placeholder: '- Select Primary Type -',
    selectFunction: primary_type.select,
    valueField: 'id',
    renderField: 'type',
    required: true
  }, {
    name: 'archival_reference_code',
    type: 'input',
    span: 6,
    label: 'Archival Reference Code',
    disabled: true,
  }, {
    name: 'original_locale',
    span: 6,
    type: 'remoteSelect',
    placeholder: '- Select Locale -',
    selectFunction: locale.select,
    valueField: 'id',
    renderField: 'locale_name',
  }, {
    name: 'title',
    type: 'input',
    span: 12,
    label: 'Title',
    required: true
  }, {
    name: 'title_original',
    localeLabel: 'original_locale',
    type: 'input',
    span: 12,
    label: 'Title - Original Language'
  }, {
    name: 'date_from',
    type: 'input',
    span: 12,
    label: 'Date From',
    required: true,
    help: 'Date format: YYYY, or YYYY-MM, or YYYY-MM-DD'
  }, {
    name: 'date_to',
    type: 'input',
    span: 8,
    label: 'Date To',
  }, {
    name: 'date_ca_span',
    type: 'input',
    span: 4,
    label: 'Date Ca. Span',
  }, {
    name: 'dates',
    type: 'many',
    label: 'Dates',
    elements: [
      {
        name: 'date_from',
        label: 'disabled',
        placeholder: 'Date From',
        span: 6,
        type: 'input'
      }, {
        name: 'date_to',
        label: 'disabled',
        placeholder: 'Date To',
        span: 6,
        type: 'input'
      }, {
        name: 'date_type',
        label: 'disabled',
        type: 'remoteSelect',
        span: 10,
        selectFunction: date_type.select,
        valueField: 'id',
        renderField: 'type',
        placeholder: '- Select Date Type -',
      }
    ]
  }, {
    name: 'contents_summary',
    label: 'Contents Summary',
    type: 'formattedText',
    span: 12
  }, {
    name: 'contents_summary_original',
    localeLabel: 'original_locale',
    label: 'Contents Summary - Original Language',
    type: 'formattedText',
    span: 12
  }, {
    name: 'digital_version_exists',
    label: 'Digital Version Exists',
    type: 'checkbox',
    span: 4
  }, {
    name: 'confidential',
    label: 'Confidential',
    type: 'checkbox',
    span: 4
  }, {
    name: 'confidential_display_text',
    type: 'input',
    span: 16,
    label: 'Confidential Display Text',
  }
];

const extraMetadataTab = [
  {
    name: 'genre',
    label: 'Genre',
    type: 'remoteSelect',
    mode: 'multiple',
    span: 12,
    selectFunction: genre.select,
    valueField: 'id',
    renderField: 'genre',
    placeholder: '- Select Genre -',
  }, {
    name: 'time_start',
    label: 'Time Start',
    type: 'input',
    help: 'Format: hh:mm:ss',
    span: 4
  }, {
    name: 'time_end',
    label: 'Time End',
    type: 'input',
    help: 'Format: hh:mm:ss',
    span: 4,
  }, {
    name: 'duration',
    label: 'Duration',
    type: 'input',
    span: 4,
    disabled: true
  }
];

const fields = [
  {
    type: 'tabs',
    elements: [
      {
        title: 'Basic Metadata',
        type: 'tab',
        elements: basicMetadataTab
      }, {
        title: 'Extra Metadata',
        type: 'tab',
        elements: extraMetadataTab
      }, {
        title: 'Contributors',
        type: 'tab',
        elements: []
      },  {
        title: 'Subjects',
        type: 'tab',
        elements: []
      }, {
        title: 'Notes',
        type: 'tab',
        elements: []
      }
    ]
  }
];

export default fields;
