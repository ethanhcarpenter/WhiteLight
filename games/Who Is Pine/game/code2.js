gdjs.Puzzle1Code = {};
gdjs.Puzzle1Code.localVariables = [];
gdjs.Puzzle1Code.idToCallbackMap = new Map();
gdjs.Puzzle1Code.GDPine_9595PlatformerObjects1= [];
gdjs.Puzzle1Code.GDPine_9595PlatformerObjects2= [];
gdjs.Puzzle1Code.GDPlatform_9595Obstacle2Objects1= [];
gdjs.Puzzle1Code.GDPlatform_9595Obstacle2Objects2= [];
gdjs.Puzzle1Code.GDTop_9595Down_95951st_9595ObstacleObjects1= [];
gdjs.Puzzle1Code.GDTop_9595Down_95951st_9595ObstacleObjects2= [];
gdjs.Puzzle1Code.GDBackgroundObjects1= [];
gdjs.Puzzle1Code.GDBackgroundObjects2= [];
gdjs.Puzzle1Code.GDBack_9595Building_959516xObjects1= [];
gdjs.Puzzle1Code.GDBack_9595Building_959516xObjects2= [];
gdjs.Puzzle1Code.GDFor_9595Roads_959516x2Objects1= [];
gdjs.Puzzle1Code.GDFor_9595Roads_959516x2Objects2= [];
gdjs.Puzzle1Code.GDDarkenerObjects1= [];
gdjs.Puzzle1Code.GDDarkenerObjects2= [];
gdjs.Puzzle1Code.GDEnd_9595TriggerObjects1= [];
gdjs.Puzzle1Code.GDEnd_9595TriggerObjects2= [];
gdjs.Puzzle1Code.GDPlatfrom_9595TriggerObjects1= [];
gdjs.Puzzle1Code.GDPlatfrom_9595TriggerObjects2= [];
gdjs.Puzzle1Code.GDDialogueObjects1= [];
gdjs.Puzzle1Code.GDDialogueObjects2= [];
gdjs.Puzzle1Code.GDLoadingObjects1= [];
gdjs.Puzzle1Code.GDLoadingObjects2= [];
gdjs.Puzzle1Code.GDYes_9595buttonObjects1= [];
gdjs.Puzzle1Code.GDYes_9595buttonObjects2= [];
gdjs.Puzzle1Code.GDNo_9595buttonObjects1= [];
gdjs.Puzzle1Code.GDNo_9595buttonObjects2= [];
gdjs.Puzzle1Code.GDObstacle_95951Objects1= [];
gdjs.Puzzle1Code.GDObstacle_95951Objects2= [];
gdjs.Puzzle1Code.GDPine_9595Top_9595DownObjects1= [];
gdjs.Puzzle1Code.GDPine_9595Top_9595DownObjects2= [];
gdjs.Puzzle1Code.GDEnd_9595Trigger2Objects1= [];
gdjs.Puzzle1Code.GDEnd_9595Trigger2Objects2= [];
gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1= [];
gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects2= [];
gdjs.Puzzle1Code.GDShadowObjects1= [];
gdjs.Puzzle1Code.GDShadowObjects2= [];
gdjs.Puzzle1Code.GDDarkener2Objects1= [];
gdjs.Puzzle1Code.GDDarkener2Objects2= [];


gdjs.Puzzle1Code.mapOfGDgdjs_9546Puzzle1Code_9546GDPine_95959595Top_95959595Down2Objects1Objects = Hashtable.newFrom({"Pine_Top_Down2": gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1});
gdjs.Puzzle1Code.mapOfGDgdjs_9546Puzzle1Code_9546GDPlatform_95959595Obstacle2Objects1Objects = Hashtable.newFrom({"Platform_Obstacle2": gdjs.Puzzle1Code.GDPlatform_9595Obstacle2Objects1});
gdjs.Puzzle1Code.mapOfGDgdjs_9546Puzzle1Code_9546GDPlatform_95959595Obstacle2Objects1Objects = Hashtable.newFrom({"Platform_Obstacle2": gdjs.Puzzle1Code.GDPlatform_9595Obstacle2Objects1});
gdjs.Puzzle1Code.mapOfGDgdjs_9546Puzzle1Code_9546GDPine_95959595Top_95959595Down2Objects1Objects = Hashtable.newFrom({"Pine_Top_Down2": gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1});
gdjs.Puzzle1Code.mapOfGDgdjs_9546Puzzle1Code_9546GDEnd_95959595Trigger2Objects1Objects = Hashtable.newFrom({"End_Trigger2": gdjs.Puzzle1Code.GDEnd_9595Trigger2Objects1});
gdjs.Puzzle1Code.mapOfGDgdjs_9546Puzzle1Code_9546GDEnd_95959595Trigger2Objects1Objects = Hashtable.newFrom({"End_Trigger2": gdjs.Puzzle1Code.GDEnd_9595Trigger2Objects1});
gdjs.Puzzle1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Pine_Top_Down2"), gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1);
{for(var i = 0, len = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length ;i < len;++i) {
    gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i].getBehavior("Animation").setAnimationName("WalkDown");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Pine_Top_Down2"), gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1);
{for(var i = 0, len = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length ;i < len;++i) {
    gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i].getBehavior("Animation").setAnimationName("WalkDown");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Pine_Top_Down2"), gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1);
{for(var i = 0, len = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length ;i < len;++i) {
    gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i].getBehavior("Animation").setAnimationName("WalkUp");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Pine_Top_Down2"), gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1);
{for(var i = 0, len = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length ;i < len;++i) {
    gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i].getBehavior("Animation").setAnimationName("WalkUp");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Pine_Top_Down2"), gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1);
{for(var i = 0, len = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length ;i < len;++i) {
    gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i].getBehavior("Animation").setAnimationName("WalkLeft");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Pine_Top_Down2"), gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1);
{for(var i = 0, len = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length ;i < len;++i) {
    gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i].getBehavior("Animation").setAnimationName("WalkLeft");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Pine_Top_Down2"), gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1);
{for(var i = 0, len = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length ;i < len;++i) {
    gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i].getBehavior("Animation").setAnimationName("WalkRight");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Pine_Top_Down2"), gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1);
{for(var i = 0, len = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length ;i < len;++i) {
    gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i].getBehavior("Animation").setAnimationName("WalkRight");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pine_Top_Down2"), gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length;i<l;++i) {
    if ( !(gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[k] = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i];
        ++k;
    }
}
gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1 */
{for(var i = 0, len = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length ;i < len;++i) {
    gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i].getBehavior("Animation").setAnimationName("Still");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pine_Top_Down2"), gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform_Obstacle2"), gdjs.Puzzle1Code.GDPlatform_9595Obstacle2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Puzzle1Code.mapOfGDgdjs_9546Puzzle1Code_9546GDPine_95959595Top_95959595Down2Objects1Objects, gdjs.Puzzle1Code.mapOfGDgdjs_9546Puzzle1Code_9546GDPlatform_95959595Obstacle2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1 */
/* Reuse gdjs.Puzzle1Code.GDPlatform_9595Obstacle2Objects1 */
{for(var i = 0, len = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length ;i < len;++i) {
    gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i].separateFromObjectsList(gdjs.Puzzle1Code.mapOfGDgdjs_9546Puzzle1Code_9546GDPlatform_95959595Obstacle2Objects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("End_Trigger2"), gdjs.Puzzle1Code.GDEnd_9595Trigger2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pine_Top_Down2"), gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Puzzle1Code.mapOfGDgdjs_9546Puzzle1Code_9546GDPine_95959595Top_95959595Down2Objects1Objects, gdjs.Puzzle1Code.mapOfGDgdjs_9546Puzzle1Code_9546GDEnd_95959595Trigger2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Puzzle1Code.GDEnd_9595Trigger2Objects1 */
/* Reuse gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1 */
{for(var i = 0, len = gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length ;i < len;++i) {
    gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1[i].separateFromObjectsList(gdjs.Puzzle1Code.mapOfGDgdjs_9546Puzzle1Code_9546GDEnd_95959595Trigger2Objects1Objects, false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};

gdjs.Puzzle1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Puzzle1Code.GDPine_9595PlatformerObjects1.length = 0;
gdjs.Puzzle1Code.GDPine_9595PlatformerObjects2.length = 0;
gdjs.Puzzle1Code.GDPlatform_9595Obstacle2Objects1.length = 0;
gdjs.Puzzle1Code.GDPlatform_9595Obstacle2Objects2.length = 0;
gdjs.Puzzle1Code.GDTop_9595Down_95951st_9595ObstacleObjects1.length = 0;
gdjs.Puzzle1Code.GDTop_9595Down_95951st_9595ObstacleObjects2.length = 0;
gdjs.Puzzle1Code.GDBackgroundObjects1.length = 0;
gdjs.Puzzle1Code.GDBackgroundObjects2.length = 0;
gdjs.Puzzle1Code.GDBack_9595Building_959516xObjects1.length = 0;
gdjs.Puzzle1Code.GDBack_9595Building_959516xObjects2.length = 0;
gdjs.Puzzle1Code.GDFor_9595Roads_959516x2Objects1.length = 0;
gdjs.Puzzle1Code.GDFor_9595Roads_959516x2Objects2.length = 0;
gdjs.Puzzle1Code.GDDarkenerObjects1.length = 0;
gdjs.Puzzle1Code.GDDarkenerObjects2.length = 0;
gdjs.Puzzle1Code.GDEnd_9595TriggerObjects1.length = 0;
gdjs.Puzzle1Code.GDEnd_9595TriggerObjects2.length = 0;
gdjs.Puzzle1Code.GDPlatfrom_9595TriggerObjects1.length = 0;
gdjs.Puzzle1Code.GDPlatfrom_9595TriggerObjects2.length = 0;
gdjs.Puzzle1Code.GDDialogueObjects1.length = 0;
gdjs.Puzzle1Code.GDDialogueObjects2.length = 0;
gdjs.Puzzle1Code.GDLoadingObjects1.length = 0;
gdjs.Puzzle1Code.GDLoadingObjects2.length = 0;
gdjs.Puzzle1Code.GDYes_9595buttonObjects1.length = 0;
gdjs.Puzzle1Code.GDYes_9595buttonObjects2.length = 0;
gdjs.Puzzle1Code.GDNo_9595buttonObjects1.length = 0;
gdjs.Puzzle1Code.GDNo_9595buttonObjects2.length = 0;
gdjs.Puzzle1Code.GDObstacle_95951Objects1.length = 0;
gdjs.Puzzle1Code.GDObstacle_95951Objects2.length = 0;
gdjs.Puzzle1Code.GDPine_9595Top_9595DownObjects1.length = 0;
gdjs.Puzzle1Code.GDPine_9595Top_9595DownObjects2.length = 0;
gdjs.Puzzle1Code.GDEnd_9595Trigger2Objects1.length = 0;
gdjs.Puzzle1Code.GDEnd_9595Trigger2Objects2.length = 0;
gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length = 0;
gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects2.length = 0;
gdjs.Puzzle1Code.GDShadowObjects1.length = 0;
gdjs.Puzzle1Code.GDShadowObjects2.length = 0;
gdjs.Puzzle1Code.GDDarkener2Objects1.length = 0;
gdjs.Puzzle1Code.GDDarkener2Objects2.length = 0;

gdjs.Puzzle1Code.eventsList0(runtimeScene);
gdjs.Puzzle1Code.GDPine_9595PlatformerObjects1.length = 0;
gdjs.Puzzle1Code.GDPine_9595PlatformerObjects2.length = 0;
gdjs.Puzzle1Code.GDPlatform_9595Obstacle2Objects1.length = 0;
gdjs.Puzzle1Code.GDPlatform_9595Obstacle2Objects2.length = 0;
gdjs.Puzzle1Code.GDTop_9595Down_95951st_9595ObstacleObjects1.length = 0;
gdjs.Puzzle1Code.GDTop_9595Down_95951st_9595ObstacleObjects2.length = 0;
gdjs.Puzzle1Code.GDBackgroundObjects1.length = 0;
gdjs.Puzzle1Code.GDBackgroundObjects2.length = 0;
gdjs.Puzzle1Code.GDBack_9595Building_959516xObjects1.length = 0;
gdjs.Puzzle1Code.GDBack_9595Building_959516xObjects2.length = 0;
gdjs.Puzzle1Code.GDFor_9595Roads_959516x2Objects1.length = 0;
gdjs.Puzzle1Code.GDFor_9595Roads_959516x2Objects2.length = 0;
gdjs.Puzzle1Code.GDDarkenerObjects1.length = 0;
gdjs.Puzzle1Code.GDDarkenerObjects2.length = 0;
gdjs.Puzzle1Code.GDEnd_9595TriggerObjects1.length = 0;
gdjs.Puzzle1Code.GDEnd_9595TriggerObjects2.length = 0;
gdjs.Puzzle1Code.GDPlatfrom_9595TriggerObjects1.length = 0;
gdjs.Puzzle1Code.GDPlatfrom_9595TriggerObjects2.length = 0;
gdjs.Puzzle1Code.GDDialogueObjects1.length = 0;
gdjs.Puzzle1Code.GDDialogueObjects2.length = 0;
gdjs.Puzzle1Code.GDLoadingObjects1.length = 0;
gdjs.Puzzle1Code.GDLoadingObjects2.length = 0;
gdjs.Puzzle1Code.GDYes_9595buttonObjects1.length = 0;
gdjs.Puzzle1Code.GDYes_9595buttonObjects2.length = 0;
gdjs.Puzzle1Code.GDNo_9595buttonObjects1.length = 0;
gdjs.Puzzle1Code.GDNo_9595buttonObjects2.length = 0;
gdjs.Puzzle1Code.GDObstacle_95951Objects1.length = 0;
gdjs.Puzzle1Code.GDObstacle_95951Objects2.length = 0;
gdjs.Puzzle1Code.GDPine_9595Top_9595DownObjects1.length = 0;
gdjs.Puzzle1Code.GDPine_9595Top_9595DownObjects2.length = 0;
gdjs.Puzzle1Code.GDEnd_9595Trigger2Objects1.length = 0;
gdjs.Puzzle1Code.GDEnd_9595Trigger2Objects2.length = 0;
gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects1.length = 0;
gdjs.Puzzle1Code.GDPine_9595Top_9595Down2Objects2.length = 0;
gdjs.Puzzle1Code.GDShadowObjects1.length = 0;
gdjs.Puzzle1Code.GDShadowObjects2.length = 0;
gdjs.Puzzle1Code.GDDarkener2Objects1.length = 0;
gdjs.Puzzle1Code.GDDarkener2Objects2.length = 0;


return;

}

gdjs['Puzzle1Code'] = gdjs.Puzzle1Code;
