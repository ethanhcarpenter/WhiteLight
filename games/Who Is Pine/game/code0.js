gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.localVariables = [];
gdjs.Title_32ScreenCode.idToCallbackMap = new Map();
gdjs.Title_32ScreenCode.GDTitle_9595BackgroundObjects1= [];
gdjs.Title_32ScreenCode.GDTitle_9595BackgroundObjects2= [];
gdjs.Title_32ScreenCode.GDPine_9595TitleObjects1= [];
gdjs.Title_32ScreenCode.GDPine_9595TitleObjects2= [];
gdjs.Title_32ScreenCode.GDTitleObjects1= [];
gdjs.Title_32ScreenCode.GDTitleObjects2= [];
gdjs.Title_32ScreenCode.GDStartObjects1= [];
gdjs.Title_32ScreenCode.GDStartObjects2= [];
gdjs.Title_32ScreenCode.GDExitObjects1= [];
gdjs.Title_32ScreenCode.GDExitObjects2= [];
gdjs.Title_32ScreenCode.GDPine_9595Top_9595Down_9595TitleObjects1= [];
gdjs.Title_32ScreenCode.GDPine_9595Top_9595Down_9595TitleObjects2= [];
gdjs.Title_32ScreenCode.GDPine_9595Platformer_9595TitleObjects1= [];
gdjs.Title_32ScreenCode.GDPine_9595Platformer_9595TitleObjects2= [];
gdjs.Title_32ScreenCode.GDDemoObjects1= [];
gdjs.Title_32ScreenCode.GDDemoObjects2= [];
gdjs.Title_32ScreenCode.GDPine_9595PlatformerObjects1= [];
gdjs.Title_32ScreenCode.GDPine_9595PlatformerObjects2= [];
gdjs.Title_32ScreenCode.GDPlatform_9595Obstacle2Objects1= [];
gdjs.Title_32ScreenCode.GDPlatform_9595Obstacle2Objects2= [];
gdjs.Title_32ScreenCode.GDTop_9595Down_95951st_9595ObstacleObjects1= [];
gdjs.Title_32ScreenCode.GDTop_9595Down_95951st_9595ObstacleObjects2= [];
gdjs.Title_32ScreenCode.GDBackgroundObjects1= [];
gdjs.Title_32ScreenCode.GDBackgroundObjects2= [];
gdjs.Title_32ScreenCode.GDBack_9595Building_959516xObjects1= [];
gdjs.Title_32ScreenCode.GDBack_9595Building_959516xObjects2= [];
gdjs.Title_32ScreenCode.GDFor_9595Roads_959516x2Objects1= [];
gdjs.Title_32ScreenCode.GDFor_9595Roads_959516x2Objects2= [];
gdjs.Title_32ScreenCode.GDDarkenerObjects1= [];
gdjs.Title_32ScreenCode.GDDarkenerObjects2= [];
gdjs.Title_32ScreenCode.GDEnd_9595TriggerObjects1= [];
gdjs.Title_32ScreenCode.GDEnd_9595TriggerObjects2= [];
gdjs.Title_32ScreenCode.GDPlatfrom_9595TriggerObjects1= [];
gdjs.Title_32ScreenCode.GDPlatfrom_9595TriggerObjects2= [];
gdjs.Title_32ScreenCode.GDDialogueObjects1= [];
gdjs.Title_32ScreenCode.GDDialogueObjects2= [];
gdjs.Title_32ScreenCode.GDLoadingObjects1= [];
gdjs.Title_32ScreenCode.GDLoadingObjects2= [];
gdjs.Title_32ScreenCode.GDYes_9595buttonObjects1= [];
gdjs.Title_32ScreenCode.GDYes_9595buttonObjects2= [];
gdjs.Title_32ScreenCode.GDNo_9595buttonObjects1= [];
gdjs.Title_32ScreenCode.GDNo_9595buttonObjects2= [];
gdjs.Title_32ScreenCode.GDObstacle_95951Objects1= [];
gdjs.Title_32ScreenCode.GDObstacle_95951Objects2= [];
gdjs.Title_32ScreenCode.GDPine_9595Top_9595DownObjects1= [];
gdjs.Title_32ScreenCode.GDPine_9595Top_9595DownObjects2= [];
gdjs.Title_32ScreenCode.GDEnd_9595Trigger2Objects1= [];
gdjs.Title_32ScreenCode.GDEnd_9595Trigger2Objects2= [];
gdjs.Title_32ScreenCode.GDPine_9595Top_9595Down2Objects1= [];
gdjs.Title_32ScreenCode.GDPine_9595Top_9595Down2Objects2= [];
gdjs.Title_32ScreenCode.GDShadowObjects1= [];
gdjs.Title_32ScreenCode.GDShadowObjects2= [];
gdjs.Title_32ScreenCode.GDDarkener2Objects1= [];
gdjs.Title_32ScreenCode.GDDarkener2Objects2= [];


gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Title_32ScreenCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDStartObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDStartObjects1[k] = gdjs.Title_32ScreenCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Title_32ScreenCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDExitObjects1.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDExitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDExitObjects1[k] = gdjs.Title_32ScreenCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDExitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDTitle_9595BackgroundObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitle_9595BackgroundObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595TitleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595TitleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDTitleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDStartObjects1.length = 0;
gdjs.Title_32ScreenCode.GDStartObjects2.length = 0;
gdjs.Title_32ScreenCode.GDExitObjects1.length = 0;
gdjs.Title_32ScreenCode.GDExitObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Top_9595Down_9595TitleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Top_9595Down_9595TitleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Platformer_9595TitleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Platformer_9595TitleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDemoObjects1.length = 0;
gdjs.Title_32ScreenCode.GDDemoObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595PlatformerObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595PlatformerObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPlatform_9595Obstacle2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDPlatform_9595Obstacle2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDTop_9595Down_95951st_9595ObstacleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTop_9595Down_95951st_9595ObstacleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBack_9595Building_959516xObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBack_9595Building_959516xObjects2.length = 0;
gdjs.Title_32ScreenCode.GDFor_9595Roads_959516x2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDFor_9595Roads_959516x2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDDarkenerObjects1.length = 0;
gdjs.Title_32ScreenCode.GDDarkenerObjects2.length = 0;
gdjs.Title_32ScreenCode.GDEnd_9595TriggerObjects1.length = 0;
gdjs.Title_32ScreenCode.GDEnd_9595TriggerObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPlatfrom_9595TriggerObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPlatfrom_9595TriggerObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDialogueObjects1.length = 0;
gdjs.Title_32ScreenCode.GDDialogueObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLoadingObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLoadingObjects2.length = 0;
gdjs.Title_32ScreenCode.GDYes_9595buttonObjects1.length = 0;
gdjs.Title_32ScreenCode.GDYes_9595buttonObjects2.length = 0;
gdjs.Title_32ScreenCode.GDNo_9595buttonObjects1.length = 0;
gdjs.Title_32ScreenCode.GDNo_9595buttonObjects2.length = 0;
gdjs.Title_32ScreenCode.GDObstacle_95951Objects1.length = 0;
gdjs.Title_32ScreenCode.GDObstacle_95951Objects2.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Top_9595DownObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Top_9595DownObjects2.length = 0;
gdjs.Title_32ScreenCode.GDEnd_9595Trigger2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDEnd_9595Trigger2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Top_9595Down2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Top_9595Down2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDShadowObjects1.length = 0;
gdjs.Title_32ScreenCode.GDShadowObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDarkener2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDDarkener2Objects2.length = 0;

gdjs.Title_32ScreenCode.eventsList0(runtimeScene);
gdjs.Title_32ScreenCode.GDTitle_9595BackgroundObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitle_9595BackgroundObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595TitleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595TitleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDTitleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDStartObjects1.length = 0;
gdjs.Title_32ScreenCode.GDStartObjects2.length = 0;
gdjs.Title_32ScreenCode.GDExitObjects1.length = 0;
gdjs.Title_32ScreenCode.GDExitObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Top_9595Down_9595TitleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Top_9595Down_9595TitleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Platformer_9595TitleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Platformer_9595TitleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDemoObjects1.length = 0;
gdjs.Title_32ScreenCode.GDDemoObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595PlatformerObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595PlatformerObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPlatform_9595Obstacle2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDPlatform_9595Obstacle2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDTop_9595Down_95951st_9595ObstacleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTop_9595Down_95951st_9595ObstacleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBack_9595Building_959516xObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBack_9595Building_959516xObjects2.length = 0;
gdjs.Title_32ScreenCode.GDFor_9595Roads_959516x2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDFor_9595Roads_959516x2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDDarkenerObjects1.length = 0;
gdjs.Title_32ScreenCode.GDDarkenerObjects2.length = 0;
gdjs.Title_32ScreenCode.GDEnd_9595TriggerObjects1.length = 0;
gdjs.Title_32ScreenCode.GDEnd_9595TriggerObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPlatfrom_9595TriggerObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPlatfrom_9595TriggerObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDialogueObjects1.length = 0;
gdjs.Title_32ScreenCode.GDDialogueObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLoadingObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLoadingObjects2.length = 0;
gdjs.Title_32ScreenCode.GDYes_9595buttonObjects1.length = 0;
gdjs.Title_32ScreenCode.GDYes_9595buttonObjects2.length = 0;
gdjs.Title_32ScreenCode.GDNo_9595buttonObjects1.length = 0;
gdjs.Title_32ScreenCode.GDNo_9595buttonObjects2.length = 0;
gdjs.Title_32ScreenCode.GDObstacle_95951Objects1.length = 0;
gdjs.Title_32ScreenCode.GDObstacle_95951Objects2.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Top_9595DownObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Top_9595DownObjects2.length = 0;
gdjs.Title_32ScreenCode.GDEnd_9595Trigger2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDEnd_9595Trigger2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Top_9595Down2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDPine_9595Top_9595Down2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDShadowObjects1.length = 0;
gdjs.Title_32ScreenCode.GDShadowObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDarkener2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDDarkener2Objects2.length = 0;


return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
