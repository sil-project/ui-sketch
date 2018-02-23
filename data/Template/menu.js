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
  },{
    label: "Commandes",
    icon: "tasks",
    children: [{
      label: "Liste des commandes",
      icon: 'list',
      href: '/order/list',
      children: []
    },{
      label: "Commande CMD00000512",
      icon: 'file alternate outline',
      href: '/order',
      children: []
    }]
  }

  ]
};
