module.exports = {
  children: [{
      label: "Comptes et Contacts",
      icon: "users",
      children: [{
        label: "Fiche d'un contact",
        icon: "user",
        href: "/contact",
        children: []
      },{
        label: "Fiche d'un compte",
        icon: "book",
        href: "/account",
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
  },{
    label: "Gestion des stocks",
    icon: "cubes",
    children: [{
      label: "Entrepôt n°1",
      icon: 'industry',
      href: '/stock/warehouse',
      children: []
    },{
      label: "Emplacement Etagère n°1",
      icon: 'map marker alternate',
      href: '/stock/location',
      children: []
    }]
  }

  ]
};
