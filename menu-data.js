const MENU_CATEGORIAS = [
  {
    id: 'ensaladas', cn: '冷', es: 'Ensaladas', en: 'Salads', foto: 'assets/ensaladas-real.jpg',
    items: [
      { es: 'Ensalada china', en: 'Chinese salad', precio: '2,95€' },
      { es: 'Ensalada de algas', en: 'Seaweed salad', precio: '2,95€' },
      { es: 'Ensalada con gambas', en: 'Prawn salad', precio: '3,60€' },
      { es: 'Ensalada especial', en: 'Special salad', precio: '4,65€' },
      { es: 'Ensalada de brotes de soja', en: 'Bean sprout salad', precio: '2,95€' },
      { es: 'Ensalada agridulce', en: 'Sweet and sour salad', precio: '2,95€' },
    ]
  },
  {
    id: 'entrantes', cn: '前', es: 'Entrantes y Sopas', en: 'Starters & Soups', foto: null,
    items: [
      { es: 'Rollitos de primavera', en: 'Spring rolls', precio: '1,85€' },
      { es: 'Pan de gambas', en: 'Prawn crackers', precio: '2,35€' },
      { es: 'Wan-tun frito', en: 'Fried wontons', precio: '3,15€' },
      { es: 'Pan chino', en: 'Chinese bread', precio: '1,25€' },
      { es: 'Entremeses variados', en: 'Assorted starters', precio: '6,65€' },
      { es: 'Sopa de tres delicias', en: 'Three delicacies soup', precio: '2,95€' },
      { es: 'Sopa de aletas de tiburón', en: 'Shark fin soup', precio: '3,10€' },
      { es: 'Sopa de fideos', en: 'Noodle soup', precio: '2,75€' },
      { es: 'Sopa agripicante', en: 'Hot and sour soup', precio: '2,95€' },
      { es: 'Sopa de maíz con carne de cangrejo', en: 'Corn and crab soup', precio: '2,95€' },
      { es: 'Sopa de won-tón', en: 'Wonton soup', precio: '3,10€' },
      { es: 'Sopa de pollo con champiñón', en: 'Chicken and mushroom soup', precio: '2,75€' },
    ]
  },
  {
    id: 'arroces', cn: '饭', es: 'Arroz y Tallarines', en: 'Rice & Noodles', foto: 'assets/arroces-real.jpg',
    items: [
      { es: 'Arroz frito tres delicias', en: 'Three delicacies fried rice', precio: '3,20€' },
      { es: 'Arroz frito con gambas', en: 'Fried rice with prawns', precio: '3,95€' },
      { es: 'Arroz frito mil delicias', en: 'A thousand delicacies fried rice', precio: '3,95€' },
      { es: 'Arroz frito con ternera', en: 'Fried rice with beef', precio: '3,95€' },
      { es: 'Arroz frito al curry', en: 'Curry fried rice', precio: '3,35€' },
      { es: 'Arroz frito especial', en: 'Special fried rice', precio: '3,95€' },
      { es: 'Arroz con verdura', en: 'Rice with vegetables', precio: '4,25€' },
      { es: 'Arroz blanco', en: 'White rice', precio: '1,50€' },
      { es: 'Tallarines fritos con tres delicias', en: 'Three delicacies fried noodles', precio: '4,15€' },
      { es: 'Tallarines fritos con ternera', en: 'Fried noodles with beef', precio: '4,15€' },
      { es: 'Tallarines fritos con gambas', en: 'Fried noodles with prawns', precio: '4,35€' },
      { es: 'Tallarines fritos con pollo', en: 'Fried noodles with chicken', precio: '4,15€' },
      { es: 'Tallarines fritos con tomate', en: 'Fried noodles with tomato', precio: '3,95€' },
      { es: 'Espaguetis chinos con gambas', en: 'Chinese spaghetti with prawns', precio: '4,35€' },
      { es: 'Fideos de arroz chinos salteados', en: 'Stir-fried Chinese rice noodles', precio: '4,75€' },
    ]
  },
  {
    id: 'huevos', cn: '蛋', es: 'Huevos y Verduras', en: 'Eggs & Vegetables', foto: null,
    items: [
      { es: 'Huevos revueltos con gambas', en: 'Scrambled eggs with prawns', precio: '3,35€' },
      { es: 'Huevos revueltos con jamón', en: 'Scrambled eggs with ham', precio: '3,15€' },
      { es: 'Huevos fritos con patatas', en: 'Fried eggs with potatoes', precio: '3,15€' },
      { es: 'Bambú y setas chinas salteadas', en: 'Stir-fried bamboo shoots and Chinese mushrooms', precio: '4,95€' },
      { es: 'Verduras variadas salteadas', en: 'Stir-fried mixed vegetables', precio: '4,95€' },
      { es: 'Verdura rebozada', en: 'Battered vegetables', precio: '4,65€' },
      { es: 'Brotes de soja salteados', en: 'Stir-fried bean sprouts', precio: '3,50€' },
    ]
  },
  {
    id: 'pescados', cn: '海', es: 'Pescados y Mariscos', en: 'Fish & Seafood', foto: 'assets/arroz-marisco.png',
    items: [
      { es: 'Pescado con salsa de soja', en: 'Fish in soy sauce', precio: '5,95€' },
      { es: 'Pescado frito', en: 'Fried fish', precio: '5,95€' },
      { es: 'Pescado agridulce', en: 'Sweet and sour fish', precio: '4,55€' },
      { es: 'Calamares en salsa a la plancha', en: 'Grilled squid in sauce', precio: '4,55€' },
      { es: 'Sepia con guindillas', en: 'Cuttlefish with chili', precio: '5,95€' },
      { es: 'Centollo chino con salsa de soja', en: 'Chinese spider crab in soy sauce', precio: '4,95€' },
      { es: 'Langostinos con salsa de soja', en: 'King prawns in soy sauce', precio: '6,95€' },
      { es: 'Gambas agridulces', en: 'Sweet and sour prawns', precio: '6,95€' },
      { es: 'Gambas con verduras', en: 'Prawns with vegetables', precio: '5,85€' },
      { es: 'Gambas con guindillas', en: 'Prawns with chili', precio: '6,25€' },
      { es: 'Gambas con bambú y setas en salsa a la plancha', en: 'Prawns with bamboo shoots and mushrooms, grilled in sauce', precio: '6,95€' },
      { es: 'Langostinos con salsa a la plancha', en: 'Grilled king prawns in sauce', precio: '6,95€' },
      { es: 'Langostinos fritos', en: 'Fried king prawns', precio: '6,95€' },
      { es: 'Langostinos a la plancha', en: 'Grilled king prawns', precio: '6,95€' },
    ]
  },
  {
    id: 'aves', cn: '鸡', es: 'Aves', en: 'Poultry', foto: 'assets/pollo-limon.png',
    items: [
      { es: 'Pollo con almendras', en: 'Chicken with almonds', precio: '4,85€' },
      { es: 'Pollo con anacardos', en: 'Chicken with cashews', precio: '4,85€' },
      { es: 'Pollo con bambú y setas chinas', en: 'Chicken with bamboo shoots and Chinese mushrooms', precio: '4,95€' },
      { es: 'Pollo con verduras', en: 'Chicken with vegetables', precio: '4,85€' },
      { es: 'Pollo con champiñones', en: 'Chicken with mushrooms', precio: '4,55€' },
      { es: 'Pollo con salsa a la plancha', en: 'Grilled chicken in sauce', precio: '5,85€' },
      { es: 'Pollo con semilla de sésamo', en: 'Chicken with sesame seeds', precio: '5,15€' },
      { es: 'Pollo con brotes de soja', en: 'Chicken with bean sprouts', precio: '4,55€' },
      { es: 'Pollo con salsa de curry', en: 'Chicken in curry sauce', precio: '4,75€' },
      { es: 'Pollo con guindillas', en: 'Chicken with chili', precio: '4,75€' },
      { es: 'Muslo de pollo sabor loco', en: '"Crazy flavour" chicken thigh', precio: '5,35€' },
      { es: 'Pechuga de pollo frito', en: 'Fried chicken breast', precio: '4,75€' },
      { es: 'Bolas de pollo frito', en: 'Fried chicken balls', precio: '4,55€' },
      { es: 'Pollo agridulce', en: 'Sweet and sour chicken', precio: '4,20€' },
      { es: 'Pollo frito al limón', en: 'Fried lemon chicken', precio: '4,80€' },
      { es: 'Pollo con frutas chinas', en: 'Chicken with Chinese fruits', precio: '4,80€' },
      { es: 'Pollo con piña', en: 'Chicken with pineapple', precio: '4,75€' },
    ]
  },
  {
    id: 'ternera', cn: '牛', es: 'Carne de Ternera', en: 'Beef', foto: 'assets/ternera-real.jpg',
    items: [
      { es: 'Ternera con salsa de ostras', en: 'Beef in oyster sauce', precio: '5,35€' },
      { es: 'Ternera con bambú y setas chinas', en: 'Beef with bamboo shoots and Chinese mushrooms', precio: '5,65€' },
      { es: 'Ternera con champiñones', en: 'Beef with mushrooms', precio: '5,15€' },
      { es: 'Ternera con pimientos verdes', en: 'Beef with green peppers', precio: '5,15€' },
      { es: 'Ternera con cebolla', en: 'Beef with onion', precio: '5,15€' },
      { es: 'Ternera con salsa curry', en: 'Beef in curry sauce', precio: '5,15€' },
      { es: 'Verdura con ternera', en: 'Vegetables with beef', precio: '5,15€' },
      { es: 'Ternera con cinco aromas', en: 'Five-spice beef', precio: '5,35€' },
      { es: 'Ternera salteada picante', en: 'Spicy stir-fried beef', precio: '5,15€' },
      { es: 'Ternera en salsa a la plancha', en: 'Grilled beef in sauce', precio: '6,35€' },
      { es: 'Ternera con patatas fritas', en: 'Beef with fries', precio: '5,70€' },
    ]
  },
  {
    id: 'cerdo', cn: '猪', es: 'Solomillo de Cerdo', en: 'Pork Tenderloin', foto: null,
    items: [
      { es: 'Solomillo de cerdo agridulce', en: 'Sweet and sour pork tenderloin', precio: '4,35€' },
      { es: 'Solomillo de cerdo con bambú y setas chinas', en: 'Pork tenderloin with bamboo shoots and Chinese mushrooms', precio: '5,75€' },
      { es: 'Costillas de cerdo asadas', en: 'Roasted pork ribs', precio: '4,95€' },
      { es: 'Costillas a la barbacoa (250g)', en: 'BBQ ribs (250g)', precio: '8,95€' },
      { es: 'Costillas Singapur con salsa de soja', en: 'Singapore-style ribs in soy sauce', precio: '4,95€' },
      { es: 'Costillas de cerdo agridulces', en: 'Sweet and sour pork ribs', precio: '4,95€' },
      { es: 'Solomillo de cerdo con verduras', en: 'Pork tenderloin with vegetables', precio: '5,55€' },
      { es: 'Solomillo de cerdo con cebolla', en: 'Pork tenderloin with onion', precio: '5,55€' },
      { es: 'Solomillo de cerdo con pimientos verdes', en: 'Pork tenderloin with green peppers', precio: '5,55€' },
      { es: 'Solomillo de cerdo cinco aromas', en: 'Five-spice pork tenderloin', precio: '5,65€' },
      { es: 'Solomillo de cerdo salteado picante', en: 'Spicy stir-fried pork tenderloin', precio: '5,65€' },
      { es: 'Solomillo de cerdo con salsa a la plancha', en: 'Grilled pork tenderloin in sauce', precio: '6,85€' },
      { es: 'Solomillo de cerdo con champiñones', en: 'Pork tenderloin with mushrooms', precio: '5,55€' },
      { es: 'Solomillo de cerdo con salsa de ostras', en: 'Pork tenderloin in oyster sauce', precio: '5,55€' },
      { es: 'Solomillo de cerdo con patatas fritas', en: 'Pork tenderloin with fries', precio: '5,95€' },
      { es: 'Solomillo de cerdo con salsa curry', en: 'Pork tenderloin in curry sauce', precio: '5,55€' },
    ]
  },
  {
    id: 'especiales', cn: '特', es: 'Platos Especiales', en: "Chef's Specials", foto: 'assets/especiales-real.jpg',
    items: [
      { es: 'Ku-bak con tres delicias', en: 'Ku-bak with three delicacies', precio: '6,25€' },
      { es: 'Ku-bak con gambas', en: 'Ku-bak with prawns', precio: '6,55€' },
      { es: 'Marisco variado en salsa a la plancha', en: 'Mixed seafood, grilled in sauce', precio: '6,95€' },
      { es: 'Ancas de rana fritas', en: 'Fried frog legs', precio: '6,25€' },
      { es: 'Ancas de rana en salsa a la plancha', en: 'Grilled frog legs in sauce', precio: '6,65€' },
      { es: '"Hormiga" en el árbol', en: '"Ants climbing a tree"', precio: '6,15€' },
      { es: 'Pato especial "Pekín"', en: 'Special "Peking" duck', precio: '9,65€' },
      { es: 'Pato con bambú y setas en salsa a la plancha', en: 'Duck with bamboo shoots and mushrooms, grilled in sauce', precio: '8,15€' },
      { es: 'Pato frito estilo chino', en: 'Chinese-style fried duck', precio: '6,75€' },
      { es: 'Familia feliz especial', en: 'Special "Happy Family"', precio: '6,95€' },
      { es: 'Pato a la naranja', en: 'Duck in orange sauce', precio: '8,15€' },
      { es: 'Pato con piña', en: 'Duck with pineapple', precio: '8,15€' },
      { es: 'Muslitos del mar fritos', en: 'Fried "sea legs" (crab claws)', precio: '5,25€' },
      { es: 'Cesta de flor con pollo y gambas', en: '"Flower basket" with chicken and prawns', precio: '6,85€' },
      { es: 'Cesta de flor con ternera y gambas', en: '"Flower basket" with beef and prawns', precio: '6,95€' },
    ]
  }
];

const MENU_DEL_DIA = {
  precio: '11,50',
  disponible: { es: 'De lunes a viernes · Mediodía', en: 'Monday to Friday · Midday only' },
  primero: {
    label: { es: '1.º Plato · a elegir', en: '1st Course · choose one' },
    items: [
      { es: 'Rollito de primavera', en: 'Spring roll' },
      { es: 'Ensalada', en: 'Salad' },
      { es: 'Pan de gambas', en: 'Prawn crackers' },
      { es: 'Pan chino', en: 'Chinese bread' },
      { es: 'Sopa de pollo con champiñones', en: 'Chicken and mushroom soup' },
    ]
  },
  segundo: {
    label: { es: '2.º Plato · a elegir', en: '2nd Course · choose one' },
    items: [
      { es: 'Arroz Tres Delicias', en: 'Three Delicacies Rice' },
      { es: 'Arroz blanco', en: 'White rice' },
      { es: 'Tallarines fritos Tres Delicias', en: 'Three Delicacies Fried Noodles' },
    ]
  },
  tercero: {
    label: { es: '3.º Plato · a elegir', en: '3rd Course · choose one' },
    items: [
      { es: 'Pollo con almendras', en: 'Chicken with almonds' },
      { es: 'Pollo con champiñones', en: 'Chicken with mushrooms' },
      { es: 'Bolitas de pollo fritas', en: 'Fried chicken balls' },
      { es: 'Pollo agridulce', en: 'Sweet and sour chicken' },
      { es: 'Pollo al limón', en: 'Lemon chicken' },
      { es: 'Ternera con salsa de ostras', en: 'Beef in oyster sauce' },
      { es: 'Ternera con champiñones', en: 'Beef with mushrooms' },
      { es: 'Ternera con cebolla', en: 'Beef with onion' },
      { es: 'Ternera con verdura', en: 'Beef with vegetables' },
      { es: 'Ternera picante', en: 'Spicy beef' },
      { es: 'Ternera con patatas fritas', en: 'Beef with fries' },
      { es: 'Cerdo agridulce', en: 'Sweet and sour pork' },
      { es: 'Cerdo con verdura', en: 'Pork with vegetables' },
      { es: 'Costilla de cerdo asada o barbacoa', en: 'Roasted or BBQ pork ribs' },
      { es: 'Verduras variadas salteadas', en: 'Stir-fried mixed vegetables' },
      { es: 'Pescado agridulce', en: 'Sweet and sour fish' },
    ]
  },
  bebida: { es: 'Copa de vino · Cerveza · Refresco', en: 'Glass of wine · Beer · Soft drink' },
  postre: { es: 'Tarta del día, fruta china, helado, flan, melocotón o piña en almíbar', en: 'Daily cake, Chinese fruit, ice cream, flan, peach or pineapple in syrup' },
  nota: { es: 'Sólo para tomar en el restaurante. Se sirve de lunes a viernes, sólo por la mañana, excepto festivos.', en: 'Dine-in only. Served Monday to Friday, midday only, except public holidays.' }
};
