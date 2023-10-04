var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var antannposy2 = 20;
var antennaposy = 64;
var eyepositiony = 120;
var eyecolorr = randomNumber(0, 255);
var eyecolorg = randomNumber(0, 255);
var eyecolorb = randomNumber(0, 255);
var antennacolorr = randomNumber(0, 255);
var antennacolorg = randomNumber(0, 255);
var antennacolorb = randomNumber(0, 255);
fill("Gainsboro");
regularPolygon(200, 200, 7, 150);
fill("slategray");
rect(140, 260, 120, 35);
fill(rgb(eyecolorr, eyecolorg, eyecolorb));
shape(173, eyepositiony, 173, 150, 113, 150);
fill(rgb(eyecolorr, eyecolorg, eyecolorb));
shape(227, eyepositiony, 227, 150, 287, 150);
fill("slategray");
ellipse(85, antennaposy, 15, 120);
ellipse(315, antennaposy, 15, 120);
fill(rgb(antennacolorr, antennacolorg, antennacolorb));
ellipse(85, antannposy2, 45, 45);
ellipse(315, antannposy2, 45, 45);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
