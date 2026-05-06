gdjs.Platformer1Code = {};
gdjs.Platformer1Code.localVariables = [];
gdjs.Platformer1Code.idToCallbackMap = new Map();
gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1= [];
gdjs.Platformer1Code.GDPlatform_9595EncounterObjects2= [];
gdjs.Platformer1Code.GDPlatform_9595EncounterObjects3= [];
gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1= [];
gdjs.Platformer1Code.GDPlatformer_9595AttackObjects2= [];
gdjs.Platformer1Code.GDPlatformer_9595AttackObjects3= [];
gdjs.Platformer1Code.GDPine_9595PlatformerObjects1= [];
gdjs.Platformer1Code.GDPine_9595PlatformerObjects2= [];
gdjs.Platformer1Code.GDPine_9595PlatformerObjects3= [];
gdjs.Platformer1Code.GDPlatform_9595Obstacle2Objects1= [];
gdjs.Platformer1Code.GDPlatform_9595Obstacle2Objects2= [];
gdjs.Platformer1Code.GDPlatform_9595Obstacle2Objects3= [];
gdjs.Platformer1Code.GDTop_9595Down_95951st_9595ObstacleObjects1= [];
gdjs.Platformer1Code.GDTop_9595Down_95951st_9595ObstacleObjects2= [];
gdjs.Platformer1Code.GDTop_9595Down_95951st_9595ObstacleObjects3= [];
gdjs.Platformer1Code.GDBackgroundObjects1= [];
gdjs.Platformer1Code.GDBackgroundObjects2= [];
gdjs.Platformer1Code.GDBackgroundObjects3= [];
gdjs.Platformer1Code.GDBack_9595Building_959516xObjects1= [];
gdjs.Platformer1Code.GDBack_9595Building_959516xObjects2= [];
gdjs.Platformer1Code.GDBack_9595Building_959516xObjects3= [];
gdjs.Platformer1Code.GDFor_9595Roads_959516x2Objects1= [];
gdjs.Platformer1Code.GDFor_9595Roads_959516x2Objects2= [];
gdjs.Platformer1Code.GDFor_9595Roads_959516x2Objects3= [];
gdjs.Platformer1Code.GDDarkenerObjects1= [];
gdjs.Platformer1Code.GDDarkenerObjects2= [];
gdjs.Platformer1Code.GDDarkenerObjects3= [];
gdjs.Platformer1Code.GDEnd_9595TriggerObjects1= [];
gdjs.Platformer1Code.GDEnd_9595TriggerObjects2= [];
gdjs.Platformer1Code.GDEnd_9595TriggerObjects3= [];
gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects1= [];
gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects2= [];
gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects3= [];
gdjs.Platformer1Code.GDDialogueObjects1= [];
gdjs.Platformer1Code.GDDialogueObjects2= [];
gdjs.Platformer1Code.GDDialogueObjects3= [];
gdjs.Platformer1Code.GDLoadingObjects1= [];
gdjs.Platformer1Code.GDLoadingObjects2= [];
gdjs.Platformer1Code.GDLoadingObjects3= [];
gdjs.Platformer1Code.GDYes_9595buttonObjects1= [];
gdjs.Platformer1Code.GDYes_9595buttonObjects2= [];
gdjs.Platformer1Code.GDYes_9595buttonObjects3= [];
gdjs.Platformer1Code.GDNo_9595buttonObjects1= [];
gdjs.Platformer1Code.GDNo_9595buttonObjects2= [];
gdjs.Platformer1Code.GDNo_9595buttonObjects3= [];
gdjs.Platformer1Code.GDObstacle_95951Objects1= [];
gdjs.Platformer1Code.GDObstacle_95951Objects2= [];
gdjs.Platformer1Code.GDObstacle_95951Objects3= [];
gdjs.Platformer1Code.GDPine_9595Top_9595DownObjects1= [];
gdjs.Platformer1Code.GDPine_9595Top_9595DownObjects2= [];
gdjs.Platformer1Code.GDPine_9595Top_9595DownObjects3= [];
gdjs.Platformer1Code.GDEnd_9595Trigger2Objects1= [];
gdjs.Platformer1Code.GDEnd_9595Trigger2Objects2= [];
gdjs.Platformer1Code.GDEnd_9595Trigger2Objects3= [];
gdjs.Platformer1Code.GDPine_9595Top_9595Down2Objects1= [];
gdjs.Platformer1Code.GDPine_9595Top_9595Down2Objects2= [];
gdjs.Platformer1Code.GDPine_9595Top_9595Down2Objects3= [];
gdjs.Platformer1Code.GDShadowObjects1= [];
gdjs.Platformer1Code.GDShadowObjects2= [];
gdjs.Platformer1Code.GDShadowObjects3= [];
gdjs.Platformer1Code.GDDarkener2Objects1= [];
gdjs.Platformer1Code.GDDarkener2Objects2= [];
gdjs.Platformer1Code.GDDarkener2Objects3= [];


gdjs.Platformer1Code.asyncCallback17938380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Platformer1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Platform_Encounter"), gdjs.Platformer1Code.GDPlatform_9595EncounterObjects2);

{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects2.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects2[i].hide();
}
}
gdjs.Platformer1Code.localVariables.length = 0;
}
gdjs.Platformer1Code.idToCallbackMap.set(17938380, gdjs.Platformer1Code.asyncCallback17938380);
gdjs.Platformer1Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Platformer1Code.localVariables);
for (const obj of gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1) asyncObjectsList.addObject("Platform_Encounter", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Platformer1Code.asyncCallback17938380(runtimeScene, asyncObjectsList)), 17938380, asyncObjectsList);
}
}

}


};gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDPine_95959595PlatformerObjects1Objects = Hashtable.newFrom({"Pine_Platformer": gdjs.Platformer1Code.GDPine_9595PlatformerObjects1});
gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDEnd_95959595TriggerObjects1Objects = Hashtable.newFrom({"End_Trigger": gdjs.Platformer1Code.GDEnd_9595TriggerObjects1});
gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDEnd_95959595TriggerObjects1Objects = Hashtable.newFrom({"End_Trigger": gdjs.Platformer1Code.GDEnd_9595TriggerObjects1});
gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDPine_95959595PlatformerObjects1Objects = Hashtable.newFrom({"Pine_Platformer": gdjs.Platformer1Code.GDPine_9595PlatformerObjects1});
gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDPlatfrom_95959595TriggerObjects1Objects = Hashtable.newFrom({"Platfrom_Trigger": gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects1});
gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDPine_95959595PlatformerObjects1Objects = Hashtable.newFrom({"Pine_Platformer": gdjs.Platformer1Code.GDPine_9595PlatformerObjects1});
gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDPlatfrom_95959595TriggerObjects1Objects = Hashtable.newFrom({"Platfrom_Trigger": gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects1});
gdjs.Platformer1Code.asyncCallback17951324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Platformer1Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Platform_Encounter"), gdjs.Platformer1Code.GDPlatform_9595EncounterObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("Platformer_Attack"), gdjs.Platformer1Code.GDPlatformer_9595AttackObjects3);

{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects3.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatformer_9595AttackObjects3.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatformer_9595AttackObjects3[i].hide();
}
}
gdjs.Platformer1Code.localVariables.length = 0;
}
gdjs.Platformer1Code.idToCallbackMap.set(17951324, gdjs.Platformer1Code.asyncCallback17951324);
gdjs.Platformer1Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Platformer1Code.localVariables);
for (const obj of gdjs.Platformer1Code.GDPlatformer_9595AttackObjects2) asyncObjectsList.addObject("Platformer_Attack", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Platformer1Code.asyncCallback17951324(runtimeScene, asyncObjectsList)), 17951324, asyncObjectsList);
}
}

}


};gdjs.Platformer1Code.asyncCallback17950468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Platformer1Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Pine_Platformer"), gdjs.Platformer1Code.GDPine_9595PlatformerObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("Platformer_Attack"), gdjs.Platformer1Code.GDPlatformer_9595AttackObjects2);

{for(var i = 0, len = gdjs.Platformer1Code.GDPlatformer_9595AttackObjects2.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatformer_9595AttackObjects2[i].getBehavior("Animation").setAnimationName("Unpressed");
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPine_9595PlatformerObjects2.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPine_9595PlatformerObjects2[i].setPosition(38,135);
}
}

{ //Subevents
gdjs.Platformer1Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Platformer1Code.localVariables.length = 0;
}
gdjs.Platformer1Code.idToCallbackMap.set(17950468, gdjs.Platformer1Code.asyncCallback17950468);
gdjs.Platformer1Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Platformer1Code.localVariables);
for (const obj of gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1) asyncObjectsList.addObject("Platformer_Attack", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Platformer1Code.asyncCallback17950468(runtimeScene, asyncObjectsList)), 17950468, asyncObjectsList);
}
}

}


};gdjs.Platformer1Code.asyncCallback17953060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Platformer1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Platform_Encounter"), gdjs.Platformer1Code.GDPlatform_9595EncounterObjects2);

{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects2.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
gdjs.Platformer1Code.localVariables.length = 0;
}
gdjs.Platformer1Code.idToCallbackMap.set(17953060, gdjs.Platformer1Code.asyncCallback17953060);
gdjs.Platformer1Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Platformer1Code.localVariables);
for (const obj of gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1) asyncObjectsList.addObject("Platform_Encounter", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Platformer1Code.asyncCallback17953060(runtimeScene, asyncObjectsList)), 17953060, asyncObjectsList);
}
}

}


};gdjs.Platformer1Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platform_Encounter"), gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Attack"), gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1[i].getBehavior("Animation").setAnimationName("Start");
}
}

{ //Subevents
gdjs.Platformer1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("End_Trigger"), gdjs.Platformer1Code.GDEnd_9595TriggerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pine_Platformer"), gdjs.Platformer1Code.GDPine_9595PlatformerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDPine_95959595PlatformerObjects1Objects, gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDEnd_95959595TriggerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Platformer1Code.GDEnd_9595TriggerObjects1 */
/* Reuse gdjs.Platformer1Code.GDPine_9595PlatformerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Platform_Encounter"), gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Attack"), gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1);
{for(var i = 0, len = gdjs.Platformer1Code.GDPine_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPine_9595PlatformerObjects1[i].setPosition(1272,112);
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1[i].getBehavior("Animation").setAnimationName("Done one");
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1[i].hide(false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPine_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPine_9595PlatformerObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPine_9595PlatformerObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPine_9595PlatformerObjects1[i].separateFromObjectsList(gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDEnd_95959595TriggerObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pine_Platformer"), gdjs.Platformer1Code.GDPine_9595PlatformerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platfrom_Trigger"), gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDPine_95959595PlatformerObjects1Objects, gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDPlatfrom_95959595TriggerObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platform_Encounter"), gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Attack"), gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1);
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1[i].getBehavior("Animation").setAnimationName("Twice");
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pine_Platformer"), gdjs.Platformer1Code.GDPine_9595PlatformerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platfrom_Trigger"), gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDPine_95959595PlatformerObjects1Objects, gdjs.Platformer1Code.mapOfGDgdjs_9546Platformer1Code_9546GDPlatfrom_95959595TriggerObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platform_Encounter"), gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Attack"), gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1);
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1[i].getBehavior("Animation").setAnimationName("Once");
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Attack"), gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1.length;i<l;++i) {
    if ( gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1[k] = gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1[i];
        ++k;
    }
}
gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1 */
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1[i].getBehavior("Animation").setAnimationName("Pressed");
}
}

{ //Subevents
gdjs.Platformer1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platform_Encounter"), gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Attack"), gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1);
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1[i].getBehavior("Animation").setAnimationName("Congrats");
}
}
{for(var i = 0, len = gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1.length ;i < len;++i) {
    gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.Platformer1Code.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.Platformer1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1.length = 0;
gdjs.Platformer1Code.GDPlatform_9595EncounterObjects2.length = 0;
gdjs.Platformer1Code.GDPlatform_9595EncounterObjects3.length = 0;
gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1.length = 0;
gdjs.Platformer1Code.GDPlatformer_9595AttackObjects2.length = 0;
gdjs.Platformer1Code.GDPlatformer_9595AttackObjects3.length = 0;
gdjs.Platformer1Code.GDPine_9595PlatformerObjects1.length = 0;
gdjs.Platformer1Code.GDPine_9595PlatformerObjects2.length = 0;
gdjs.Platformer1Code.GDPine_9595PlatformerObjects3.length = 0;
gdjs.Platformer1Code.GDPlatform_9595Obstacle2Objects1.length = 0;
gdjs.Platformer1Code.GDPlatform_9595Obstacle2Objects2.length = 0;
gdjs.Platformer1Code.GDPlatform_9595Obstacle2Objects3.length = 0;
gdjs.Platformer1Code.GDTop_9595Down_95951st_9595ObstacleObjects1.length = 0;
gdjs.Platformer1Code.GDTop_9595Down_95951st_9595ObstacleObjects2.length = 0;
gdjs.Platformer1Code.GDTop_9595Down_95951st_9595ObstacleObjects3.length = 0;
gdjs.Platformer1Code.GDBackgroundObjects1.length = 0;
gdjs.Platformer1Code.GDBackgroundObjects2.length = 0;
gdjs.Platformer1Code.GDBackgroundObjects3.length = 0;
gdjs.Platformer1Code.GDBack_9595Building_959516xObjects1.length = 0;
gdjs.Platformer1Code.GDBack_9595Building_959516xObjects2.length = 0;
gdjs.Platformer1Code.GDBack_9595Building_959516xObjects3.length = 0;
gdjs.Platformer1Code.GDFor_9595Roads_959516x2Objects1.length = 0;
gdjs.Platformer1Code.GDFor_9595Roads_959516x2Objects2.length = 0;
gdjs.Platformer1Code.GDFor_9595Roads_959516x2Objects3.length = 0;
gdjs.Platformer1Code.GDDarkenerObjects1.length = 0;
gdjs.Platformer1Code.GDDarkenerObjects2.length = 0;
gdjs.Platformer1Code.GDDarkenerObjects3.length = 0;
gdjs.Platformer1Code.GDEnd_9595TriggerObjects1.length = 0;
gdjs.Platformer1Code.GDEnd_9595TriggerObjects2.length = 0;
gdjs.Platformer1Code.GDEnd_9595TriggerObjects3.length = 0;
gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects1.length = 0;
gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects2.length = 0;
gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects3.length = 0;
gdjs.Platformer1Code.GDDialogueObjects1.length = 0;
gdjs.Platformer1Code.GDDialogueObjects2.length = 0;
gdjs.Platformer1Code.GDDialogueObjects3.length = 0;
gdjs.Platformer1Code.GDLoadingObjects1.length = 0;
gdjs.Platformer1Code.GDLoadingObjects2.length = 0;
gdjs.Platformer1Code.GDLoadingObjects3.length = 0;
gdjs.Platformer1Code.GDYes_9595buttonObjects1.length = 0;
gdjs.Platformer1Code.GDYes_9595buttonObjects2.length = 0;
gdjs.Platformer1Code.GDYes_9595buttonObjects3.length = 0;
gdjs.Platformer1Code.GDNo_9595buttonObjects1.length = 0;
gdjs.Platformer1Code.GDNo_9595buttonObjects2.length = 0;
gdjs.Platformer1Code.GDNo_9595buttonObjects3.length = 0;
gdjs.Platformer1Code.GDObstacle_95951Objects1.length = 0;
gdjs.Platformer1Code.GDObstacle_95951Objects2.length = 0;
gdjs.Platformer1Code.GDObstacle_95951Objects3.length = 0;
gdjs.Platformer1Code.GDPine_9595Top_9595DownObjects1.length = 0;
gdjs.Platformer1Code.GDPine_9595Top_9595DownObjects2.length = 0;
gdjs.Platformer1Code.GDPine_9595Top_9595DownObjects3.length = 0;
gdjs.Platformer1Code.GDEnd_9595Trigger2Objects1.length = 0;
gdjs.Platformer1Code.GDEnd_9595Trigger2Objects2.length = 0;
gdjs.Platformer1Code.GDEnd_9595Trigger2Objects3.length = 0;
gdjs.Platformer1Code.GDPine_9595Top_9595Down2Objects1.length = 0;
gdjs.Platformer1Code.GDPine_9595Top_9595Down2Objects2.length = 0;
gdjs.Platformer1Code.GDPine_9595Top_9595Down2Objects3.length = 0;
gdjs.Platformer1Code.GDShadowObjects1.length = 0;
gdjs.Platformer1Code.GDShadowObjects2.length = 0;
gdjs.Platformer1Code.GDShadowObjects3.length = 0;
gdjs.Platformer1Code.GDDarkener2Objects1.length = 0;
gdjs.Platformer1Code.GDDarkener2Objects2.length = 0;
gdjs.Platformer1Code.GDDarkener2Objects3.length = 0;

gdjs.Platformer1Code.eventsList4(runtimeScene);
gdjs.Platformer1Code.GDPlatform_9595EncounterObjects1.length = 0;
gdjs.Platformer1Code.GDPlatform_9595EncounterObjects2.length = 0;
gdjs.Platformer1Code.GDPlatform_9595EncounterObjects3.length = 0;
gdjs.Platformer1Code.GDPlatformer_9595AttackObjects1.length = 0;
gdjs.Platformer1Code.GDPlatformer_9595AttackObjects2.length = 0;
gdjs.Platformer1Code.GDPlatformer_9595AttackObjects3.length = 0;
gdjs.Platformer1Code.GDPine_9595PlatformerObjects1.length = 0;
gdjs.Platformer1Code.GDPine_9595PlatformerObjects2.length = 0;
gdjs.Platformer1Code.GDPine_9595PlatformerObjects3.length = 0;
gdjs.Platformer1Code.GDPlatform_9595Obstacle2Objects1.length = 0;
gdjs.Platformer1Code.GDPlatform_9595Obstacle2Objects2.length = 0;
gdjs.Platformer1Code.GDPlatform_9595Obstacle2Objects3.length = 0;
gdjs.Platformer1Code.GDTop_9595Down_95951st_9595ObstacleObjects1.length = 0;
gdjs.Platformer1Code.GDTop_9595Down_95951st_9595ObstacleObjects2.length = 0;
gdjs.Platformer1Code.GDTop_9595Down_95951st_9595ObstacleObjects3.length = 0;
gdjs.Platformer1Code.GDBackgroundObjects1.length = 0;
gdjs.Platformer1Code.GDBackgroundObjects2.length = 0;
gdjs.Platformer1Code.GDBackgroundObjects3.length = 0;
gdjs.Platformer1Code.GDBack_9595Building_959516xObjects1.length = 0;
gdjs.Platformer1Code.GDBack_9595Building_959516xObjects2.length = 0;
gdjs.Platformer1Code.GDBack_9595Building_959516xObjects3.length = 0;
gdjs.Platformer1Code.GDFor_9595Roads_959516x2Objects1.length = 0;
gdjs.Platformer1Code.GDFor_9595Roads_959516x2Objects2.length = 0;
gdjs.Platformer1Code.GDFor_9595Roads_959516x2Objects3.length = 0;
gdjs.Platformer1Code.GDDarkenerObjects1.length = 0;
gdjs.Platformer1Code.GDDarkenerObjects2.length = 0;
gdjs.Platformer1Code.GDDarkenerObjects3.length = 0;
gdjs.Platformer1Code.GDEnd_9595TriggerObjects1.length = 0;
gdjs.Platformer1Code.GDEnd_9595TriggerObjects2.length = 0;
gdjs.Platformer1Code.GDEnd_9595TriggerObjects3.length = 0;
gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects1.length = 0;
gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects2.length = 0;
gdjs.Platformer1Code.GDPlatfrom_9595TriggerObjects3.length = 0;
gdjs.Platformer1Code.GDDialogueObjects1.length = 0;
gdjs.Platformer1Code.GDDialogueObjects2.length = 0;
gdjs.Platformer1Code.GDDialogueObjects3.length = 0;
gdjs.Platformer1Code.GDLoadingObjects1.length = 0;
gdjs.Platformer1Code.GDLoadingObjects2.length = 0;
gdjs.Platformer1Code.GDLoadingObjects3.length = 0;
gdjs.Platformer1Code.GDYes_9595buttonObjects1.length = 0;
gdjs.Platformer1Code.GDYes_9595buttonObjects2.length = 0;
gdjs.Platformer1Code.GDYes_9595buttonObjects3.length = 0;
gdjs.Platformer1Code.GDNo_9595buttonObjects1.length = 0;
gdjs.Platformer1Code.GDNo_9595buttonObjects2.length = 0;
gdjs.Platformer1Code.GDNo_9595buttonObjects3.length = 0;
gdjs.Platformer1Code.GDObstacle_95951Objects1.length = 0;
gdjs.Platformer1Code.GDObstacle_95951Objects2.length = 0;
gdjs.Platformer1Code.GDObstacle_95951Objects3.length = 0;
gdjs.Platformer1Code.GDPine_9595Top_9595DownObjects1.length = 0;
gdjs.Platformer1Code.GDPine_9595Top_9595DownObjects2.length = 0;
gdjs.Platformer1Code.GDPine_9595Top_9595DownObjects3.length = 0;
gdjs.Platformer1Code.GDEnd_9595Trigger2Objects1.length = 0;
gdjs.Platformer1Code.GDEnd_9595Trigger2Objects2.length = 0;
gdjs.Platformer1Code.GDEnd_9595Trigger2Objects3.length = 0;
gdjs.Platformer1Code.GDPine_9595Top_9595Down2Objects1.length = 0;
gdjs.Platformer1Code.GDPine_9595Top_9595Down2Objects2.length = 0;
gdjs.Platformer1Code.GDPine_9595Top_9595Down2Objects3.length = 0;
gdjs.Platformer1Code.GDShadowObjects1.length = 0;
gdjs.Platformer1Code.GDShadowObjects2.length = 0;
gdjs.Platformer1Code.GDShadowObjects3.length = 0;
gdjs.Platformer1Code.GDDarkener2Objects1.length = 0;
gdjs.Platformer1Code.GDDarkener2Objects2.length = 0;
gdjs.Platformer1Code.GDDarkener2Objects3.length = 0;


return;

}

gdjs['Platformer1Code'] = gdjs.Platformer1Code;
