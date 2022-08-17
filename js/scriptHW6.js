

class AbstractHuman {
    constructor(growth,weight,name,date,floor,disability) {
        this.growth = growth;
        this.weight = weight;
        this.name = name;
        this.date = date;
        this.floor = floor;
        this.disability = disability;
    }
    get getInfo(){
        const information = {
            growth:this.growth,
            weight:this.weight,
            name:this.name,
            date:this.date,
            floor:this.floor,
            disability:this.disability
        };
        console.log(information);
    }
    set setNewDisability(disability) {
        this.disability = disability;
    }
}

const firstHuman = new AbstractHuman('175','80','Yarik',new Date('2020-01-01'),
    'male','norm');
firstHuman.getInfo;
firstHuman.setNewDisability = 'supper norm';
firstHuman.getInfo;
console.log(firstHuman,'firstHuman')
firstHuman.name = 'Привет!Был Ярик теперь зовут Шарик'



class FrontendBuilder extends AbstractHuman {
    constructor(name, startDate, endDate, salaryPerMont, positionMiddle, companyNameOracle,) {
        super(name, startDate, endDate, salaryPerMont, positionMiddle, companyNameOracle);
        this.startDate = startDate;
        this.endDate = endDate;
        this.salaryPerMont = salaryPerMont;
        this.positionMiddle = positionMiddle;
        this.companyNameOracle = companyNameOracle;
    }

}
const per = new FrontendBuilder('Привет,меня зовут Игорь,я фронтенд разработчик','03.08.2020',
    '04.08,2021','$$$$$','Средний','Cold');
console.log(per,'per')

