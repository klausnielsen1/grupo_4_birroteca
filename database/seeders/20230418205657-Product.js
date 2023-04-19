'use strict';


const productos = [
  {
    name: "/images/lata.jpg",
    image: "Strange",
    description: " light lager",
    price: "Juego absurdo",
    idBrand: "cerveza",
    idStyle: "Es una birra primaveral: huele como IPA y se bebe como lager. Ligerita, refrescante y sabrosa.   ",
    idDistributor: "900$",
    idCategory
},
{
    name: "/images/lata1.jpg",
    image: "Amber-lager ",
    description: "Strange ",
    price: "Alma gorda",
    idBrand: "cerveza",
    idStyle: "Exuberante delicia checa. Inconfundible sabor a la corteza del pan recién horneado y un carácter lupulado tan herbal como fresco. ",
    idDistributor: "$800",
    idCategory
},
{
    name: "Agua bendita",
    image: "Strange",
    description: "/images/lata2.jpg",
    price: "$800",
    idBrand: "light-lager",
    idStyle: "cerveza",
    idDistributor: "Liviana como una nubecita. Refrescante como el agua. Suave al paladar debido a su amargor bajo. Creada para sanar cualquier mal. Hecha para combatir todos los calores",
    idCategory
},
{
    name: "Fiesta de focas",
    image: "Strange",
    description: "/images/lata3.jpg",
    price: "$750",
    idBrand: "fest-bier",
    idStyle: "cerveza",
    idDistributor: "Una Helles con un extra de fiesta. Rubia, cristalina, maltosa; notas a pan y miel. Si estuvieses en el Oktoberfest, ésta sería tu mamadera.",
    idCategory
},
{
    name: "Manos frescas",
    image: "Strange",
    description: "/images/lata4.jpg",
    price: "$900",
    idBrand: "Neipa",
    idStyle: "cerveza",
    idDistributor: "La New England Pale Ale del momento. Luciendo los lúpulos Talus & Citra, este dúo dinámico y suculento les dejará los ojitos bien abiertos. De perfil súper fresco, con notas a frutas blancas y amarillas.",
    idCategory
},
{
    name: "Rubén Rubí",
    image: "Strange",
    description: "/images/lata5.jpg",
    price: "$700",
    idBrand: "SOUR",
    idStyle: "cerveza",
    idDistributor: "Es una Sour con frambuesas. Chispeante. Fresca. Ácida. Probiótica.",
    idCategory
},
{
    name: "Islas flotantes",
    image: "Strange",
    description: "/images/lata6.jpg",
    price: "$750",
    idBrand: "IPA",
    idStyle: "cerveza",
    idDistributor: "New IPA on the block. Color oro, pues es cerca de ser oro líquido. Cítrica. Crujiente. Resinosa. Prueben y vean por sí mismos.",
    idCategory
},
{
    name: "Baya, no más",
    image: "Strange",
    description: "/images/lata7.jpg",
    price: "$990",
    idBrand: "SOUR",
    idStyle: "cerveza",
    idDistributor: "Una Sour de frutillas y coco. De apariencia turbia, rosada y cremosa. Pero a no dejarse engañar, porque en boca es fresca como un heladito y apenas lo suficientemente ácida.",
    idCategory
},
{
    name: "Merch mapache con peluca",
    image: "Strange",
    description: "/images/merch1.jpg",
    price: "$6.700",
    idBrand: "merchandising",
    idStyle: "Remera 100% algodón con estampa.",
    idDistributor,
    idCategory
},
{
    name: "Merch mapache",
    image: "Strange",
    description: "/images/merch2.jpg",
    price: "$6.700",
    idBrand: "merchandising",
    idStyle: "Remera 100% algodón con estampa.",
    idDistributor,
    idCategory
},
{
    name: "Merch mapache y perrito",
    image: "Strange",
    description: "/images/merch3.jpg",
    price: "$6.700",
    idBrand: "merchandising",
    idStyle: "Remera 100% algodón con estampa.",
    idDistributor:'',
    idCategory:''
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
