import urlRender from "../../../../../utils/renders/urlRender";

const columns = [
  {
    title: 'Language',
    dataIndex: 'language',
    key: 'language',
    width: '40%',
    sorter: true,
  }, {
    title: 'Authority URL',
    dataIndex: 'authority_url',
    key: 'authority_url',
    render: urlRender,
    sorter: false
  }, {
    title: 'ISO 693 2',
    dataIndex: 'iso_639_2',
    key: 'iso_639_2',
    width: 130,
    sorter: true
  }, {
    title: 'ISO 693 3',
    dataIndex: 'iso_639_3',
    key: 'iso_639_3',
    width: 130,
    sorter: true
  }
];

export default columns