import urlRender from "../../../../../utils/urlRender";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '50%',
    sorter: true,
    sortKeys: ['last_name', 'first_name'],
  }, {
    title: 'Authority URL',
    dataIndex: 'authority_url',
    key: 'authority_url',
    render: urlRender,
    sorter: false
  }
];

export default columns