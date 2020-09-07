import primary_type from "../../../../services/controlled_list/PrimaryType";
import locale from "../../../../services/controlled_list/Locale";
import genre from "../../../../services/authority_list/Genre";
import date_type from "../../../../services/controlled_list/DateType";
import language from "../../../../services/authority_list/Language";
import language_usage from "../../../../services/controlled_list/LanguageUsage";
import extent_unit from "../../../../services/controlled_list/ExtentUnit";
import person from "../../../../services/authority_list/Person";
import person_role from "../../../../services/controlled_list/PersonRole";
import PersonForm from "../../../authority_list/Person/PersonForm/PersonForm";
import PersonRoleForm from "../../../controlled_list/PersonRole/PersonRoleForm/PersonRoleForm";
import CorporationForm from "../../../authority_list/Corporation/CorporationForm/CorporationForm";
import corporation from "../../../../services/authority_list/Corporation";
import corporation_role from "../../../../services/controlled_list/CorporationRole";
import CorporationRoleForm from "../../../controlled_list/CorporationRole/CorporationRoleForm/CorporationRoleForm";
import place from "../../../../services/authority_list/Place";
import geo_role from "../../../../services/controlled_list/GeoRole";
import PlaceForm from "../../../authority_list/Place/PlaceForm/PlaceForm";
import GeoRoleForm from "../../../controlled_list/GeoRole/GeoRoleForm/GeoRoleForm";
import country from "../../../../services/authority_list/Country";
import CountryForm from "../../../authority_list/Country/CountryForm/CountryForm";

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
  }, {
    name: 'physical_condition',
    label: 'Physical Condition',
    type: 'formattedText',
    span: 24
  }, {
    name: 'physical_description',
    label: 'Physical Description',
    type: 'formattedText',
    span: 12
  }, {
    name: 'physical_description_original',
    localeLabel: 'original_locale',
    label: 'Physical Description - Original Language',
    type: 'formattedText',
    span: 12
  }, {
    name: 'languges',
    type: 'many',
    label: 'Languages',
    elements: [
      {
        name: 'language',
        label: 'disabled',
        type: 'remoteSelect',
        span: 12,
        selectFunction: language.select,
        valueField: 'id',
        renderField: 'language',
        placeholder: '- Select Language -',
      }, {
        name: 'language_usage',
        label: 'disabled',
        type: 'remoteSelect',
        span: 10,
        selectFunction: language_usage.select,
        valueField: 'id',
        renderField: 'usage',
        placeholder: '- Select Language Use -',
      }
    ]
  }, {
    name: 'language_statement',
    label: 'Language Statement',
    type: 'formattedText',
    span: 12
  }, {
    name: 'language_statement_original',
    localeLabel: 'original_locale',
    label: 'Language Statement - Original Language',
    type: 'formattedText',
    span: 12
  }, {
    name: 'extents',
    type: 'many',
    label: 'Extents',
    elements: [
      {
        name: 'extent',
        label: 'disabled',
        type: 'input',
        span: 12,
      }, {
        name: 'language_usage',
        label: 'disabled',
        type: 'remoteSelect',
        span: 10,
        selectFunction: extent_unit.select,
        valueField: 'id',
        renderField: 'unit',
        placeholder: '- Select Extent Unit -',
      }
    ]
  },
];

const contributorsTab = [
  {
    name: 'associated_people',
    type: 'many',
    label: 'Contributors (People)',
    elements: [
      {
        name: 'associated_person',
        label: 'disabled',
        type: 'remoteSelectWithEdit',
        span: 12,
        selectFunction: person.select,
        formFields: PersonForm,
        valueField: 'id',
        renderField: 'name',
        placeholder: '- Select Person -',
      }, {
        name: 'role',
        label: 'disabled',
        type: 'remoteSelectWithEdit',
        span: 10,
        selectFunction: person_role.select,
        formFields: PersonRoleForm,
        valueField: 'id',
        renderField: 'role',
        placeholder: '- Select Role -',
      }
    ]
  }, {
    name: 'associated_corporation',
    type: 'many',
    label: 'Contributors (Corporation)',
    elements: [
      {
        name: 'associated_corporation',
        label: 'disabled',
        type: 'remoteSelectWithEdit',
        span: 12,
        selectFunction: corporation.select,
        formFields: CorporationForm,
        valueField: 'id',
        renderField: 'name',
        placeholder: '- Select Corporation -',
      }, {
        name: 'role',
        label: 'disabled',
        type: 'remoteSelectWithEdit',
        span: 10,
        selectFunction: corporation_role.select,
        formFields: CorporationRoleForm,
        valueField: 'id',
        renderField: 'role',
        placeholder: '- Select Role -',
      }
    ]
  }, {
    name: 'associated_places',
    type: 'many',
    label: 'Additional Places',
    elements: [
      {
        name: 'associated_place',
        label: 'disabled',
        type: 'remoteSelectWithEdit',
        span: 12,
        selectFunction: place.select,
        formFields: PlaceForm,
        valueField: 'id',
        renderField: 'place',
        placeholder: '- Select Place -',
      }, {
        name: 'role',
        label: 'disabled',
        type: 'remoteSelectWithEdit',
        span: 10,
        selectFunction: geo_role.select,
        formFields: GeoRoleForm,
        valueField: 'id',
        renderField: 'role',
        placeholder: '- Select Role -',
      }
    ]
  }, {
    name: 'associated_countries',
    type: 'many',
    label: 'Additional Country',
    elements: [
      {
        name: 'associated_country',
        label: 'disabled',
        type: 'remoteSelectWithEdit',
        span: 12,
        selectFunction: country.select,
        formFields: CountryForm,
        valueField: 'id',
        renderField: 'country',
        placeholder: '- Select Country -',
      }, {
        name: 'role',
        label: 'disabled',
        type: 'remoteSelectWithEdit',
        span: 10,
        selectFunction: geo_role.select,
        formFields: GeoRoleForm,
        valueField: 'id',
        renderField: 'role',
        placeholder: '- Select Role -',
      }
    ]
  }
];

const subjectsTab = [
  {
    name: 'spatial_coverage_country',
    type: 'remoteSelect',
    label: 'Spatial Coverage (Countries)',
    selectFunction: country.select,
    valueField: 'id',
    renderField: 'country',
    span: 12,
    placeholder: '- Select Country -',
    mode: 'multiple',
  }, {
    name: 'spatial_coverage_place',
    type: 'remoteSelect',
    label: 'Spatial Coverage (Places)',
    selectFunction: place.select,
    valueField: 'id',
    renderField: 'place',
    span: 12,
    placeholder: '- Select Place -',
    mode: 'multiple',
  }, {
    name: 'subject_people',
    label: 'Subject (People)',
    type: 'remoteSelect',
    span: 12,
    selectFunction: person.select,
    formFields: PersonForm,
    valueField: 'id',
    renderField: 'name',
    placeholder: '- Select Person -',
    mode: 'multiple',
  }, {
    name: 'subject_corporation',
    label: 'Subject (Corporations)',
    type: 'remoteSelect',
    span: 12,
    selectFunction: corporation.select,
    formFields: CorporationForm,
    valueField: 'id',
    renderField: 'name',
    placeholder: '- Select Corporation -',
    mode: 'multiple',
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
        elements: contributorsTab
      },  {
        title: 'Subjects',
        type: 'tab',
        elements: subjectsTab
      }, {
        title: 'Notes',
        type: 'tab',
        elements: []
      }
    ]
  }
];

export default fields;
