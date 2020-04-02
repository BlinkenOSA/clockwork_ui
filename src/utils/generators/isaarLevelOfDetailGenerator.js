const isaarLevelOfDetailGenerator = (formValues) => {
  const {name, type, date_existence_from, institution_identifier, level_of_detail, ...fValues} = formValues;
  let level = "Minimal";

  Object.keys(fValues).forEach((key) => {
    if (!fValues[key] && fValues[key] !== "" && fValues !== []) {
      level = "Partial"
    } else {
      level = "Full"
    }
  });

  return level;
};

export default isaarLevelOfDetailGenerator;
