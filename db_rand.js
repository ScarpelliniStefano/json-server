// events.js
var faker = require('faker/locale/it');

function generateEvents () {
  var events = [];
    //var number_loc=faker.datatype.number(7914);
    let url = "https://comuni-ita.herokuapp.com/api/comuni";

	let settings = { method: "Get" };
	const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
	fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        var result = [];

        for(var i in json)
            result.push(json[i]);
  		for (var id = 1; id <= 100; id++) {
    		var title = faker.name.title();
    		var description = faker.lorem.sentence();
	

            var paeseIndex = faker.datatype.number({
                'min': 0,
                'max': result.length-1
            });

            //console.log(json[paeseIndex]);
            var location=json[paeseIndex];
            //console.log(location.nome);
   

    var type1=faker.random.arrayElement(["1.1.1","1.1.2","1.1.3","1.2.1","1.2.2","1.2.3","1.2.4","1.3.1","1.3.3","1.4.1","1.4.2","1.4.3","1.4.4",
    									"2.1","2.2","2.3","2.4","2.5","2.6","2.7","3.1","3.2","3.3","3.4","3.5"]);
	var type2=faker.random.arrayElement(["1.1.1","1.1.2","1.1.3","1.2.1","1.2.2","1.2.3","1.2.4","1.3.1","1.3.3","1.4.1","1.4.2","1.4.3","1.4.4",
    									"2.1","2.2","2.3","2.4","2.5","2.6","2.7","3.1","3.2","3.3","3.4","3.5"]);
    var datetime=faker.date.future(2);
    
    var dataAAAA=datetime.getFullYear();
    var dataMM=datetime.getMonth()+1;
    var dataGG=datetime.getDate();
    var ora=datetime.getHours().toString().length<2?"0"+datetime.getHours().toString():datetime.getHours().toString();
    var minuti=datetime.getMinutes().toString().length<2?"0"+datetime.getMinutes().toString():datetime.getMinutes().toString();
    var timeEv=ora+":"+minuti;
    var managerId=faker.datatype.number({min:1, max:4});
    var urlImage=faker.image.imageUrl();
    var totSeat=faker.datatype.number({min:50, max:100});
    events.push({
      "id": id,
      "title": title,
      "description": description,
      "location": location.nome+"-"+location.provincia+"-"+location.regione,
      "types": 
      [
      	{"type":type1},
      	{"type":type2}
      ],
      "dataAAAA": dataAAAA,
      "dataMM": dataMM,
      "dataGG": dataGG,
      "time": timeEv,
      "managerId": managerId,
      "urlImage": urlImage,
      "freeSeat": totSeat,
      "totSeat": totSeat
    })
  } 
  
  });
  return events
};


function generateUsers () {
  var users = [];
    //var number_loc=faker.datatype.number(7914);
    let url = "https://comuni-ita.herokuapp.com/api/comuni";

	let settings = { method: "Get" };
	const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
	fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        var result = [];

        for(var i in json)
            result.push(json[i]);
  		for (var id = 1; id <= 5000; id++) {
    		var name = faker.name.firstName();
    		var surname = faker.name.lastName();
            var paeseIndex = faker.datatype.number({
                'min': 0,
                'max': result.length-1
            });

            //console.log(json[paeseIndex]);
            var location=json[paeseIndex];
            //console.log(location.nome);
   

    var type1=faker.random.arrayElement(["1.1.1","1.1.2","1.1.3","1.2.1","1.2.2","1.2.3","1.2.4","1.3.1","1.3.3","1.4.1","1.4.2","1.4.3","1.4.4",
    									"2.1","2.2","2.3","2.4","2.5","2.6","2.7","3.1","3.2","3.3","3.4","3.5"]);
	var type2=faker.random.arrayElement(["1.1.1","1.1.2","1.1.3","1.2.1","1.2.2","1.2.3","1.2.4","1.3.1","1.3.3","1.4.1","1.4.2","1.4.3","1.4.4",
    									"2.1","2.2","2.3","2.4","2.5","2.6","2.7","3.1","3.2","3.3","3.4","3.5"]);
    var type3=faker.random.arrayElement(["1.1.1","1.1.2","1.1.3","1.2.1","1.2.2","1.2.3","1.2.4","1.3.1","1.3.3","1.4.1","1.4.2","1.4.3","1.4.4",
    									"2.1","2.2","2.3","2.4","2.5","2.6","2.7","3.1","3.2","3.3","3.4","3.5"]);
    var datetime=faker.date.past(80,'2004-01-01');
    
    var dataAAAA=datetime.getFullYear();
    var dataMM=datetime.getMonth()+1;
    var dataGG=datetime.getDate();
    var sex=faker.random.arrayElement(["M","F"]);
    
    users.push({
      "id": id,
      "name": name,
      "surname": surname,
      "sex":sex,
      "dateOfBirth": dataGG+"/"+dataMM+"/"+dataAAAA,
      "residence": location.nome+"-"+location.provincia+"-"+location.regione,
      "types": [
        {
          "type": type1
        },
        {
          "type": type2
        },
        {
          "type": type3
        }
      ],
      "mail": faker.internet.email(),
      "password": faker.internet.password()

    })
  } 
  
  });
  return users 
};

function generateStatic_also () {
  return { "events": generateEvents(), "users": generateUsers() , "managers": [
    {
      "id": 1,
      "name": "Carletto",
      "surname": "Fracci",
      "dateOfBirth": "31/12/1969",
      "residence": "Milano (MI)",
      "codicePIVA": "hshdkdh7296dbss",
      "RagioneSociale": "The Best Entertainment SRL",
      "mail": "carletto.TheBestEnter@gmail.com",
      "password": "carloBestEnter"
    },
    {
      "id": 2,
      "name": "Fabio",
      "surname": "Frizzi",
      "dateOfBirth": "01/04/1986",
      "residence": "Bergamo (BG)",
      "codicePIVA": "ahdkdb777djdoeb",
      "RagioneSociale": "Mystic SRL di Fabio Frizzi",
      "mail": "fabio.MysticSRL@gmail.com",
      "password": "fabioMSRL"
    },
    {
      "id": 3,
      "name": "Carlo",
      "surname": "Ancelotti",
      "dateOfBirth": "01/04/1986",
      "residence": "Milano (MI)",
      "codicePIVA": "knsdkSND83984748higdH",
      "RagioneSociale": "FreeStyle SNC di Ancelotti C",
      "mail": "carlo.FreeStyle@gmail.com",
      "password": "carloFree"
    },
    {
      "id": 4,
      "name": "Marta",
      "surname": "Marziala",
      "dateOfBirth": "01/05/1963",
      "residence": "Brescia (BS)",
      "codicePIVA": "ieubd7978djgh",
      "RagioneSociale": "M&Ms",
      "mail": "m.marziala.MM@gmail.com",
      "password": "martaMM"
    }
  ],
  
  "admins": [
    {
      "id": 1,
      "mail": "admin@gmail.com",
      "password": "administrator"
    }
  ],
  
  "ticketInspectors": [
    {
      "id":1,
      "code": "TI-1-0237",
      "full name": "Franco Ciccio",
      "eventId": 1,
      "password": "atyz94q"
    },
    {
      "id":2,
      "code": "TI-1-0235",
      "full name": "Luca Ward",
      "eventId": 1,
      "password": "tayz94q"
    },
    {
      "id":3,
      "code": "TI-2-0732",
      "full name": "Ciccio Franco",
      "eventId": 2,
      "password": "qwer12ty"
    },
    {
      "id":4,
      "code": "TI-3-0237",
      "full name": "Ward Luca",
      "eventId": 3,
      "password": "ytre09wq"
    }
  ],
  
  "bookings": [
    {
      "id": 1,
      "userId": 1,
      "eventId": 2,
      "prenotedSeat": 3
    }
  ],
    
  "sponsor": [
    {
      "id": 1,
      "userId": 1,
      "eventId": 2
    },
    {
      "id": 2,
      "userId": 1,
      "eventId": 1
    },
    {
      "id": 3,
      "userId": 3,
      "eventId": 3
      
    }
  ]
} };




module.exports=generateStatic_also;



