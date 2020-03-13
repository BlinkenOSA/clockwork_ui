import urlRender from "../../../../../utils/renders/urlRender";

const columns = [
  {
    title: 'Corporation Name',
    dataIndex: 'name',
    key: 'name',
    width: '50%',
    sorter: true
  }, {
    title: 'Authority URL',
    dataIndex: 'authority_url',
    key: 'authority_url',
    render: urlRender,
    sorter: false
  }
];

export default columns