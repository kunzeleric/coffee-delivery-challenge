interface Cafe {
    id: number;
    nome: string;
    tipo: string[];
    descricao: string;
    imgPath: string;
}

const mockData: Cafe[] = [
    {
        id: 1,
        nome: "Expresso Tradicional",
        tipo: ["Tradicional"],
        descricao: "O tradicional café feito com água quente e grãos moídos",
        imgPath: "../assets/expresso.png"
    },
    {
        id: 2,
        nome: "Expresso Americano",
        tipo: ["Tradicional"],
        descricao: "Expresso diluído, menos intenso que o tradicional",
        imgPath: "../assets/americano.png"
    },
    {
        id: 3,
        nome: "Expresso Cremoso",
        tipo: ["Tradicional"],
        descricao: "Café expresso tradicional com espuma cremosa",
        imgPath: "../assets/expressocremoso.png"
    },
    {
        id: 4,
        nome: "Expresso Gelado",
        tipo: ["Tradicional", "Gelado"],
        descricao: "Bebida preparada com café expresso e cubos de gelo",
        imgPath: "../assets/cafegelado.png"
    },
    {
        id: 5,
        nome: "Café com Leite",
        tipo: ["Tradicional", "Com leite"],
        descricao: "Meio a meio de expresso tradicional com leite vaporizado",
        imgPath: "../assets/cafecomleite.png"
    },
    {
        id: 6,
        nome: "Latte",
        tipo: ["Tradicional", "Com leite"],
        descricao: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        imgPath: "../assets/latte.png"
    },
    {
        id: 7,
        nome: "Cappuccino",
        tipo: ["Tradicional", "Com leite"],
        descricao: "Bebida com canela feita de doses iguais de café, leite e espuma",
        imgPath: "../assets/capuccino.png"
    },
    {
        id: 8,
        nome: "Macchiato",
        tipo: ["Tradicional", "Com leite"],
        descricao: "Café expresso misturado com um pouco de leite quente e espuma",
        imgPath: "../assets/macchiato.png"
    },
    {
        id: 9,
        nome: "Mocaccino",
        tipo: ["Tradicional", "Com leite"],
        descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
        imgPath: "../assets/mocaccino.png"
    },
    {
        id: 10,
        nome: "Chocolate Quente",
        tipo: ["Especial", "Com leite"],
        descricao: "Bebida feita com chocolate dissolvido no leite quente e café",
        imgPath: "../assets/chocolatequente.png"
    },
    {
        id: 11,
        nome: "Cubano",
        tipo: ["Especial", "Alcoólico", "Gelado"],
        descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        imgPath: "../assets/cubano.png"
    },
    {
        id: 12,
        nome: "Havaiano",
        tipo: ["Especial"],
        descricao: "Bebida adocicada preparada com café e leite de coco",
        imgPath: "../assets/havaiano.png"
    },
    {
        id: 13,
        nome: "Árabe",
        tipo: ["Especial"],
        descricao: "Bebida preparada com grãos de café árabe e especiarias",
        imgPath: "../assets/arabe.png"
    },
    {
        id: 14,
        nome: "Irlandês",
        tipo: ["Especial", "Alcoólico"],
        descricao: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        imgPath: "../assets/irlandes.png"
    },

];

export default mockData;
