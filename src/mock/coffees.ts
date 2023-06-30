export interface Cafe {
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
        imgPath: "./expresso.png"
    },
    {
        id: 2,
        nome: "Expresso Americano",
        tipo: ["Tradicional"],
        descricao: "Expresso diluído, menos intenso que o tradicional",
        imgPath: "./americano.png"
    },
    {
        id: 3,
        nome: "Expresso Cremoso",
        tipo: ["Tradicional"],
        descricao: "Café expresso tradicional com espuma cremosa",
        imgPath: "./expressocremoso.png"
    },
    {
        id: 4,
        nome: "Expresso Gelado",
        tipo: ["Tradicional", "Gelado"],
        descricao: "Bebida preparada com café expresso e cubos de gelo",
        imgPath: "./cafegelado.png"
    },
    {
        id: 5,
        nome: "Café com Leite",
        tipo: ["Tradicional", "Com leite"],
        descricao: "Meio a meio de expresso tradicional com leite vaporizado",
        imgPath: "./cafecomleite.png"
    },
    {
        id: 6,
        nome: "Latte",
        tipo: ["Tradicional", "Com leite"],
        descricao: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        imgPath: "./latte.png"
    },
    {
        id: 7,
        nome: "Cappuccino",
        tipo: ["Tradicional", "Com leite"],
        descricao: "Bebida com canela feita de doses iguais de café, leite e espuma",
        imgPath: "./capuccino.png"
    },
    {
        id: 8,
        nome: "Macchiato",
        tipo: ["Tradicional", "Com leite"],
        descricao: "Café expresso misturado com um pouco de leite quente e espuma",
        imgPath: "./macchiato.png"
    },
    {
        id: 9,
        nome: "Mocaccino",
        tipo: ["Tradicional", "Com leite"],
        descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
        imgPath: "./mocaccino.png"
    },
    {
        id: 10,
        nome: "Chocolate Quente",
        tipo: ["Especial", "Com leite"],
        descricao: "Bebida feita com chocolate dissolvido no leite quente e café",
        imgPath: "./chocolatequente.png"
    },
    {
        id: 11,
        nome: "Cubano",
        tipo: ["Especial", "Alcoólico", "Gelado"],
        descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        imgPath: "./cubano.png"
    },
    {
        id: 12,
        nome: "Havaiano",
        tipo: ["Especial"],
        descricao: "Bebida adocicada preparada com café e leite de coco",
        imgPath: "./havaiano.png"
    },
    {
        id: 13,
        nome: "Árabe",
        tipo: ["Especial"],
        descricao: "Bebida preparada com grãos de café árabe e especiarias",
        imgPath: "./arabe.png"
    },
    {
        id: 14,
        nome: "Irlandês",
        tipo: ["Especial", "Alcoólico"],
        descricao: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        imgPath: "./irlandes.png"
    },

];

export default mockData;
