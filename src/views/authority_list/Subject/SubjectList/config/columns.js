import urlRender from "../../../../../utils/urlRender";

const columns = [
  {
    title: 'Subject',
    dataIndex: 'subject',
    key: 'subject',
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