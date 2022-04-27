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
//       Drawing
// -------------------

function draw() {
  background('black')
}

// -------------------
//    Initialization
// -------------------

function setup() {
  p6_CreateCanvas()
}

function windowResized() {
  p6_ResizeCanvas()
}