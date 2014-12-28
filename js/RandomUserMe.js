var professions = [
    "Stockbroker",
    "Jewelry Maker",
    "Carpenter",
    "Network Admin",
    "Operations Specialist",
    "Parachutist",
    "Food Preparer",
    "IT Professor",
    "Police Officer",
    "Early Head Start Director",
    "Boiler Room Operator",
    "Food Safety Scientist",
    "Certified Corporate Travel Executive",
    "Sociologist",
    "Highway Maintainer",
    "Command Post Craftsman",
    "Non-Morse Intercept Technician",
    "Orthopedic Podiatrist",
    "Information Systems Analyst",
    "Gas Distribution and Emergency Clerk",
    "Correctional Sergeant",
    "Circuit Design Engineer",
    "Urban Planning Professor",
    "Cabinetmaker",
    "Industrial Psychologist",
    "Livestock Buyer",
    "Soil Fertility Extension Specialist",
    "Shingles Roofer",
    "Political Theory Professor",
    "Goat Herder",
    "Radio Television Technical Director",
    "Segmental Paver Installer",
    "Physical Chemistry Professor",
    "Counterintelligence (Ci)/Human Source Intelligence (Humint) Officer",
    "Staff Readiness Officer (Antisubmarine Warfare)",
    "News Video Editor",
    "An/Bqq-6 Trident Level Ii Journeyman Operation And Maintenance Technician",
    "Occupational Therapist Assistants",
    "Piano Performance and Pedagogy Professor",
    "Industrial Psychology Professor",
    "Dredge Mate",
    "Tire Finisher",
    "Wildland Firefighter",
    "Ultrasonic Welding Machine Operator",
    "Commissioner of Internal Revenue",
    "Hospital Administrator",
    "Community Mental Health Social Worker",
    "Soldering Machine Tender",
    "Product Safety Engineer",
    "Environmental Remediation Engineering Technician",
    "Childcare Aide",
    "Gas Storage Operator",
    "Milk Pasteurizer",
    "Podiatric Medicine Professor",
    "Beveller Operator",
    "House Wirer Helper",
    "Commercial Specialist",
    "Tank Officer",
    "Quarry Plug and Feather Driller"
];

var interests = [
    "horror films",
    "dogs",
    "cats",
    "preparing for the downfall of civilization",
    "adventure games",
    "history documentaries",
    "sledding",
    "archery",
    "vampires",
    "sheep",
    "beetles",
    "television mystery shows",
    "economics",
    "pottery",
    "parrots",
    "MMORPGs",
    "woodworking",
    "social justice",
    "Alice in Wonderland",
    "television mystery shows",
    "tea sets and classical theater",
    "science fiction movies",
    "postage stamps",
    "old sailing ships",
    "padlocks",
    "sharks",
    "squid",
    "zombie films",
    "merpeople",
    "western novels",
    "magic wands",
    "gangster movies",
    "space exploration",
    "foxes",
    "classical theater",
    "unicorns",
    "pigeons",
    "turtles"
];

var seeking = [
    "Relationship",
    "Friends",
    "Dating",
    "Marriage"
];

function randFromArr(arr) {
    "use strict";
    var item = arr[Math.floor(Math.random() * arr.length)];
    return item;
}

function randInterests(interests) {
    "use strict";
    var random = Math.floor((Math.random() * 3) + 1);
    var interestsArr = [];
    console.log("random was: " + random);
    for (var i = 0; i <= random; i++) {
        console.log("interestsArr: " + interestsArr);
        var interestGenerated = randFromArr(interests);
        console.log("initial interest: " + interestGenerated);
        if (jQuery.inArray(interestGenerated, interestsArr) === -1) {
            console.log("adding " + interestGenerated + " to interestsArr");
            interestsArr.push(interestGenerated);
        } else if (jQuery.inArray(interestGenerated, interestsArr) !== -1) {
            while (jQuery.inArray(interestGenerated, interestsArr) !== -1) {
                console.log("****** interestGenerated " + interestGenerated + " already in interestsArr");
                var interestGenerated2 = randFromArr(interests);
                console.log("interestGenerated2 was " + interestGenerated2);
                if (interestGenerated2 !== interestGenerated) {
                    interestsArr.push(interestGenerated2);
                    break;
                }
            }
        }
    }
    return interestsArr;
}

for (var i=0; i <= 10; i++) {
    //console.log(randFromArr(professions));
    console.log(randInterests(interests));
}



$(document).ready (function() {
    "use strict";
    //$("<h4/>").text('foo').appendTo("body");
    //console.log("foo");
    $.ajax({
        url: "http://api.randomuser.me",
        dataType: 'json',
        success: function(data) {
            console.log(data.results[0].user); //male
            var last = data.results[0].user.name.last;
            last = last.charAt(0).toUpperCase() + last.substring(1);
            var first = data.results[0].user.name.first;
            first = first.charAt(0).toUpperCase() + first.substring(1);
            var email = data.results[0].user.email;
            var gender = data.results[0].user.gender;
            gender = gender[0].toUpperCase();
            //$("body").append(data.results[0].user.dob);
            var birthday = new Date(data.results[0].user.dob * 1000);
            birthday = birthday.getMonth()+1+'/'+(birthday.getDay()+1)+'/19'+birthday.getYear();
            //$("body").append(birthday.getMonth()+1+'/'+(birthday.getDay()+1)+'/19'+birthday.getYear());
            var profession = randFromArr(professions);
            //$("body").append(profession);
            var city = data.results[0].user.location.city;
            city = city.charAt(0).toUpperCase() + city.substring(1);
            //city = city.split("");
            //city[0] = city[0].toUpperCase();
            //city = city.join("");
            var state = data.results[0].user.location.state;
            //state = state.split("");
            //state[0] = state[0].toUpperCase();
            //state = state.join("");
            state = state.charAt(0).toUpperCase() + state.substring(1);
            var location = city + ", " + state;
            //$("body").append(location);
            //status
            var pickedStatus = randFromArr(seeking);
            var pickedInterests = randInterests(interests);
            //$("body").append(pickedInterests);
            //var dob = new Date(data.results[0].user.dob);
            //$("body").append(dob);
            var pickedSeeking = randFromArr(seeking);
            //$("body").append(pickedSeeking);

            $(".InsertStmt").append("INSERT INTO my_contacts" + "<br>");
            $(".InsertStmt").append("(last_name, first_name, email, gender, birthday, " +
                "profession, location, status, interests, seeking)" + "<br>");
            $(".InsertStmt").append("VALUES" + "<br>");
            $(".InsertStmt").append("('" + last + "', " + "'" + first + "', " + "'" + email + "', " +
            "'" + gender + "', " + "'" + birthday + "', " + "'" + profession + "', " + "'" + location +
            "', " + "'" + pickedStatus + "', " + "'" + pickedInterests + "', " +
            "'" + pickedSeeking + "')\;");
        }
    });
});