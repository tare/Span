// Define your own anatomical annotation region categories:
//
// Note: the key "u" is reserved for the "Undefined" class (gray)
// i.e. "u": {"color":"gray","label":"Undefined"} will be added automatically

const AAR_CATEGORIES = {
  "q": {"color":"Orange","label":"Ventral horn"},
  "w": {"color":"Coral","label":"Medial grey"},
  "e": {"color":"OrangeRed","label":"Dorsal horn"},
  "r": {"color":"Brown","label":"Central canal"},
  "a": {"color":"DarkGreen","label":"Ventral medial white"},
  "s": {"color":"YellowGreen","label":"Ventral lateral white"},
  "d": {"color":"OliveDrab","label":"Medial lateral white"},
  "f": {"color":"DarkOliveGreen","label":"Dorsal medial white"},
  "z": {"color":"MediumSlateBlue","label":"Ventral edge"},
  "x": {"color":"DarkSlateBlue","label":"Lateral edge"},
  "c": {"color":"Indigo","label":"Dorsal edge"}
};

// canvas width
const WIDTH = 500.0;

// array dimensions (micrometers)
const ARRAY_WIDTH = 6200.0;
const ARRAY_HEIGHT = 6600.0;
// spot diameter (micrometers)
const SPOT_DIAMETER = 100;
// center to center distance (micrometers)
// this is used when transforming spot coordinates to pixel coordinates
// ~194 seems to work nicely with the original slide design
// because of the margin
const SPOT_SPACING = ARRAY_WIDTH/(31+1);

// MOUSE LUMBAR SPINAL CORD SPECIFIC
// enable the tnsorflow based automatic annotation feature
const TENSORFLOW_ANNOTATION = false;
// only classify those points for which the maximum class probability is > PT
// only used if tensorflow_annoatation == true
const PT = 0.5;
// +/- 0.5 CROP_SIZE micrometers from spot centroids
// only used if tensorflow_annoatation == true
const CROP_SIZE = 250;
// mapping from predicted classes (tensorflow) to keys (AARs)
// only used if tensorflow_annoatation == true
const CATEGORIES = {0:'a',1:'q',2:'s',3:'w',4:'e',5:'c',6:'d',7:'z',8:'f',9:'r',10:'x'};
