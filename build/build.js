var gui = new dat.GUI();
var params = {
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
    Download_Image: function () { return save(); }
};
gui.add(params, 'BjornLomborg');
gui.add(params, 'capitalresearch');
gui.add(params, 'CatoInstitute');
gui.add(params, 'ceidotorg');
gui.add(params, 'CFACT');
gui.add(params, 'ClimateAudit');
gui.add(params, 'ClimatePoet');
gui.add(params, 'ClimateRealists');
gui.add(params, 'ClimateSkeptic');
gui.add(params, 'FreedomWorks');
gui.add(params, 'Fromaway21');
gui.add(params, 'GasPriceWizard');
gui.add(params, 'HeartlandInst');
gui.add(params, 'IowaClimate');
gui.add(params, 'JunkScience');
gui.add(params, 'JaggerMickOZ');
gui.add(params, 'KHerriage');
gui.add(params, 'LukeStPaul1');
gui.add(params, 'ManicBeancount');
gui.add(params, 'MAVERIC22440705');
gui.add(params, 'NationalCenter');
gui.add(params, 'NoTricksZone');
gui.add(params, 'PeterDClack');
gui.add(params, 'rglover');
gui.add(params, 'RogTallbloke');
gui.add(params, 'socratesccost');
gui.add(params, 'TreforJones2');
gui.add(params, 'wattsupwiththat');
gui.add(params, 'WEschenbach');
var tweets;
var filteredTweet = [];
var notHappening = [];
var notUs = [];
var notBad = [];
var solutionNotWorking = [];
var scienceUnreliable = [];
var author2 = [
    'BjornLomborg', 'capitalresearch', 'CatoInstitute', 'ceidotorg',
    'CFACT', 'ClimateAudit', 'ClimatePoet', 'ClimateRealists',
    'ClimateSkeptic', 'FreedomWorks', 'Fromaway21', 'GasPriceWizard',
    'HeartlandInst', 'IowaClimate', 'JaggerMickOZ', 'JunkScience',
    'KHerriage', 'LukeStPaul1', 'ManicBeancount', 'MAVERIC22440705',
    'NationalCenter', 'NoTricksZone', 'PeterDClack', 'rglover',
    'RogTallbloke', 'socratesccost', 'TreforJones2', 'wattsupwiththat',
    'WEschenbach'
];
var colors = [
    '#c7ebfa', '#e9b0d8', '#f3e5a5', '#bbb1f3', '#c0f3d1', '#e8a7ad',
    '#97d1ee', '#d774b5', '#eacf64', '#8572e3', '#8ce6a8', '#d46166',
    '#b7e2f6', '#e39ccc', '#f1de8e', '#a99ced', '#adefc4', '#f2ccd1',
    '#d8f3fe', '#efc4e3', '#f7ecbd', '#ccc6f8', '#d3f7df', '#dd848a',
    '#a7daf1', '#dd87c0', '#eed679', '#9787e8', '#9cebb6'
];
var subCategories = [
    {
        name: 'It\'s not happening',
        subCategory: ['1', '2', '3', '4', '5', '6', '7', '8']
    },
    { name: 'It\'s not us', subCategory: ['1', '2', '3', '4', '5'] },
    { name: 'It\'s not bad', subCategory: ['1', '2', '3', '4', '5', '6'] },
    { name: 'Solutions won\'t work', subCategory: ['1', '2', '3', '4', '5'] }, {
        name: 'Climate science/scientists are unreliable',
        subCategory: ['1', '2', '3']
    }
];
var Y_AXIS = 1;
var X_AXIS = 2;
var mauve_color, purple_color, color1, color2;
function preload() {
    tweets = loadJSON('../../tweetszkm_202203.json');
}
function setup() {
    for (var i = 0; i < 5364; ++i) {
        if (tweets[i]['category'] && tweets[i]['category'] != '0_0')
            filteredTweet.push(tweets[i]);
    }
    notHappening = filteredTweet.filter(function (a) {
        if ((a.category).includes('1_')) {
            return a;
        }
    });
    notUs = filteredTweet.filter(function (a) {
        if ((a.category).includes('2_')) {
            return a;
        }
    });
    notBad = filteredTweet.filter(function (a) {
        if ((a.category).includes('3_')) {
            return a;
        }
    });
    solutionNotWorking = filteredTweet.filter(function (a) {
        if ((a.category).includes('4_')) {
            return a;
        }
    });
    scienceUnreliable = filteredTweet.filter(function (a) {
        if ((a.category).includes('5_')) {
            return a;
        }
    });
    p6_CreateCanvas();
    mauve_color = color(96, 100, 235);
    purple_color = color(35, 12, 53);
}
function windowResized() {
    p6_ResizeCanvas();
}
var MyElement = (function () {
    function MyElement(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    return MyElement;
}());
var hoverElement;
var seed = 0;
function draw() {
    randomSeed(seed);
    background(255, 255, 255);
    setGradient(-width, -height, 2 * width, 2 * height, mauve_color, purple_color, Y_AXIS);
    noStroke();
    textFont('Outfit');
    hoverElement = new MyElement(0, 0, 0, 0, '#FFFFFF');
    var x = 600;
    var y = 420;
    displayBarGraph(x, y, notHappening);
    displayBarLegend(x, y + 45, 'It\'s not happening');
    displayBarSubCategory(x + 40, y, notHappening, 0);
    y += 70;
    displayBarGraph(x, y, notUs);
    displayBarLegend(x, y + 45, 'It\'s not us');
    displayBarSubCategory(x + 40, y, notUs, 1);
    y += 70;
    displayBarGraph(x, y, notBad);
    displayBarLegend(x, y + 45, 'It\'s not bad');
    displayBarSubCategory(x + 40, y, notBad, 2);
    y += 70;
    displayBarGraph(x, y, solutionNotWorking);
    displayBarLegend(x, y + 45, 'Solutions won\'t work');
    displayBarSubCategory(x + 40, y, solutionNotWorking, 3);
    y += 70;
    displayBarGraph(x, y, scienceUnreliable);
    displayBarLegend(x, y + 45, 'Climate science/scientists are unreliable');
    displayBarSubCategory(x + 40, y, scienceUnreliable, 4);
    fill(254, 254, 254);
    textAlign(LEFT, BASELINE);
    textSize(30);
    text('Climate misinformation tweets', 90, 100);
    textSize(18);
    fill(254, 254, 254, 200);
    textStyle(NORMAL);
    text('Distribution of tweets by author according to their category', 90, 130);
    fill(254, 254, 254, 150);
    textSize(16);
    textAlign(RIGHT, BASELINE);
    text('Categories', x, y + 80);
    textAlign(LEFT, BASELINE);
    text('Sub-categories', x + 40, y + 80);
    fill(254, 254, 254, 150);
    textSize(12);
    textAlign(RIGHT, BASELINE);
    text('Candice BRANCHEREAU', 1200, 100);
    text('Laura BONHOMME', 1200, 120);
    drawHoverElement(hoverElement);
}
function displayBarGraph(x, y, category) {
    for (var i = 0; i < author2.length; i++) {
        var elements = category.filter(function (a) {
            if (a.author == author2[i] && params[author2[i]] == true) {
                return a;
            }
        });
        x -= elements.length * 2;
        fill(colors[i]);
        rect(x, y, elements.length * 2, 30);
        if (mouseX > (x) && mouseX < (x + elements.length * 2) && mouseY > (y) &&
            mouseY < (y + 30)) {
            randomSeed(seed);
            var randomTweetId = random(0, elements.length);
            displayAuthorInfo(author2[i], elements.length);
            displayAuthorRandomTweet(elements, randomTweetId);
            hoverElement = new MyElement(x, y, elements.length * 2, 30, colors[i]);
        }
    }
}
function displayBarLegend(x, y, title) {
    textAlign(RIGHT, BASELINE);
    textSize(12);
    fill(254, 254, 254);
    text(title, x, y);
}
function displayBarSubCategory(x, y, category, id) {
    for (var i = 0; i < subCategories[id].subCategory.length; i++) {
        var elements = category.filter(function (a) {
            if (a.category[2] == subCategories[id].subCategory[i]) {
                return a;
            }
        });
        if (elements.length > 0) {
            fill(255, 255, 255, 150);
            rect(x, y, elements.length * 2, 30);
            x += elements.length * 2 + 4;
        }
        if (mouseX > (x - elements.length * 2) && mouseX < (x) && mouseY > (y) &&
            mouseY < (y + 30)) {
            textAlign(CENTER, CENTER);
            fill(254, 254, 254, 255);
            text(elements.length, x - elements.length - 4, y + 15);
            displaySubCategory(x - elements.length * 2 - 4, y + 45, getSubCategory(str(elements[0].category)));
            hoverElement =
                new MyElement(x - 4, y, -elements.length * 2, 30, '#fefefe00');
        }
    }
}
function displayAuthorInfo(name, nbTweets) {
    textAlign(LEFT, BASELINE);
    var x = 375;
    var y = 245;
    noStroke();
    textSize(16);
    text(name + ' : ' + nbTweets + ' tweets', x, y);
    stroke(254);
    fill(254, 254, 254, 20);
    rect(x - 10, y - 25, 510, 150);
    noStroke();
}
function displayAuthorRandomTweet(elements, randomTweetId) {
    var x = 375;
    var y = 275;
    textSize(12);
    fill(254, 254, 254, 150);
    text(getDate(str(elements[int(randomTweetId)].date)), x, y);
    text(getSubCategory(str(elements[int(randomTweetId)].category)), x + 100, y);
    fill(254, 254, 254);
    text(elements[int(randomTweetId)].text, x, y + 20, 500, 70);
}
function displaySubCategory(x, y, subCategory) {
    textAlign(LEFT, BASELINE);
    textSize(12);
    fill(254, 254, 254);
    text(subCategory, x, y);
}
function getSubCategory(category) {
    if (category == '1_1')
        return 'Ice isn\'t melting';
    else if (category == '1_2')
        return 'Heading into ice age';
    else if (category == '1_3')
        return 'Weather is cold';
    else if (category == '1_4')
        return 'Hiatus in warming';
    else if (category == '1_5')
        return 'Oceans are cooling';
    else if (category == '1_6')
        return 'Sea level rise is exaggerated';
    else if (category == '1_7')
        return 'Extremes aren\'t increasing';
    else if (category == '1_8')
        return 'Changed the name';
    else if (category == '2_1')
        return 'It\'s natural cycles';
    else if (category == '2_2')
        return 'Non-Greenhouse Gas forcings';
    else if (category == '2_3')
        return 'No evidence for Greenhouse Effect';
    else if (category == '3_1')
        return 'Sensitivity is low';
    else if (category == '3_2')
        return 'No species impact';
    else if (category == '3_3')
        return 'Not a pollutant';
    else if (category == '3_4')
        return 'Only a few degrees';
    else if (category == '3_5')
        return 'No link to conflict';
    else if (category == '3_6')
        return 'No health impacts';
    else if (category == '4_1')
        return 'Policies are harmful';
    else if (category == '4_2')
        return 'Policies are ineffective';
    else if (category == '4_3')
        return 'Too hard';
    else if (category == '4_4')
        return 'Clean energy won\'t work';
    else if (category == '4_5')
        return 'We need energy';
    else if (category == '5_1')
        return 'Science is unreliable';
    else if (category == '5_2')
        return 'Movement is unreliable';
    else if (category == '5_3')
        return 'Climate is conspiracy';
    else
        return 'nothing';
}
function getDate(date) {
    var dateFormated = date[6] + date[7] + '-' + date[4] + date[5] + '-' +
        date[0] + date[1] + date[2] + date[3];
    return dateFormated;
}
function drawHoverElement(hoverElement) {
    strokeWeight(2);
    stroke(254);
    fill(hoverElement.color);
    rect(hoverElement.x, hoverElement.y, hoverElement.width, hoverElement.height);
}
function keyTyped() {
    if (key == 'r') {
        seed++;
    }
}
function setGradient(x, y, w, h, color1, color2, axis) {
    noFill();
    if (axis === Y_AXIS) {
        for (var i = y; i <= y + h; i++) {
            var inter = map(i, y, y + h, 0, 1);
            var c = lerpColor(color1, color2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    }
    else if (axis === X_AXIS) {
        for (var i = x; i <= x + w; i++) {
            var inter = map(i, x, x + w, 0, 1);
            var c = lerpColor(color1, color2, inter);
            stroke(c);
            line(i, y, i, y + h);
        }
    }
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 0;
function __desiredCanvasWidth() { return windowWidth - __MARGIN_SIZE * 2; }
function __desiredCanvasHeight() {
    return windowHeight - __MARGIN_SIZE * 2;
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map