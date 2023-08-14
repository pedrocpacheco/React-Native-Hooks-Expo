import green from "../../assets/produtores/green.png"
import salad from "../../assets/produtores/salad.png"
import grow from "../../assets/produtores/grow.png"
import potager from "../../assets/produtores/green.png"
import jennyJack from "../../assets/produtores/jenny-jack.png"

const generateRandonNumber = (min: number, max: number) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const cyclists = {
    tytle: "Cyclists",
    list: [
        {
            name: "Green",
            image: green,
            distance: `${generateRandonNumber(1, 500)}m`,
            starts: generateRandonNumber(1,5)
        },
        {
            name: "Salad",
            image: salad,
            distance: `${generateRandonNumber(1, 500)}m`,
            starts: generateRandonNumber(1,5)
        },
        {
            name: "Grow",
            image: grow,
            distance: `${generateRandonNumber(1, 500)}m`,
            starts: generateRandonNumber(1,5)
        },
        {
            name: "Potager",
            image: potager,
            distance: `${generateRandonNumber(1, 500)}m`,
            starts: generateRandonNumber(1,5)
        },
        {
            name: "Jenny Jack",
            image: jennyJack,
            distance: `${generateRandonNumber(1, 500)}m`,
            starts: generateRandonNumber(1,5)
        }
    ]
}