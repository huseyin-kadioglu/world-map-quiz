const WORLD_MAP_SVG = "worldmap-svg";

const countryList = [
    {
        key: ["afganistan", "afghanistan"],
        value: "afghanistan",
    },
    {
        key: ["angola"],
        value: "angola",
    },
    {
        key: ["arjantin", "argentina"],
        value: "argentina",
    },
    {
        key: ["arnavutluk", "albania"],
        value: "albania",
    },
    {
        key: ["avusturya", "austria"],
        value: "austria",
    },
    {
        key: ["avustralya", "australia"],
        value: "australia",
    },
    {
        key: ["azerbaycan", "azerbaijan"],
        value: "azerbaijan",
    },
    {
        key: ["ermenistan", "armenia"],
        value: "armenia",
    },
    {
        key: ["belçika", "belgium"],
        value: "belgium",
    },
    {
        key: ["benin"],
        value: "benin",
    },
    {
        key: ["burkina faso"],
        value: "burkina faso",
    },
    {
        key: ["bangladesh"],
        value: "bangladesh",
    },
    {
        key: ["bulgaristan", "bulgaria"],
        value: "bulgaria",
    },
    {
        key: ["bosna", "bosnia"],
        value: "bosnia and herzegovina",
    },

    {
        key: ["belize"],
        value: "belize",
    },

    {
        key: ["bolivya", "bolivia"],
        value: "bolivia",
    },
    {
        key: ["brezilya", "brazil"],
        value: "brazil",
    },
    {
        key: ["brunei"],
        value: "brunei",
    },
    {
        key: ["beyaz rusya", "belarus"],
        value: "belarus",
    },
    {
        key: ["butan", "bhutan"],
        value: "bhutan",
    },

    {
        key: ["botswana"],
        value: "botswana",
    },

    {
        key: [
            "birleşik arap emirlikleri",
            "uae",
            "united arab emirates",
        ],
        value: "united arab emirates",
    },

    {
        key: ["burundi"],
        value: "burundi",
    },

    {
        key: ["rusya", "russia"],
        value: "russia",
    },

    {
        key: ["orta afrika cumhuriyeti", "central african republic", "car"],
        value: "central african republic",
    },

    {
        key: ["türkiye", "turkey"],
        value: "turkey",
    }, {
        key: ["almanya", "germany"],
        value: "germany",
    },
    {
        key: ["kanada", "canada"],
        value: "canada",
    },
    {
        key: ["isviçre", "switzerland"],
        value: "switzerland",
    },
    {
        key: ["çin", "china"],
        value: "china",
    },
    {
        key: ["fildişi sahilleri", "ivory coast"],
        value: "ivory coast",
    },
    {
        key: ["kamerun", "cameroon"],
        value: "cameroon",
    },
    {
        key: ["demokratik kongo cumhuriyeti", "democratic republic of congo"],
        value: "democratic rebuplic of congo",
    },
    {
        key: ["kolombiya", "colombia"],
        value: "colombia",
    },
    {
        key: ["kosta rika", "costa rica"],
        value: "costa rica",
    },
    {
        key: ["küba", "cuba"],
        value: "cuba",
    },
    {
        key: ["çek cumhuriyeti", "çekya", "czech republic"],
        value: "czech republic",
    },
    {
        key: ["cibuti", "djibouti"],
        value: "djibouti",
    },
    {
        key: ["danimarka", "denmark"],
        value: "denmark",
    },
    {
        key: ["cezayir", "algeria"],
        value: "algeria",
    },
    {
        key: ["dominik cumhuriyeti", "dominican republic"],
        value: "dominican republic",
    },
    {
        key: ["ekvator", "ecuador"],
        value: "ecuador",
    },
    {
        key: ["mısır", "egypt"],
        value: "egypt",
    },
    {
        key: ["eritre", "eritrea"],
        value: "eritrea",
    },
    {
        key: ["estonya", "estonia"],
        value: "estonia",
    },
    {
        key: ["etiyopya", "ethiopia"],
        value: "ethiopia",
    },

    {
        key: ["finlandiya", "finland"],
        value: "finland",
    },
    {
        key: ["gabon"],
        value: "gabon",
    },
    {
        key: ["birleşik krallık", "united kingdom"],
        value: "united kingdom",
    },
    {
        key: ["gürcistan", "georgia"],
        value: "georgia",
    },
    {
        key: ["gana", "ghana"],
        value: "ghana",
    },

    {
        key: ["gine", "guinea"],
        value: "guinea",
    },
    {
        key: ["gambiya", "gambia"],
        value: "gambia",
    },
    {
        key: ["guine bissau", "guinea bissau"],
        value: "guinea bissau",
    },
    {
        key: ["ekvatoral gine", "equatorial guinea"],
        value: "equatorial guinea",
    },
    {
        key: ["yunanistan", "greece"],
        value: "greece",
    },
    {
        key: ["grönland", "greenland"],
        value: "greenland",
    },
    {
        key: ["guatemala"],
        value: "guatemala",
    },
    {
        key: ["guyana"],
        value: "guyana",
    },
    {
        key: ["honduras"],
        value: "honduras",
    },
    {
        key: ["hırvatistan", "croatia"],
        value: "croatia",
    },
    {
        key: ["haiti"],
        value: "haiti",
    },
    {
        key: ["macaristan", "hungary"],
        value: "hungary",
    },
    {
        key: ["endonezya", "indonesia"],
        value: "indonesia",
    },
    {
        key: ["hindistan", "india"],
        value: "india",
    },
    {
        key: ["irlanda", "ireland"],
        value: "ireland",
    },
    {
        key: ["iran"],
        value: "iran",
    },
    {
        key: ["ırak", "iraq"],
        value: "iraq",
    },
    {
        key: ["izlanda", "iceland"],
        value: "iceland",
    },
    {
        key: ["israil", "israel"],
        value: "israel",
    },
    {
        key: ["italya", "italy"],
        value: "italy",
    },
    {
        key: ["jamaika", "jamaica"],
        value: "jamaica",
    },
    {
        key: ["ürdün", "jordan"],
        value: "jordan",
    },
    {
        key: ["japonya", "japan"],
        value: "japan",
    },
    {
        key: ["kazakistan", "kazakhstan"],
        value: "kazakhstan",
    },
    {
        key: ["kenya"],
        value: "kenya",
    },
    {
        key: ["kırgızistan", "kyrgyzstan"],
        value: "kyrgyzstan",
    },
    {
        key: ["kamboçya", "cambodia"],
        value: "cambodia",
    },
    {
        key: ["güney kore", "south korea"],
        value: "south korea",
    },
    {
        key: ["kuveyt", "kuwait"],
        value: "kuwait",
    },
    {
        key: ["laos"],
        value: "laos",
    },
    {
        key: ["lübnan", "lebanon"],
        value: "lebanon",
    },
    {
        key: ["liberya", "liberia"],
        value: "liberia",
    },
    {
        key: ["libya"],
        value: "libya",
    },
    {
        key: ["sri lanka"],
        value: "sri lanka",
    },
    {
        key: ["lesotho"],
        value: "lesotho",
    },
    {
        key: ["litvanya", "lithuania"],
        value: "lithuania",
    },
    {
        key: ["lüksemburg", "luxembourg"],
        value: "luxembourg",
    },
    {
        key: ["letonya", "latvia"],
        value: "latvia",
    },
    {
        key: ["fas", "morocco"],
        value: "morocco",
    },
    {
        key: ["moldova"],
        value: "moldova",
    },
    {
        key: ["madagaskar", "madagascar"],
        value: "madagascar",
    },
    {
        key: ["meksika", "mexico"],
        value: "mexico",
    },
    {
        key: ["makedonya", "macedonia"],
        value: "macedonia",
    },
    {
        key: ["mali"],
        value: "mali",
    },
    {
        key: ["myanmar"],
        value: "myanmar",
    },
    {
        key: ["karadağ"],
        value: "montenegro",
    },
    {
        key: ["moğolistan", "mongolia"],
        value: "mongolia",
    },
    {
        key: ["mozambik", "mozambique"],
        value: "mozambique",
    },
    {
        key: ["moritanya", "mauritania"],
        value: "mauritania",
    },
    {
        key: ["malawi"],
        value: "malawi",
    },
    {
        key: ["malezya", "malaysia"],
        value: "malaysia",
    },
    {
        key: ["namibya", "namibia"],
        value: "namibia",
    },
    {
        key: ["nijer", "niger"],
        value: "niger",
    },
    {
        key: ["nijerya", "nigeria"],
        value: "nigeria",
    },
    {
        key: ["nikaragua", "nicaragua"],
        value: "nicaragua",
    },
    {
        key: ["norveç", "norway"],
        value: "norway",
    },
    {
        key: ["namibya", "namibia"],
        value: "namibia",
    },
    {
        key: ["nepal"],
        value: "nepal",
    },
    {
        key: ["umman", "oman"],
        value: "oman",
    },
    {
        key: ["pakistan"],
        value: "pakistan",
    },
    {
        key: ["panama"],
        value: "panama",
    },
    {
        key: ["peru"],
        value: "peru",
    },
    {
        key: ["filipinler", "philippines"],
        value: "philippines",
    },
    {
        key: ["papua yeni gine", "papua new guinea"],
        value: "papua new guinea",
    },
    {
        key: ["polonya", "poland"],
        value: "poland",
    },
    {
        key: ["kuzey kore", "north korea"],
        value: "north korea",
    },
    {
        key: ["paraguay"],
        value: "paraguay",
    },
    {
        key: ["filistin", "palestine"],
        value: "palestine",
    },
    {
        key: ["katar", "qatar"],
        value: "qatar",
    },
    {
        key: ["romanya", "romania"],
        value: "romania",
    },
    {
        key: ["ruanda", "rwanda"],
        value: "rwanda",
    },
    {
        key: ["batı sahra", "western sahara"],
        value: "western sahara",
    },
    {
        key: ["arabistan", "suudi arabistan", "saudi arabia"],
        value: "saudi arabia",
    },
    {
        key: ["sudan"],
        value: "sudan",
    },
    {
        key: ["güney sudan", "south sudan"],
        value: "south sudan",
    },
    {
        key: ["senegal"],
        value: "senegal",
    },
    {
        key: ["sierra leone"],
        value: "sierra leone",
    },
    {
        key: ["el salvador"],
        value: "el salvador",
    },
    {
        key: ["sırbistan", "serbia"],
        value: "serbia",
    },
    {
        key: ["surinam", "suriname"],
        value: "suriname",
    },
    {
        key: ["slovakya", "slovakia"],
        value: "slovakia",
    },
    {
        key: ["slovenya", "slovenia"],
        value: "slovenia",
    },
    {
        key: ["isveç", "sweden"],
        value: "sweden",
    },

];

const enteredCountryList = [];

function fill(country) {

    // we have country map for searching easily, if there is so map it.
    let i = 0;
    const length = countryList.length;

    while (i < length) {
        if (countryList[i].key.includes(country)) {

            if (!enteredCountryList.includes(countryList[i].value)) {

                pathes = document
                    .getElementById(WORLD_MAP_SVG)
                    .getElementsByClassName(countryList[i].value);


                Array.from(pathes).forEach((el) => {
                    el.setAttribute("style", "fill: #66FF66");
                });

                enteredCountryList.push(countryList[i].value);
                resetTextInput();
                showCountryProgress();
            }
        }
        i++;
    }
}

function resetTextInput() {
    document.getElementById("country").value = "";
}

function showCountryProgress() {
    document.getElementById("guessed-country").textContent = enteredCountryList.length;
    //document.getElementById("guessed-country").animate([ {fontSize: '1.2rem'}, {fontSize: '1rem'}], {  duration: 1000});
    document.getElementById("country-progress").textContent = "/" + countryList.length + " guessed";
}

function initialCountryProgress() {
    document.getElementById("guessed-country").textContent = enteredCountryList.length;
    document.getElementById("country-progress").textContent = "/" + countryList.length + " guessed";

}