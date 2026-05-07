gdjs.Game_32overCode = {};
gdjs.Game_32overCode.localVariables = [];
gdjs.Game_32overCode.idToCallbackMap = new Map();
gdjs.Game_32overCode.GDNewSpriteObjects1= [];
gdjs.Game_32overCode.GDNewSpriteObjects2= [];
gdjs.Game_32overCode.GDYou_9595DiedObjects1= [];
gdjs.Game_32overCode.GDYou_9595DiedObjects2= [];
gdjs.Game_32overCode.GDWinObjects1= [];
gdjs.Game_32overCode.GDWinObjects2= [];
gdjs.Game_32overCode.GDRespawnObjects1= [];
gdjs.Game_32overCode.GDRespawnObjects2= [];
gdjs.Game_32overCode.GDMain_9595menuObjects1= [];
gdjs.Game_32overCode.GDMain_9595menuObjects2= [];


gdjs.Game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Respawn"), gdjs.Game_32overCode.GDRespawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32overCode.GDRespawnObjects1.length;i<l;++i) {
    if ( gdjs.Game_32overCode.GDRespawnObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32overCode.GDRespawnObjects1[k] = gdjs.Game_32overCode.GDRespawnObjects1[i];
        ++k;
    }
}
gdjs.Game_32overCode.GDRespawnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_menu"), gdjs.Game_32overCode.GDMain_9595menuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32overCode.GDMain_9595menuObjects1.length;i<l;++i) {
    if ( gdjs.Game_32overCode.GDMain_9595menuObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32overCode.GDMain_9595menuObjects1[k] = gdjs.Game_32overCode.GDMain_9595menuObjects1[i];
        ++k;
    }
}
gdjs.Game_32overCode.GDMain_9595menuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title screen", false);
}
}

}


};

gdjs.Game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32overCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32overCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32overCode.GDYou_9595DiedObjects1.length = 0;
gdjs.Game_32overCode.GDYou_9595DiedObjects2.length = 0;
gdjs.Game_32overCode.GDWinObjects1.length = 0;
gdjs.Game_32overCode.GDWinObjects2.length = 0;
gdjs.Game_32overCode.GDRespawnObjects1.length = 0;
gdjs.Game_32overCode.GDRespawnObjects2.length = 0;
gdjs.Game_32overCode.GDMain_9595menuObjects1.length = 0;
gdjs.Game_32overCode.GDMain_9595menuObjects2.length = 0;

gdjs.Game_32overCode.eventsList0(runtimeScene);
gdjs.Game_32overCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32overCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32overCode.GDYou_9595DiedObjects1.length = 0;
gdjs.Game_32overCode.GDYou_9595DiedObjects2.length = 0;
gdjs.Game_32overCode.GDWinObjects1.length = 0;
gdjs.Game_32overCode.GDWinObjects2.length = 0;
gdjs.Game_32overCode.GDRespawnObjects1.length = 0;
gdjs.Game_32overCode.GDRespawnObjects2.length = 0;
gdjs.Game_32overCode.GDMain_9595menuObjects1.length = 0;
gdjs.Game_32overCode.GDMain_9595menuObjects2.length = 0;


return;

}

gdjs['Game_32overCode'] = gdjs.Game_32overCode;
