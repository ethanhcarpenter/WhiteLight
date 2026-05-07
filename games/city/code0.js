gdjs.Title_32screenCode = {};
gdjs.Title_32screenCode.localVariables = [];
gdjs.Title_32screenCode.idToCallbackMap = new Map();
gdjs.Title_32screenCode.GDNewSpriteObjects1= [];
gdjs.Title_32screenCode.GDNewSpriteObjects2= [];
gdjs.Title_32screenCode.GDplay_9595buttonObjects1= [];
gdjs.Title_32screenCode.GDplay_9595buttonObjects2= [];
gdjs.Title_32screenCode.GDleave_9595buttonObjects1= [];
gdjs.Title_32screenCode.GDleave_9595buttonObjects2= [];
gdjs.Title_32screenCode.GDWinObjects1= [];
gdjs.Title_32screenCode.GDWinObjects2= [];
gdjs.Title_32screenCode.GDRespawnObjects1= [];
gdjs.Title_32screenCode.GDRespawnObjects2= [];
gdjs.Title_32screenCode.GDMain_9595menuObjects1= [];
gdjs.Title_32screenCode.GDMain_9595menuObjects2= [];


gdjs.Title_32screenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.Title_32screenCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32screenCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Title_32screenCode.GDplay_9595buttonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32screenCode.GDplay_9595buttonObjects1[k] = gdjs.Title_32screenCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Title_32screenCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("leave_button"), gdjs.Title_32screenCode.GDleave_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32screenCode.GDleave_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Title_32screenCode.GDleave_9595buttonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32screenCode.GDleave_9595buttonObjects1[k] = gdjs.Title_32screenCode.GDleave_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Title_32screenCode.GDleave_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "music_smt_Shifting_051.mp3");
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Game");
}
}

}


};

gdjs.Title_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32screenCode.GDNewSpriteObjects1.length = 0;
gdjs.Title_32screenCode.GDNewSpriteObjects2.length = 0;
gdjs.Title_32screenCode.GDplay_9595buttonObjects1.length = 0;
gdjs.Title_32screenCode.GDplay_9595buttonObjects2.length = 0;
gdjs.Title_32screenCode.GDleave_9595buttonObjects1.length = 0;
gdjs.Title_32screenCode.GDleave_9595buttonObjects2.length = 0;
gdjs.Title_32screenCode.GDWinObjects1.length = 0;
gdjs.Title_32screenCode.GDWinObjects2.length = 0;
gdjs.Title_32screenCode.GDRespawnObjects1.length = 0;
gdjs.Title_32screenCode.GDRespawnObjects2.length = 0;
gdjs.Title_32screenCode.GDMain_9595menuObjects1.length = 0;
gdjs.Title_32screenCode.GDMain_9595menuObjects2.length = 0;

gdjs.Title_32screenCode.eventsList0(runtimeScene);
gdjs.Title_32screenCode.GDNewSpriteObjects1.length = 0;
gdjs.Title_32screenCode.GDNewSpriteObjects2.length = 0;
gdjs.Title_32screenCode.GDplay_9595buttonObjects1.length = 0;
gdjs.Title_32screenCode.GDplay_9595buttonObjects2.length = 0;
gdjs.Title_32screenCode.GDleave_9595buttonObjects1.length = 0;
gdjs.Title_32screenCode.GDleave_9595buttonObjects2.length = 0;
gdjs.Title_32screenCode.GDWinObjects1.length = 0;
gdjs.Title_32screenCode.GDWinObjects2.length = 0;
gdjs.Title_32screenCode.GDRespawnObjects1.length = 0;
gdjs.Title_32screenCode.GDRespawnObjects2.length = 0;
gdjs.Title_32screenCode.GDMain_9595menuObjects1.length = 0;
gdjs.Title_32screenCode.GDMain_9595menuObjects2.length = 0;


return;

}

gdjs['Title_32screenCode'] = gdjs.Title_32screenCode;
