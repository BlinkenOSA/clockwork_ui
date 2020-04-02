import urlRender from "../../../../../utils/renders/urlRender";

const columns = [
  {
    title: 'Genre',
    dataIndex: 'genre',
    key: 'genre',
    sorter: true,
    width: '40%'
  }, {
    title: 'Authority URL',
    dataIndex: 'authority_url',
    key: 'authority_url',
    render: urlRender,
    sorter: false
  }
];

export default columns