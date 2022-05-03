// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()

// Nombre = initialisation lors de l'ouverture de la fenêtre
const params = {
  capitalresearch: true,
  ceidotorg: true,
  NationalCenter: true,
  CatoInstitute: true,
  CFACT: true,
  FreedomWorks: true,
  Download_Image: () => save()
}

               // gui.add (params, "Nom du paramètre", minimum, maximum, pas)
               gui.add(params, 'capitalresearch')
gui.add(params, 'ceidotorg')
gui.add(params, 'NationalCenter')
gui.add(params, 'CatoInstitute')
gui.add(params, 'CFACT')
gui.add(params, 'FreedomWorks')


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

var author2 = [
  'capitalresearch', 'ceidotorg',       'NationalCenter',  'CatoInstitute',
  'CFACT',           'FreedomWorks',    'HeartlandInst',   'ClimateSkeptic',
  'ClimateAudit',    'JunkScience',     'ManicBeancount',  'NoTricksZone',
  'RogTallbloke',    'wattsupwiththat', 'Fromaway21',      'IowaClimate',
  'WEschenbach',     'GasPriceWizard',  'MAVERIC22440705', 'BjornLomborg',
  'PeterDClack',     'socratesccost',   'rglover',         'TreforJones2',
  'LukeStPaul1',     'KHerriage',       'JaggerMickOZ',    'ClimatePoet',
  'ClimateRealists'
];

// ReasonFdn, ACSHorg, FoF_Liberty, FraserInstitute, WilcoHeritage,
// HudsonInstitute, ManhattanInst, WAPolicyCente, GalileoMovement,
// hockeyschtick1, JoanneNova, MasterResource, NOconsensus, thegwpfcom,
// msroberts0619

var colors =
    [
      '#012305', '#123150', '#234300', '#345618', '#456729', '#567810',
      '#67892B', '#789A0C', '#89AB02', '#9ABC4E', '#012305', '#123456',
      '#234567', '#345608', '#456789', '#56789A', '#67890B', '#780A0C',
      '#89A0C1', '#9AB0DE', '#012345', '#123456', '#234567', '#345678',
      '#456780', '#567890', '#6789A0', '#789ABC', '#89ABC0', '#9A1C0E',
      '#012345', '#123426', '#204507', '#345078', '#456719', '#56780A',
      '#60890B', '#7090BC', '#80AB1D', '#90B0DE', '#005000', '#10230F',
      '#123456', '#234267'
    ]

    function
    preload() {
      tweets = loadJSON('../src/tweetszkm_202203.json');
    }

function
setup() {
  // Filter tweets without category
  for (var i = 0; i < 5364; ++i) {
    if (tweets[i]['category'] && tweets[i]['category'] != '0_0')
      filteredTweet.push(tweets[i])
  }

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

  p6_CreateCanvas()
}

function
windowResized() {
  p6_ResizeCanvas()
}


// -------------------
//       Drawing
// -------------------

function
draw() {
  background(255, 255, 255)
  blendMode(LIGHTEST)


  // 1) It's not happening
  var x = -100
  var y = 200
  displayBarGraph(x, y, notHappening)

  // 2) It's not us
  y = 200
  x += 50
  displayBarGraph(x, y, notUs)

  // 3) It's not bad
  y = 200
  x += 50
  displayBarGraph(x, y, notBad)

  // 4) Solutions won't work
  y = 200
  x += 50
  displayBarGraph(x, y, solutionNotWorking)

  // 5) Climate science/scientists are unreliable
  y = 200
  x += 50
  displayBarGraph(x, y, scienceUnreliable)
}

function displayBarGraph(x, y, category) {
  for (var i = 0; i < author2.length; i++) {
    let elements = category.filter((a) => {
      if (a.author == author2[i] && params[author2[i]] == true) {
        return a
      }
    });
    y -= elements.length * 2
    fill(colors[i])
    rect(x, y, 30, elements.length * 2)
  }
}