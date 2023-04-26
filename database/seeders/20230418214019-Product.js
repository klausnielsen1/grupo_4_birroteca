'use strict';


const productos = [
  {
    name: "Juego absurdo",
    image: "lata.jpg",
    description: "Es una birra primaveral: huele como IPA y se bebe como lager. Ligerita, refrescante y sabrosa.",
    price: 900,
    idBrand: 1,
    idStyle: 1,
    idDistributor: 1,
    idCategory: 1
},
{
    name: "Alma gorda",
    image: "lata1.jpg",
    description: "Exuberante delicia checa. Inconfundible sabor a la corteza del pan recién horneado y un carácter lupulado tan herbal como fresco.",
    price: 850,
    idBrand: 1,
    idStyle: 2,
    idDistributor: 2,
    idCategory: 1
},
{
    name: "Agua bendita",
    image: "lata2.jpg",
    description: "Liviana como una nubecita. Refrescante como el agua. Suave al paladar debido a su amargor bajo. Creada para sanar cualquier mal. Hecha para combatir todos los calores",
    price: 800,
    idBrand: 1,
    idStyle: 4,
    idDistributor: 3,
    idCategory: 1
},
{
    name: "Fiesta de focas",
    image: "lata3.jpg",
    description: "Una Helles con un extra de fiesta. Rubia, cristalina, maltosa; notas a pan y miel. Si estuvieses en el Oktoberfest, ésta sería tu mamadera.",
    price: 750,
    idBrand: 1,
    idStyle: 3,
    idDistributor: 4,
    idCategory: 1
},
{
    name: "Manos frescas",
    image: "lata4.jpg",
    description: "La New England Pale Ale del momento. Luciendo los lúpulos Talus & Citra, este dúo dinámico y suculento les dejará los ojitos bien abiertos. De perfil súper fresco, con notas a frutas blancas y amarillas.",
    price: 900,
    idBrand: 1,
    idStyle: 3,
    idDistributor: 1,
    idCategory: 1
},
{
    name: "Rubén Rubí",
    image: "lata5.jpg",
    description: "Es una Sour con frambuesas. Chispeante. Fresca. Ácida. Probiótica.",
    price: 700,
    idBrand: 1,
    idStyle: 2,
    idDistributor: 2,
    idCategory: 1
},
{
    name: "Islas flotantes",
    image: "lata6.jpg",
    description: "New IPA on the block. Color oro, pues es cerca de ser oro líquido. Cítrica. Crujiente. Resinosa. Prueben y vean por sí mismos.",
    price: 750,
    idBrand: 1,
    idStyle: 1,
    idDistributor: 3,
    idCategory: 1
},
{
    name: "Baya, no más",
    image: "lata7.jpg",
    description: "Una Sour de frutillas y coco. De apariencia turbia, rosada y cremosa. Pero a no dejarse engañar, porque en boca es fresca como un heladito y apenas lo suficientemente ácida.",
    price: 990,
    idBrand: 1,
    idStyle: 3,
    idDistributor: 4,
    idCategory: 1
},
{
    name: "Merch mapache con peluca",
    image: "merch1.jpg",
    description: "Remera 100% algodón con estampa.",
    price: 6.700,
    idBrand: 1,
    idStyle: 1,
    idDistributor: 1,
    idCategory: 2
},
{
    name: "Merch mapache",
    image: "merch2.jpg",
    description: "Remera 100% algodón con estampa.",
    price: 6.300,
    idBrand: 1,
    idStyle: 1,
    idDistributor: 2,
    idCategory: 2
},
{
    name: "Merch mapache y perrito",
    image: "merch3.jpg",
    description: "Remera 100% algodón con estampa.",
    price: 6.900,
    idBrand: 1,
    idStyle: 1,
    idDistributor: 3,
    idCategory: 2
}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      Example:
      await queryInterface.bulkInsert('Products', productos, {});
  },

  async down (queryInterface, Sequelize) {

      /* Add commands to revert seed here. */
     
      Example:
      await queryInterface.bulkDelete('People', null, {});

  }
};
