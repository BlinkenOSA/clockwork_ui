import locale from "../../../../services/controlled_list/Locale";
import language from "../../../../services/authority_list/Language";
import isaar from "../../../../services/isaar/Isaar";
import accessRights from "../../../../services/controlled_list/AccessRights";
import reproductionRights from "../../../../services/controlled_list/ReproductionRights";

import IsaarFormFields from "../../../isaar/IsaarForm/IsaarFormFields";
import restriction_reason from "../../../../services/controlled_list/RestrictionReason";
import extent_unit from "../../../../services/controlled_list/ExtentUnit";

const levels = [
  { id: 'F', level: 'Fonds'},
  { id: 'SF', level: 'Subfonds'},
  { id: 'S', level: 'Series'}
];

const accruals = [
  { id: true, accrual: 'Expected'},
  { id: false, accrual: 'Not Expected'},
];

const requiredValuesTab = [
  {
    name: 'reference_code',
    label: 'Reference code',
    span: 4,
    type: 'input',
    required: true,
    disabled: true,
  }, {
    name: 'title',
    label: 'Title',
    span: 20,
    type: 'input',
    required: true,
    disabled: true,
  }, {
    name: 'year_from',
    label: 'Date (From)',
    span: 4,
    type: 'input',
    required: true,
    help: 'Date format: YYYY'
  }, {
    name: 'year_to',
    label: 'Date (To)',
    span: 4,
    type: 'input',
    help: 'Date format: YYYY'
  }, {
    name: 'description_level',
    type: 'select',
    span: 8,
    placeholder: '- Select Level -',
    data: levels,
    disabled: true,
    valueField: 'id',
    renderField: 'level',
  },{
    name: 'original_locale',
    span: 8,
    type: 'remoteSelect',
    placeholder: '- Select Locale -',
    selectFunction: locale.select,
    valueField: 'id',
    renderField: 'locale_name',
  }, {
    type: 'column',
    span: 12,
    elements: [{
      name: 'creators',
      type: 'many',
      label: 'Creators',
      elements: [
        {
          name: 'name',
          label: 'disabled',
          placeholder: 'Creator',
          span: 20,
          type: 'input'
        }
      ]
    }]
  }, {
    type: 'column',
    span: 12,
    elements: [
      {
        name: 'isaar',
        type: 'remoteSelectWithEdit',
        label: 'ISAAR',
        placeholder: '- Select ISAAR-CPF -',
        selectFunction: isaar.select,
        valueField: 'id',
        renderField: 'name',
        formFields: IsaarFormFields,
        search: true
      }, {
        name: 'language',
        type: 'remoteSelect',
        selectFunction: language.select,
        valueField: 'id',
        renderField: 'language',
        placeholder: '- Select Language -',
        mode: 'multiple',
      }
    ]
  }, {
    name: 'access_rights',
    type: 'remoteSelect',
    label: 'Access Rights',
    span: 12,
    placeholder: '- Select Access Rights -',
    selectFunction: accessRights.select,
    valueField: 'id',
    renderField: 'statement',
    search: true
  }, {
    name: 'reproduction_rights',
    type: 'remoteSelect',
    label: 'Reproduction Rights',
    span: 12,
    placeholder: '- Select Reproduction Rights -',
    selectFunction: reproductionRights.select,
    valueField: 'id',
    renderField: 'statement',
    search: true
  }, {
    name: 'access_rights_legacy',
    label: 'Access Rights (Legacy)',
    type: 'textarea',
    span: 12,
    disabled: true
  }, {
    name: 'reproduction_rights_legacy',
    label: 'Reproduction Rights (Legacy)',
    type: 'textarea',
    span: 12,
    disabled: true
  }, {
    name: 'accruals',
    type: 'select',
    span: 12,
    placeholder: '- Select Accrual -',
    data: accruals,
    valueField: 'id',
    renderField: 'accrual',
  }, {
    name: 'rights_restriction_reason',
    type: 'remoteSelect',
    label: 'Rights Restriction Reason',
    span: 12,
    placeholder: '- Select Reason -',
    selectFunction: restriction_reason.select,
    valueField: 'id',
    renderField: 'reason',
    search: true
  }
];

const identityTab = [
  {
    name: 'date_predominant',
    label: 'Predominant Date',
    span: 24,
    type: 'input'
  }, {
    name: 'extents',
    type: 'many',
    label: 'Extent of the unit of description',
    elements: [
      {
        name: 'extent_number',
        label: 'disabled',
        placeholder: 'Extent Number',
        span: 8,
        type: 'input'
      }, {
        name: 'extent_unit',
        label: 'disabled',
        type: 'remoteSelect',
        span: 8,
        selectFunction: extent_unit.select,
        valueField: 'id',
        renderField: 'unit',
        placeholder: '- Select Extent Unit -',
      }, {
        name: 'approx',
        placeholder: 'Approx.',
        label: 'disabled',
        caption: 'Approx.',
        span: 6,
        type: 'checkbox'
      }
    ]
  }, {
    name: 'carrier_estimated',
    label: 'Estimated Amount of Carriers',
    type: 'textarea',
    span: 12,
  }, {
    name: 'carrier_estimated_original',
    localeLabel: 'original_locale',
    label: 'Estimated Amount of Carriers - Original Language',
    type: 'textarea',
    span: 12,
  },
];

const contextTab = [
  {
    name: 'administrative_history',
    type: 'formattedText',
    span: 12,
  }, {
    name: 'administrative_history_original',
    localeLabel: 'original_locale',
    label: 'Administrative History - Original Language',
    type: 'formattedText',
    span: 12,
  }, {
    name: 'archival_history',
    type: 'formattedText',
    span: 12,
  }, {
    name: 'archival_history_original',
    localeLabel: 'original_locale',
    label: 'Archival History - Original Language',
    type: 'formattedText',
    span: 12,
  },
];

const contentTab = [
  {
    name: 'scope_and_content_abstract',
    label: 'Scope and Content (Abstract)',
    type: 'formattedText',
    span: 12,
  }, {
    name: 'scope_and_content_abstract_original',
    localeLabel: 'original_locale',
    label: 'Scope and Content (Abstract) - Original Language',
    type: 'formattedText',
    span: 12,
  }, {
    name: 'scope_and_content_narrative',
    label: 'Scope and Content (Narrative)',
    type: 'formattedText',
    span: 12,
  }, {
    name: 'scope_and_content_narrative_original',
    localeLabel: 'original_locale',
    label: 'Scope and Content (Narrative) - Original Language',
    type: 'formattedText',
    span: 12,
  }, {
    name: 'appraisal',
    label: 'Appraisal',
    type: 'formattedText',
    span: 12,
  }, {
    name: 'appraisal_original',
    localeLabel: 'original_locale',
    label: 'Appraisal - Original Language',
    type: 'formattedText',
    span: 12,
  }, {
    name: 'system_of_arrangement_information',
    label: 'System of Arrangement',
    type: 'formattedText',
    span: 12,
  }, {
    name: 'system_of_arrangement_information_original',
    localeLabel: 'original_locale',
    label: 'System of Arrangement - Original Language',
    type: 'formattedText',
    span: 12,
  },
];

const accessAndUseTab = [
  {
    name: 'embargo',
    type: 'input',
    help: 'Date format: YYYY, or YYYY-MM, or YYYY-MM-DD',
  }, {
    name: 'physical_characteristics',
    type: 'formattedText',
    span: 12
  }, {
    name: 'physical_characteristics_original',
    localeLabel: 'original_locale',
    label: 'Physical Characteristics - Original Language',
    type: 'formattedText',
    span: 12
  }, {
    name: 'related_finding_aids',
    span: 24,
    type: 'many',
    label: 'Related Finding Aids',
    elements: [
      {
        name: 'url',
        span: 12,
        label: 'disabled',
        type: 'input',
        placeholder: 'URL'
      }, {
        name: 'info',
        span: 10,
        label: 'disabled',
        type: 'input',
        placeholder: 'Info'
      }
    ]
  },
];

const alliedMaterialsTab = [
  {
    name: 'location_of_originals',
    span: 24,
    type: 'many',
    label: 'Location of Originals',
    elements: [
      {
        name: 'url',
        span: 12,
        label: 'disabled',
        type: 'input',
        placeholder: 'URL'
      }, {
        name: 'info',
        span: 10,
        label: 'disabled',
        type: 'input',
        placeholder: 'Info'
      }
    ]
  }, {
    name: 'location_of_copies',
    span: 24,
    type: 'many',
    label: 'Location of Copies',
    elements: [
      {
        name: 'url',
        span: 12,
        label: 'disabled',
        type: 'input',
        placeholder: 'URL'
      }, {
        name: 'info',
        span: 10,
        label: 'disabled',
        type: 'input',
        placeholder: 'Info'
      }
    ]
  }, {
    name: 'publication_note',
    type: 'textarea',
    span: 12,
  }, {
    name: 'publication_note_original',
    localeLabel: 'original_locale',
    label: 'Publication Note - Original Language',
    type: 'textarea',
    span: 12,
  },
];

const notesTab = [
  {
    name: 'note',
    type: 'textarea',
    span: 12,
  }, {
    name: 'note - original',
    localeLabel: 'original_locale',
    label: 'Note - Original Language',
    type: 'textarea',
    span: 12,
  }, {
    name: 'internal_note',
    type: 'textarea',
    span: 12,
  }, {
    name: 'internal_note',
    localeLabel: 'original_locale',
    label: 'Internal Note - Original Language',
    type: 'textarea',
    span: 12,
  }, {
    name: 'archivists_note',
    type: 'textarea',
    span: 12,
  }, {
    name: 'archivists_note_original',
    localeLabel: 'original_locale',
    label: 'Archivists Note - Original Language',
    type: 'textarea',
    span: 12,
  }, {
    name: 'rules_conventions',
    label: 'Rules and Conventions',
    type: 'textarea',
    span: 24,
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
        title: 'Context',
        type: 'tab',
        elements: contextTab
      },  {
        title: 'Content',
        type: 'tab',
        elements: contentTab
      }, {
        title: 'Access & Use',
        type: 'tab',
        elements: accessAndUseTab
      }, {
        title: 'Allied Materials',
        type: 'tab',
        elements: alliedMaterialsTab
      }, {
        title: 'Notes',
        type: 'tab',
        elements: notesTab
      }
    ]
  }
];

export default fields;
