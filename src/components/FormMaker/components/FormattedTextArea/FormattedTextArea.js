import React from "react";
import {Field} from "formik";
import JoditEditor from "./JoditEditor";
import './FormattedTextArea.css'

const FormattedTextArea = ({fieldConfig, disabled, ...props}) => {
  const {name, height} = fieldConfig;

  const config = {
    enter: "BR",
    allowResizeY: false,
    minHeight: 150,
    height: height ? height : 150,
    buttons: ['bold', 'italic', 'underline', '|', 'ul', 'ol', '|', 'outdent', 'indent', '|', 'link', '|', 'undo', 'redo', 'fullsize'],
    toolbarAdaptive: false,
    showWordsCounter: false,
    defaultActionOnPaste: "insert_as_text",
    editorCssClass: 'formattedTextArea'
  };

  return (
    <Field name={name} id={name}>
      {
        ({field, form, meta}) => {
          return (
            <JoditEditor
              value={form.value}
              onChange={(value) => {
                form.setFieldValue(name, value);
              }}
              config={config}
            />
          )
        }
      }
    </Field>
  )
};

export default FormattedTextArea;
