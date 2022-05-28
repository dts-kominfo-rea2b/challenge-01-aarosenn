const name = [];
const gender =[];
const age= [];
const email =[];
const favouriteColor = [];
const isHavePet = [];
const education = [];
const favouriteRestaurant = [];

const sdMon = {
    nameSDMon : "SD 01",
    sdLokMon : "Jakarta",
    lulusSDMon : 2016
};
const sdWen = {
    nameSDWen : "SD 02",
    sdLokWen : "Jakarta",
    lulusSDWen : 2010
};

const smpMon = {
    nameSMPMon : "SMP 02",
    smpLokMon : "Jakarta",
    lulusSMPMon : 2019
};

const smpWen = {
    nameSMPWen : "SMP 03",
    smpLokWen : "Bogor",
    lulusSMPWen : 2013
};
const smaMon = {
    nameSMAMon : "SMA 03",
    smaLokMon : "Tangerang"
};

const smaWen = {
    nameSMAWen : "SMA 01",
    smaLokWen : "Surabaya",
    lulusSMAWen : 2016,
    univName : "Universitas Maju",
    univLok : "Tangerang"
};


const monCol = ["Yellow", " Pink", " White", " Purple "];
const wenCol = ["Blue ", " Black ", " Grey "];

const favResMon = ["Bento, Sushi, Pancake, Eggy, Tempura, Bento, Eggy, Padang, Tteok, Sushi, Sushi"];
const favResWen = ["Tempura, Bento, Sushi, Pancake, Padang, Katsu, Geprek, Pancake, Eggy"]

name.push("Monica","Wendy");
gender.push("female", "male");
age.push(17, 23);
email.push("monica@dingdong.com", "wendy@dingdong.com");
favouriteColor.push(monCol, wenCol);
isHavePet.push("Yes", "No");
education.push(sdMon, smpMon, smaMon, sdWen, smpWen, smaWen);
favouriteRestaurant.push(favResMon, favResWen);

const users = [];
users.push(name, gender, age, email, favouriteColor, education, isHavePet, favouriteRestaurant);

console.log(users);