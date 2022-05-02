// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()

// Nombre = initialisation lors de l'ouverture de la fenêtre
const params = {
  nombre_ellipse: 3,
  Download_Image: () => save()
}

               // gui.add (params, "Nom du paramètre", minimum, maximum, pas)
               gui.add(params, 'nombre_ellipse', 1, 50, 1)


// -------------------
//    Initialization
// -------------------

var tweets;
var filteredTweet = [];
var notHappening = [];
var notUs = [];
var notBad = [];
var solutionNotWorking = [];
var scienceUnreliable = [];

var author = [
  'capitalresearch', 'ceidotorg',       'NationalCenter',  'ReasonFdn',
  'ACSHorg',         'CatoInstitute',   'CFACT',           'FoF_Liberty',
  'FraserInstitute', 'FreedomWorks',    'HeartlandInst',   'WilcoHeritage',
  'HudsonInstitute', 'ManhattanInst',   'WAPolicyCente',   'ClimateSkeptic',
  'ClimateAudit',    'GalileoMovement', 'hockeyschtick1',  'JoanneNova',
  'JunkScience',     'MasterResource',  'ManicBeancount',  'NOconsensus',
  'NoTricksZone',    'RogTallbloke',    'wattsupwiththat', 'Fromaway21',
  'IowaClimate',     'thegwpfcom',      'WEschenbach',     'msroberts0619',
  'GasPriceWizard',  'MAVERIC22440705', 'BjornLomborg',    'PeterDClack',
  'socratesccost',   'rglover',         'TreforJones2',    'LukeStPaul1',
  'KHerriage',       'JaggerMickOZ',    'ClimatePoet',     'ClimateRealists'
];

// ReasonFdn, ACSHorg, FoF_Liberty, FraserInstitute, WilcoHeritage,
// HudsonInstitute, ManhattanInst, WAPolicyCente, GalileoMovement,
// hockeyschtick1, JoanneNova, MasterResource, NOconsensus, thegwpfcom,
// msroberts0619

function preload() {
  tweets = loadJSON('../src/tweetszkm_202203.json');
}

function setup() {
  // Filter tweets without category
  for (var i = 0; i < 5364; ++i) {
    if (tweets[i]['category'] && tweets[i]['category'] != '0_0')
      filteredTweet.push(tweets[i])
  }
  // console.log(filteredTweet)


  // Filter tweets according category

  // 1) It's not happening
  notHappening = filteredTweet.filter((a) => {
    if ((a.category).includes('1_')) {
      return a
    }
  });
  console.log(notHappening)

  // 2) It's not us
  notUs = filteredTweet.filter((a) => {
    if ((a.category).includes('2_')) {
      return a
    }
  });
  console.log(notUs)

  // 3) It's not bad
  notBad = filteredTweet.filter((a) => {
    if ((a.category).includes('3_')) {
      return a
    }
  });
  console.log(notBad)

  // 4) Solutions won't work
  solutionNotWorking = filteredTweet.filter((a) => {
    if ((a.category).includes('4_')) {
      return a
    }
  });
  console.log(solutionNotWorking)

  // 5) Climate science/scientists are unreliable
  scienceUnreliable = filteredTweet.filter((a) => {
    if ((a.category).includes('5_')) {
      return a
    }
  });
  console.log(scienceUnreliable)


  // filter with author
  for (var i = 0; i < author.length; i++) {
    let x = filteredTweet.filter((a) => {
      if (a.author == author[i]) {
        return a
      }
    });
    // console.log(x)
  }

  p6_CreateCanvas()
}

function windowResized() {
  p6_ResizeCanvas()
}


// -------------------
//       Drawing
// -------------------

function draw() {
  background(30, 10, 60)
  blendMode(LIGHTEST)

  // pos
  var x = 100
  var y = -50
  // color
  var r = 50
  var g = 60
  var b = 40


  // 1) It's not happening
  for (var i = 0; i < author.length; i++) {
    let elements = notHappening.filter((a) => {
      if (a.author == author[i]) {
        return a
      }
    });
    fill(r + i * 5, g + 1 * 2, b + i * 6)
    rect(x, y, 30, elements.length * 2)
    y += elements.length * 2
  }

  // 2) It's not us
  y = -50
  x += 50
  for (var i = 0; i < author.length; i++) {
    let elements = notUs.filter((a) => {
      if (a.author == author[i]) {
        return a
      }
    });
    fill(255, 255, 255)
    rect(x, y, 30, elements.length * 2)
    y += elements.length * 2
  }

  // 3) It's not bad
  y = -50
  x += 50
  for (var i = 0; i < author.length; i++) {
    let elements = notBad.filter((a) => {
      if (a.author == author[i]) {
        return a
      }
    });
    rect(x, y, 30, elements.length * 2)
    y += elements.length * 2
  }

  // 4) Solutions won't work
  y = -50
  x += 50
  for (var i = 0; i < author.length; i++) {
    let elements = solutionNotWorking.filter((a) => {
      if (a.author == author[i]) {
        return a
      }
    });
    rect(x, y, 30, elements.length * 2)
    y += elements.length * 2
  }

  // 5) Climate science/scientists are unreliable
  y = -50
  x += 50
  for (var i = 0; i < author.length; i++) {
    let elements = scienceUnreliable.filter((a) => {
      if (a.author == author[i]) {
        return a
      }
    });
    rect(x, y, 30, elements.length * 2)
    y += elements.length * 2
  }
}