"use strict";

const fs = require("fs");
const { toNamespacedPath } = require("path");
let map = JSON.parse(fs.readFileSync("ExpertPlusLawless.dat"));
let fileOutput = "ExpertPlusLightshow.dat";

///// ^^^^^ input ^^^^^ /////
///// vvv workspace vvv /////
const repeat = 4
const aT = "AnimateTrack"
const EIQ = "easeInQuad"
const EOQ = "easeOutQuad"
const EIOQ = "easeInOutQuad"
const EIS = "easeInSine"
const EOS = "easeOutSine"
const EIOS = "easeInOutSine"

// vvv ====SETUP==== vvv //
//==Maps Vanilla setup==//
//Environment Setup//
{
  map.customData = { customEvents: [], environment: [], "materials": { "green standard": { "color": [0, 1, 0, 0], "shader": "TransparentLight" }, "opaque shader": { "color": [0, 1, 0, 0], "shader": "OpaqueLight" } }, "environment": [{ "id": "(?:PeachLeft$|PeachRight$|\\[\\d+\\]LI$|\\[\\d+\\]O$|\\[\\d+\\]Z$)", "lookupMethod": "Regex", "active": false }, { "geometry": { "type": "Cylinder", "material": "green standard" }, "scale": [0.1, 100.665, 0.1], "track": "LeftLaser0", "position": [-2, 0.901, 1.099], "rotation": [-90, 0, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0 }, "ILightWithId": { "lightID": 2, "type": 0 } } }, { "geometry": { "type": "Cylinder", "material": "green standard" }, "scale": [0.1, 100.665, 0.1], "track": "RightLaser0", "position": [2, 0.901, 1.099], "rotation": [-90, 0, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0 }, "ILightWithId": { "lightID": 13, "type": 0 } } }, { "geometry": { "type": "Cylinder", "material": "green standard" }, "scale": [0.1, 100.665, 0.1], "track": "RightLaser1", "position": [1.932, 1.418, 1.099], "rotation": [-90, 0, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0 }, "ILightWithId": { "lightID": 12, "type": 0 } } }, { "geometry": { "type": "Cylinder", "material": "green standard" }, "scale": [0.1, 100.665, 0.1], "track": "RightLaser2", "position": [1.732, 1.901, 1.099], "rotation": [-90, 0, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0 }, "ILightWithId": { "lightID": 11, "type": 0 } } }, { "geometry": { "type": "Cylinder", "material": "green standard" }, "scale": [0.1, 100.665, 0.1], "track": "RightLaser3", "position": [1.414, 2.315, 1.099], "rotation": [-90, 0, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0 }, "ILightWithId": { "lightID": 10, "type": 0 } } }, { "geometry": { "type": "Cylinder", "material": "green standard" }, "scale": [0.1, 100.665, 0.1], "track": "RightLaser4", "position": [1, 2.633, 1.099], "rotation": [-90, 0, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0 }, "ILightWithId": { "lightID": 9, "type": 0 } } }, { "geometry": { "type": "Cylinder", "material": "green standard" }, "scale": [0.1, 100.665, 0.1], "track": "RightLaser5", "position": [0.518, 2.833, 1.099], "rotation": [-90, 0, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0 }, "ILightWithId": { "lightID": 8, "type": 0 } } }, { "geometry": { "type": "Cylinder", "material": "green standard" }, "scale": [0.1, 100.665, 0.1], "track": "LeftLaser5", "position": [-0.518, 2.833, 1.099], "rotation": [-90, 0, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0 }, "ILightWithId": { "lightID": 7, "type": 0 } } }, { "geometry": { "type": "Cylinder", "material": "green standard" }, "scale": [0.1, 100.665, 0.1], "track": "LeftLaser4", "position": [-1, 2.633, 1.099], "rotation": [-90, 0, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0 }, "ILightWithId": { "lightID": 6, "type": 0 } } }, { "geometry": { "type": "Cylinder", "material": "green standard" }, "scale": [0.1, 100.665, 0.1], "track": "LeftLaser3", "position": [-1.414, 2.315, 1.099], "rotation": [-90, 0, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0 }, "ILightWithId": { "lightID": 5, "type": 0 } } }, { "geometry": { "type": "Cylinder", "material": "green standard" }, "scale": [0.1, 100.665, 0.1], "track": "LeftLaser2", "position": [-1.732, 1.901, 1.099], "rotation": [-90, 0, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0 }, "ILightWithId": { "lightID": 4, "type": 0 } } }, { "geometry": { "type": "Cylinder", "material": "green standard" }, "scale": [0.1, 100.665, 0.1], "track": "LeftLaser1", "position": [-1.932, 1.418, 1.099], "rotation": [-90, 0, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0 }, "ILightWithId": { "lightID": 3, "type": 0 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 5.113, 0.3], "position": [-21.322, 11.643, 28.395], "rotation": [0, -45, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 9 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [2.451, 0.8, 0.3], "position": [-20.635, 10.26, 29.083], "rotation": [1.434, -45, 45], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 9 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [1.716, 0.8, 0.3], "position": [-20.129, 11.678, 29.589], "rotation": [-2.231, -45, 90], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 9 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [2.451, 0.8, 0.3], "position": [-20.635, 13.316, 29.083], "rotation": [-2.268, -45, 135], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 9 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 5.113, 0.3], "position": [-16.771, 16, 40.496], "rotation": [0, -22.401, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 10 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 2.045, 0.3], "position": [-16.771, 19, 40.496], "rotation": [-3.999, -22.401, 90], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 10 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 2.045, 0.3], "position": [-16.771, 13, 40.496], "rotation": [-3.999, -22.401, 90], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 10 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 2.453, 0.3], "position": [-14.224, 19, 41.783], "rotation": [-1.072, -23.211, 135.017], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 10 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 2.453, 0.3], "position": [-14.224, 14, 41.783], "rotation": [5.128, -22.401, 135.017], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 10 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 4.091, 0.3], "position": [-14.053, 16.5, 41.853], "rotation": [-1.185, -22.401, 20], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 10 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 5.113, 0.3], "position": [13.265, 15.147, 40.673], "rotation": [0, 22.405, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 11 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 5.113, 0.3], "position": [15.114, 15.147, 39.911], "rotation": [0, 22.405, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 11 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 5.113, 0.3], "position": [14.19, 15.147, 40.292], "rotation": [8.771, 22.405, 20], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 11 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 5.113, 0.3], "position": [16.963, 15.147, 39.149], "rotation": [0, 22.405, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 11 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 1.534, 0.3], "position": [17.317, 15.147, 39.003], "rotation": [-1.184, 22.405, 90], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 11 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 1.534, 0.3], "position": [18.003, 17.297, 38.72], "rotation": [-1.184, 22.405, 90], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 11 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 1.534, 0.3], "position": [18.003, 13.006, 38.72], "rotation": [-1.184, 22.405, 90], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 11 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 5.113, 0.3], "position": [21, 13, 29.5], "rotation": [0, 45, 0], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 12 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 2.445, 0.3], "position": [21.495, 15.736, 29.005], "rotation": [2.268, 45, -45], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 12 } } }, { "geometry": { "type": "Cube", "material": "opaque shader" }, "scale": [0.8, 2.445, 0.3], "position": [20.505, 15.736, 29.995], "rotation": [9.806, 45, 45], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 12 } } }, { "geometry": { "type": "Cylinder", "material": "opaque shader" }, "scale": [2.95, 0.37, 2.95], "position": [-17.37, 11.94, 13.36], "rotation": [90, 0.0, -135], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 7 } } }, { "geometry": { "type": "Cylinder", "material": "opaque shader" }, "scale": [5.12, 0.37, 5.12], "position": [-19.0, 9.12, 11.73], "rotation": [90, 0.0, -135], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 7 } } }, { "geometry": { "type": "Cylinder", "material": "opaque shader" }, "scale": [2.95, 0.37, 2.95], "position": [-20.63, 11.94, 10.1], "rotation": [90, 0.0, -135], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 7 } } }, { "geometry": { "type": "Cylinder", "material": "opaque shader" }, "scale": [2.95, 0.37, 2.95], "position": [20.63, 11.94, 10.1], "rotation": [90, 0.0, 135], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 8 } } }, { "geometry": { "type": "Cylinder", "material": "opaque shader" }, "scale": [5.12, 0.37, 5.12], "position": [19.0, 9.12, 11.73], "rotation": [90, 0.0, 135], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 8 } } }, { "geometry": { "type": "Cylinder", "material": "opaque shader" }, "scale": [2.95, 0.37, 2.95], "position": [17.37, 11.94, 13.36], "rotation": [90, 0.0, 135], "components": { "TubeBloomPrePassLight": { "bloomFogIntensityMultiplier": 0, "colorAlphaMultiplier": 3 }, "ILightWithId": { "lightID": 1, "type": 8 } } }], "time": 95.853 }
}

//==Ring IDS Generator==//
const cyl = "Cylinder"
const transShader = "green standard"
const ringPartSize = [0.1, 0.4, 0.1]
for (let i = 0, j = 0, k = 0; i < 18; i++, j += 15, k += 2) {
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_0",
    position: [-3, 0.327, 0 + k],
    rotation: [0, 0, 0],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 2 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_1",
    position: [-3, 1, 0 + k],
    rotation: [0, 0, 0],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 3 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_2",
    position: [-2.898, 1.766, 0 + k],
    rotation: [0, 0, -15],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 4 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_3",
    position: [-2.598, 2.5, 0 + k],
    rotation: [0, 0, -30],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 5 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_4",
    position: [-2.121, 3.121, 0 + k],
    rotation: [0, 0, -45],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 6 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_5",
    position: [-1.5, 3.598, 0 + k],
    rotation: [0, 0, -60],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 7 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_6",
    position: [-0.776, 3.898, 0 + k],
    rotation: [0, 0, -75],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 8 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_7",
    position: [0, 4, 0 + k],
    rotation: [0, 0, -90],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 9 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_8",
    position: [0.776, 3.898, 0 + k],
    rotation: [0, 180, -75],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 10 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_9",
    position: [1.5, 3.598, 0 + k],
    rotation: [0, -180, -60],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 11 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_10",
    position: [2.121, 3.121, 0 + k],
    rotation: [0, -180, -45],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 12 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_11",
    position: [2.598, 2.5, 0 + k],
    rotation: [0, -180, -30],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 13 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_12",
    position: [2.898, 1.766, 0 + k],
    rotation: [0, -180, -15],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 14 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_13",
    position: [3, 1, 0 + k],
    rotation: [0, 0, 0],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 15 + j, type: 1 }
    }
  })
  map.customData.environment.push({
    geometry: {
      type: cyl,
      material: transShader
    },
    scale: ringPartSize,
    track: i + "_14",
    position: [3, 0.327, 0 + k],
    rotation: [0, 0, 0],
    components: {
      TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 0, colorAlphaMultiplier: 1 },
      ILightWithId: { lightID: 16 + j, type: 1 }
    }
  })
}

//==RINGS==//
const ring1 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const ring2 = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const ring3 = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
const ring4 = [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]
const ring5 = [62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76]
const ring6 = [77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91]
const ring7 = [92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106]
const ring8 = [107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121]
const ring9 = [122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136]
const ring10 = [137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151]
const ring11 = [152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166]
const ring12 = [167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181]
const ring13 = [182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196]
const ring14 = [197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211]
const ring15 = [212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226]
const ring16 = [227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241]
const ring17 = [242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256]
const ring18 = [257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271]
//for the rings
const laneRight = 1
//Ring id x position
const id0 = 0
const id1 = -3
const id2 = -3
const id3 = -2.898
const id4 = -2.598
const id5 = -2.121
const id6 = -1.5
const id7 = -0.776
const id8 = 0
const id9 = 0.776
const id10 = 1.5
const id11 = 2.121
const id12 = 2.598
const id13 = 2.898
const id14 = 3
const id15 = 3
//Ring Ys
const y1 = 0.327
const y2 = 1
const y3 = 1.766
const y4 = 2.5
const y5 = 3.121
const y6 = 3.598
const y7 = 3.898
const y8 = 4

//==LASERS==//
const leftLaser1 = 2
const leftLaser2 = 3
const leftLaser3 = 4
const leftLaser4 = 5
const leftLaser5 = 6
const leftLaser6 = 7
const rightLaser6 = 8
const rightLaser5 = 9
const rightLaser4 = 10
const rightLaser3 = 11
const rightLaser2 = 12
const rightLaser1 = 13
//for the lasers
const laneLeft = 0
//left lasers x positions
const leftLaser1Pos = -2
const leftLaser2Pos = -1.932
const leftLaser3Pos = -1.732
const leftLaser4Pos = -1.414
const leftLaser5Pos = -1
const leftLaser6Pos = -0.518
//right lasers x positions
const rightLaser1Pos = 2
const rightLaser2Pos = 1.932
const rightLaser3Pos = 1.732
const rightLaser4Pos = 1.414
const rightLaser5Pos = 1
const rightLaser6Pos = 0.518
//lasers y positions
const laser1Y = 0.901
const laser2Y = 1.418
const laser3Y = 1.901
const laser4Y = 2.315
const laser5Y = 2.633
const laser6Y = 2.833

//==LASER SHORTCUTS==//
const lasers1 = [leftLaser1, rightLaser1]
const lasers2 = [leftLaser2, rightLaser2]
const lasers3 = [leftLaser3, rightLaser3]
const lasers4 = [leftLaser4, rightLaser4]
const lasers5 = [leftLaser5, rightLaser5]
const lasers6 = [leftLaser6, rightLaser6]

//==RING SHORTCUTS==
const fancyRing1_1 = [2, 4, 6, 8, 10, 12, 14, 16]
const fancyRing1_2 = [3, 5, 7, 9, 11, 13, 15]
const middleRing1 = [8]
const fancyRing2_1 = [17, 19, 21, 23, 25, 27, 29, 31]
const fancyRing2_2 = [18, 20, 22, 24, 26, 28, 30]
const middleRing2 = [23]
const fancyRing3_1 = [32, 34, 36, 38, 40, 42, 44, 46]
const fancyRing3_2 = [33, 35, 37, 39, 41, 43, 45]
const middleRing3 = [38]
const fancyRing4_1 = [47, 49, 51, 53, 55, 57, 59, 61]
const fancyRing4_2 = [48, 50, 52, 54, 56, 58, 60]
const middleRing4 = [53]
const fancyRing5_1 = [62, 64, 66, 68, 70, 72, 74, 76]
const fancyRing5_2 = [63, 65, 67, 69, 71, 73, 75]
const middleRing5 = [68]
const fancyRing6_1 = [77, 79, 81, 83, 85, 87, 89, 91]
const fancyRing6_2 = [78, 80, 82, 84, 86, 88, 90]
const middleRing6 = [83]
const fancyRing7_1 = [92, 94, 96, 98, 100, 102, 104, 106]
const fancyRing7_2 = [93, 95, 97, 99, 101, 103, 105]
const middleRing7 = [98]
const fancyRing8_1 = [107, 109, 111, 113, 115, 117, 119, 121]
const fancyRing8_2 = [108, 110, 112, 114, 116, 118, 120]
const middleRing8 = [113]
const fancyRing9_1 = [122, 124, 126, 128, 130, 132, 134, 136]
const fancyRing9_2 = [123, 125, 127, 129, 131, 133, 135]
const middleRing9 = [128]
const fancyRing10_1 = [137, 139, 141, 143, 145, 147, 149, 151]
const fancyRing10_2 = [138, 140, 142, 144, 146, 148, 150]
const middleRing10 = [143]
const fancyRing11_1 = [152, 154, 156, 158, 160, 162, 164, 166]
const fancyRing11_2 = [153, 155, 157, 159, 161, 163, 165]
const middleRing11 = [158]
const fancyRing12_1 = [167, 169, 171, 173, 175, 177, 179, 181]
const fancyRing12_2 = [168, 170, 172, 174, 176, 178, 180]
const middleRing12 = [173]
const fancyRing13_1 = [182, 184, 186, 188, 190, 192, 194, 196]
const fancyRing13_2 = [183, 185, 187, 189, 191, 193, 195]
const middleRing13 = [188]
const fancyRing14_1 = [197, 199, 201, 203, 205, 207, 209, 211]
const fancyRing14_2 = [198, 200, 202, 204, 206, 208, 210]
const middleRing14 = [203]
const fancyRing15_1 = [212, 214, 216, 218, 220, 222, 224, 226]
const fancyRing15_2 = [213, 215, 217, 219, 221, 223, 225]
const middleRing15 = [218]
const fancyRing16_1 = [227, 229, 231, 233, 235, 237, 239, 241]
const fancyRing16_2 = [228, 230, 232, 234, 236, 238, 240]
const middleRing16 = [233]
const fancyRing17_1 = [242, 244, 246, 248, 250, 252, 254, 256]
const fancyRing17_2 = [243, 245, 247, 249, 251, 253, 255]
const middleRing17 = [248]
const fancyRing18_1 = [257, 259, 261, 263, 265, 267, 269, 271]
const fancyRing18_2 = [258, 260, 262, 264, 266, 268, 270]
const middleRing18 = [263]

////====EVENTS====////
//Key: Primary = Red | Secondary = Blue | Blank = White
//general events//
const off = 0
const onPrimary = 5
const onSecondary = 1
const onBlank = 9
//V1 events//
const flashPrimary = 6
const flashSecondary = 2
const flashBlank = 10
const fadePrimary = 7
const fadeSecondary = 3
const fadeBlank = 11

//V2 events//
const transitionPrimary = 8
const transitionSecondary = 4
const transitionBlank = 20

//Boost events//
const boostOn = true
const boostOff = false

// ^^^ ====SETUP==== ^^^ //


/////===LIGHTING===///// beat 4
////==Intro==//// beat 4
{
  //lanes//
  { }
  //lasers//
  { }
  //rings//
  { }
  //boost//
  { }
  //customEvents//
  {
    //lasers movement//
    { }
    //rings movement//
    {
      for(let i = 0, x = 0, y = 0, z = 0; i < 3; i++, z+=2){
        for (let j = 0; j < 15; j++){
          //position Auto Assign based on condition//
          {
            if (j == 0){
              x = id1
              y = y1
            }
            else if (j == 1){
              x = id2
              y = y2
            }
            else if (j == 2){
              x = id3
              y = y3
            }
            else if (j == 3){
              x = id4
              y = y4
            }
            else if (j == 4){
              x = id5
              y = y5
            }
            else if (j == 5){
              x = id6
              y = y6
            }
            else if (j == 6){
              x = id7
              y = y7
            }
            else if (j == 7){
              x = id8
              y = y8
            }
            else if (j == 8){
              x = id9
              y = y7
            }
            else if (j == 9){
              x = id10
              y = y6
            }
            else if (j == 10){
              x = id11
              y = y5
            }
            else if (j == 11){
              x = id12
              y = y4
            }
            else if (j == 12){
              x = id13
              y = y3
            }
            else if (j == 13){
              x = id14
              y = y2
            }
            else if (j == 14){
              x = id15
              y = y1
            }
          }
          map.customData.customEvents.push({
            b: 10,
            t: aT,
            d: {
              track: i + "_" + j,
              duration: 3,
              localPosition: [
                [x, y, z, 0],
                [x, y+2, z*(0.1)+5, 1/2, EOS],
                [x, y, z, 2/2, EIS],
              ]
            }
          })
        }
      }
    }
  }
}

//extra//

/////  ^^^ workspace ^^^ /////
///// vvvvv output vvvvv /////
fs.writeFileSync(fileOutput, JSON.stringify(map, null, 0));
const data = JSON.parse(fs.readFileSync(fileOutput))
console.log(`Map Done Loading`);
console.log("\n\nStats:\n\n", data.basicBeatmapEvents.length, "Event(s)\n", data.bpmEvents.length, "BPM Event(s)\n", data.colorBoostBeatmapEvents.length, "Boost Event(s)\n", data.lightColorEventBoxGroups.length, "Light Color Group Event(s)\n", data.lightRotationEventBoxGroups.length, "Light Rotation Group Event(s)\n", data.customData.customEvents.length, "Custom Event(s)")
console.log("\x1b[1m\x1b[32m", "\nAll pushes ran successfully!\n")
