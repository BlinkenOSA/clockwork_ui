const getLabel = (title) => {
  title = title.split("_");
  return title.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(" ")
};

export default getLabel;
