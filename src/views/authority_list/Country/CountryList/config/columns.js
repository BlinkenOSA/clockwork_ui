import urlRender from "../../../../../utils/urlRender";

const columns = [
  {
    title: 'Country Name',
    dataIndex: 'country',
    key: 'country',
    width: '40%',
    sorter: true,
  }, {
    title: 'Authority URL',
    dataIndex: 'authority_url',
    key: 'authority_url',
    render: urlRender,
    sorter: false
  }, {
    title: 'Alpha 2',
    dataIndex: 'alpha2',
    key: 'alpha2',
    width: 100,
    sorter: true
  }, {
    title: 'Alpha 3',
    dataIndex: 'alpha3',
    key: 'alpha3',
    width: 100,
    sorter: true
  }
];

export default columns