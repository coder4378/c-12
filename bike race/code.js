var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cc96131b-c90e-4bff-aec0-51e810f59c92","c9b08fc6-8be4-4cbd-9b5d-c603fd290783","2f18e157-d800-412a-9533-18ed2798d409","69b1ca45-0bc5-4db3-803e-d4895fea05ed","38f0e003-8850-4cb5-9a58-264179e905aa","dad28b41-1355-4760-9d5f-424733137357","6af0fdb5-7e2c-4145-b082-04206351e38b","b44c7c12-27c0-4993-9ad8-64af8952fcb2"],"propsByKey":{"cc96131b-c90e-4bff-aec0-51e810f59c92":{"name":"motorcycle_1","sourceUrl":null,"frameSize":{"x":50,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"AvHfo1H3DtMjgD8abkXvd2BFqxktB1It","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":131},"rootRelativePath":"assets/cc96131b-c90e-4bff-aec0-51e810f59c92.png"},"c9b08fc6-8be4-4cbd-9b5d-c603fd290783":{"name":"motorcycle_1_copy_1","sourceUrl":null,"frameSize":{"x":131,"y":131},"frameCount":4,"looping":true,"frameDelay":12,"version":"iL5m0y5RT6CM1Dv7hXh3p5ADmjRDW1Qp","loadedFromSource":true,"saved":true,"sourceSize":{"x":262,"y":262},"rootRelativePath":"assets/c9b08fc6-8be4-4cbd-9b5d-c603fd290783.png"},"2f18e157-d800-412a-9533-18ed2798d409":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":400,"y":2000},"frameCount":1,"looping":true,"frameDelay":12,"version":"6Igzmge82KOSSfgHmyHuyve1N2FW_6Up","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":2000},"rootRelativePath":"assets/2f18e157-d800-412a-9533-18ed2798d409.png"},"69b1ca45-0bc5-4db3-803e-d4895fea05ed":{"name":"car_red_1","sourceUrl":null,"frameSize":{"x":50,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"hhem2Io6S0T.OKzTQPs4nHuLF6sFAXRO","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":131},"rootRelativePath":"assets/69b1ca45-0bc5-4db3-803e-d4895fea05ed.png"},"38f0e003-8850-4cb5-9a58-264179e905aa":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/B4vUokh1GW_vLrNnzDIs_OLlxHj3Wmpf/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"B4vUokh1GW_vLrNnzDIs_OLlxHj3Wmpf","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/B4vUokh1GW_vLrNnzDIs_OLlxHj3Wmpf/category_vehicles/car_blue.png"},"dad28b41-1355-4760-9d5f-424733137357":{"name":"motorcycle_2","sourceUrl":null,"frameSize":{"x":40,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"NREaIF6XmiZwoRi98p1b7WG93rA4gdJR","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":131},"rootRelativePath":"assets/dad28b41-1355-4760-9d5f-424733137357.png"},"6af0fdb5-7e2c-4145-b082-04206351e38b":{"name":"motorcycle_2_copy_1","sourceUrl":null,"frameSize":{"x":50,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"L8ZjRioPruPcGwi3zsFqhBJ3To3UTBE2","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":131},"rootRelativePath":"assets/6af0fdb5-7e2c-4145-b082-04206351e38b.png"},"b44c7c12-27c0-4993-9ad8-64af8952fcb2":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":6,"looping":true,"frameDelay":12,"version":"LHfC9OHHFyzQVtXtqDqA5cCVcHYx77TU","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":600},"rootRelativePath":"assets/b44c7c12-27c0-4993-9ad8-64af8952fcb2.png"}}};
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

var bg = createSprite(200, 200);
bg.setAnimation("animation_1");
var car = createSprite(200, 80);
car.setAnimation("motorcycle_1");
var bike2 = createSprite(50, 500);
bike2.setAnimation("motorcycle_2");
var bike3 = createSprite(350, 600);
bike3.setAnimation("motorcycle_2_copy_1");
var bike4 = createSprite(200, 700);
bike4.setAnimation("car_red_1");
bg.y = bg.height / 2;
fill("yellow");
textSize( 50);
function draw() {
 createEdgeSprites();
 if (keyWentUp("space")) {
   bg.velocityY = 0;
   //bike4.velocityY = 0;
//   bike3.velocityY = 0;
  // bike2.velocityY = 0;
   
 }
 if (bg.y<0) {
   bg.y = bg.height / 2;
 }
if (keyDown("right")) {
   car.velocityX = 7;
 }
 if (keyWentUp("right")) {
   car.velocityX = 0;
    
 }
  if (keyDown("left")) {
   car.velocityX = -7;
    
 }
 if (keyWentUp("left")) {
   car.velocityX = 0;
    
 }
 if (keyDown("right")) {
   car.velocityX = 7;
 }
 if (keyWentUp("right")) {
   car.velocityX = 0;
    
 }
  if (keyDown("left")) {
   car.velocityX = -7;
    
 }
 if (keyWentUp("left")) {
   car.velocityX = 0;
    
 }
 if (bike2.y <0) {
   bike2.y = 500;
   bike2.x = randomNumber(10, 350);
 }
 if (bike3.y <0) {
   bike3.y = 650;
   bike3.x = randomNumber(30, 220);
 }
 if (bike4.y <0) {
   bike4.y = 750;
   bike4.x = randomNumber(20, 330);
 }
 if (car.isTouching(bike3)) {
   car.setAnimation("motorcycle_1_copy_1");
   car.velocityX = 3;
   car.velocityY = 4;
 }
 if (car.isTouching(bike4)) {
   car.setAnimation("motorcycle_1_copy_1");
   car.velocityX =  3;
   car.velocityY = 4;
 }
 if (car.isTouching(bike2)) {
   car.setAnimation("motorcycle_1_copy_1");
   car.velocityX = 3;
   car.velocityY = 4;
 }
  
  drawSprites();
 if (keyDown("space")) {
   bike4.velocityY = -10;
   bike3.velocityY = -10;
   bike2.velocityY = -10;
   bg.velocityY = -40;
   text("start", 200, 200);
   playSound("assets/category_explosion/air_explode_bonus_5.mp3");
 }
 if (car.isTouching(edges)) {
   car.setAnimation("animation_2");
   car.velocityX = 0;
   car.velocityY = 0;
   text("out", 200, 200);
   playSound("assets/category_movement/puzzle_game_ui_powerup_02.mp3");
 }
}

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
