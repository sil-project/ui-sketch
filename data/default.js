module.exports = {
  template: require_nc(path.join(__data, 'Template', 'index')),
  menu: require_nc(path.join(__data, 'Template', 'menu')),
  breadcrumbs: require_nc(path.join(__data, 'Template', 'breadcrumbs')),
  page: {
    header: {
      icon: '',
      title: '',
      description: ''
    }
  },
  view: {}
};
