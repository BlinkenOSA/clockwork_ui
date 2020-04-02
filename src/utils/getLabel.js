const getLabel = (title) => {
  title = title.charAt(0).toUpperCase() + title.slice(1);
  title = title.split("_");
  return title.join(" ");
  // return title.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(" ")
};

export default getLabel;
