module.exports = {
  children: [{
      label: "Comptes et Contacts",
      icon: "users",
      children: [{
        label: "Fiche d'un contact",
        icon: 'user',
        href: '/contact',
        children: []
      }]
    }, {
      label: "Produits",
      icon: "cubes",
      children: [{
        label: "Liste des produits",
        icon: 'list',
        href: '/product/list',
        children: []
      },{
        label: "Fiche d'un produit",
        icon: 'cube',
        href: '/product',
        children: []
      }]
    }

  ]
};
