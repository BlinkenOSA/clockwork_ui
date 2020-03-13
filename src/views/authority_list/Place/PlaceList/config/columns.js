import urlRender from "../../../../../utils/renders/urlRender";

const columns = [
  {
    title: 'Place',
    dataIndex: 'place',
    key: 'place',
    sorter: true,
  }, {
    title: 'Authority URL',
    dataIndex: 'authority_url',
    key: 'authority_url',
    render: urlRender,
    sorter: false
  }
];

export default columns