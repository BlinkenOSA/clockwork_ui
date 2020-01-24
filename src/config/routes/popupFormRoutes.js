const popupFormRoutes = (list, component) => {
  return [
    {path: list, exact: true, component: component},
  ];
};

export default popupFormRoutes;