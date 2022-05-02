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
  let notHappening = filteredTweet.filter((a) => {
    if ((a.category).includes('1_')) {
      return a
    }
  });
  console.log(notHappening)

  // 2) It's not us
  let notUs = filteredTweet.filter((a) => {
    if ((a.category).includes('2_')) {
      return a
    }
  });
  console.log(notUs)

  // 3) It's not bad
  let notBad = filteredTweet.filter((a) => {
    if ((a.category).includes('3_')) {
      return a
    }
  });
  console.log(notBad)

  // 4) Solutions won't work
  let solutionNotWorking = filteredTweet.filter((a) => {
    if ((a.category).includes('4_')) {
      return a
    }
  });
  console.log(solutionNotWorking)

  // 5) Climate science/scientists are unreliable
  let scienceUnreliable = filteredTweet.filter((a) => {
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
  background(30, 10, 60);
  blendMode(LIGHTEST)
}