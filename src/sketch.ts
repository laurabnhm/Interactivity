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
  HeartlandInst: true,
  ClimateSkeptic: true,
  ClimateAudit: true,
  JunkScience: true,
  ManicBeancount: true,
  NoTricksZone: true,
  RogTallbloke: true,
  wattsupwiththat: true,
  Fromaway21: true,
  IowaClimate: true,
  WEschenbach: true,
  GasPriceWizard: true,
  MAVERIC22440705: true,
  BjornLomborg: true,
  PeterDClack: true,
  socratesccost: true,
  rglover: true,
  TreforJones2: true,
  LukeStPaul1: true,
  KHerriage: true,
  JaggerMickOZ: true,
  ClimatePoet: true,
  ClimateRealists: true,
  Download_Image: () => save()
};

// gui.add (params, "Nom du paramètre", minimum, maximum, pas)
gui.add(params, 'BjornLomborg')
gui.add(params, 'capitalresearch')
gui.add(params, 'CatoInstitute')
gui.add(params, 'ceidotorg')
gui.add(params, 'CFACT')
gui.add(params, 'ClimateAudit')
gui.add(params, 'ClimatePoet')
gui.add(params, 'ClimateRealists')
gui.add(params, 'ClimateSkeptic')
gui.add(params, 'FreedomWorks')
gui.add(params, 'Fromaway21')
gui.add(params, 'GasPriceWizard')
gui.add(params, 'HeartlandInst')
gui.add(params, 'IowaClimate')
gui.add(params, 'JunkScience')
gui.add(params, 'JaggerMickOZ')
gui.add(params, 'KHerriage')
gui.add(params, 'LukeStPaul1')
gui.add(params, 'ManicBeancount')
gui.add(params, 'MAVERIC22440705')
gui.add(params, 'NationalCenter')
gui.add(params, 'NoTricksZone')
gui.add(params, 'PeterDClack')
gui.add(params, 'rglover')
gui.add(params, 'RogTallbloke')
gui.add(params, 'socratesccost')
gui.add(params, 'TreforJones2')
gui.add(params, 'wattsupwiththat')
gui.add(params, 'WEschenbach')


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

/*var author = [
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
];*/
// Les auteurs dont aucun des tweets n'est catégorisé
// ReasonFdn, ACSHorg, FoF_Liberty, FraserInstitute, WilcoHeritage,
// HudsonInstitute, ManhattanInst, WAPolicyCente, GalileoMovement,
// hockeyschtick1, JoanneNova, MasterResource, NOconsensus, thegwpfcom,
// msroberts0619

// author list filtered
var author2 = [
  'BjornLomborg',   'capitalresearch', 'CatoInstitute',  'ceidotorg',
  'CFACT',          'ClimateAudit',    'ClimatePoet',    'ClimateRealists',
  'ClimateSkeptic', 'FreedomWorks',    'Fromaway21',     'GasPriceWizard',
  'HeartlandInst',  'IowaClimate',     'JaggerMickOZ',   'JunkScience',
  'KHerriage',      'LukeStPaul1',     'ManicBeancount', 'MAVERIC22440705',
  'NationalCenter', 'NoTricksZone',    'PeterDClack',    'rglover',
  'RogTallbloke',   'socratesccost',   'TreforJones2',   'wattsupwiththat',
  'WEschenbach'
];

// colors for each author
var colors = [
  '#c7ebfa', '#e9b0d8', '#f3e5a5', '#bbb1f3', '#c0f3d1', '#e8a7ad',
  '#97d1ee', '#d774b5', '#eacf64', '#8572e3', '#8ce6a8', '#d46166',
  '#b7e2f6', '#e39ccc', '#f1de8e', '#a99ced', '#adefc4', '#f2ccd1',
  '#d8f3fe', '#efc4e3', '#f7ecbd', '#ccc6f8', '#d3f7df', '#dd848a',
  '#a7daf1', '#dd87c0', '#eed679', '#9787e8', '#9cebb6'
];

// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let mauve_color, purple_color, color1, color2;

function preload() {
  tweets = loadJSON('../src/tweetszkm_202203.json');
}

function setup() {
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

  // Define colors (linear gradient)
  mauve_color = color(96, 100, 235);
  purple_color = color(35, 12, 53);
}

function windowResized() {
  p6_ResizeCanvas()
}


// -------------------
//       Drawing
// -------------------

function draw() {
  background(255, 255, 255)
  /*setGradient(
      -width, -height, 2 * width, 2 * height, mauve_color, purple_color,
      Y_AXIS);*/
  noStroke()

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

function setGradient(x, y, w, h, color1, color2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(color1, color2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(color1, color2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}