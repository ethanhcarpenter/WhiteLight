gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.idToCallbackMap = new Map();
gdjs.gameCode.GDblueGhostObjects1_1final = [];

gdjs.gameCode.GDdotObjects1_1final = [];

gdjs.gameCode.GDpathObjects1_1final = [];

gdjs.gameCode.GDplayerObjects1_1final = [];

gdjs.gameCode.GDredGhostObjects1_1final = [];

gdjs.gameCode.GDyellowGhostObjects1_1final = [];

gdjs.gameCode.forEachIndex3 = 0;

gdjs.gameCode.forEachObjects3 = [];

gdjs.gameCode.forEachTemporary3 = null;

gdjs.gameCode.forEachTotalCount3 = 0;

gdjs.gameCode.GDpathObjects1= [];
gdjs.gameCode.GDpathObjects2= [];
gdjs.gameCode.GDpathObjects3= [];
gdjs.gameCode.GDpathObjects4= [];
gdjs.gameCode.GDpathObjects5= [];
gdjs.gameCode.GDpathObjects6= [];
gdjs.gameCode.GDplayerObjects1= [];
gdjs.gameCode.GDplayerObjects2= [];
gdjs.gameCode.GDplayerObjects3= [];
gdjs.gameCode.GDplayerObjects4= [];
gdjs.gameCode.GDplayerObjects5= [];
gdjs.gameCode.GDplayerObjects6= [];
gdjs.gameCode.GDbgObjects1= [];
gdjs.gameCode.GDbgObjects2= [];
gdjs.gameCode.GDbgObjects3= [];
gdjs.gameCode.GDbgObjects4= [];
gdjs.gameCode.GDbgObjects5= [];
gdjs.gameCode.GDbgObjects6= [];
gdjs.gameCode.GDgood_9595spotsObjects1= [];
gdjs.gameCode.GDgood_9595spotsObjects2= [];
gdjs.gameCode.GDgood_9595spotsObjects3= [];
gdjs.gameCode.GDgood_9595spotsObjects4= [];
gdjs.gameCode.GDgood_9595spotsObjects5= [];
gdjs.gameCode.GDgood_9595spotsObjects6= [];
gdjs.gameCode.GDdebugObjects1= [];
gdjs.gameCode.GDdebugObjects2= [];
gdjs.gameCode.GDdebugObjects3= [];
gdjs.gameCode.GDdebugObjects4= [];
gdjs.gameCode.GDdebugObjects5= [];
gdjs.gameCode.GDdebugObjects6= [];
gdjs.gameCode.GDdotObjects1= [];
gdjs.gameCode.GDdotObjects2= [];
gdjs.gameCode.GDdotObjects3= [];
gdjs.gameCode.GDdotObjects4= [];
gdjs.gameCode.GDdotObjects5= [];
gdjs.gameCode.GDdotObjects6= [];
gdjs.gameCode.GDfakeObjects1= [];
gdjs.gameCode.GDfakeObjects2= [];
gdjs.gameCode.GDfakeObjects3= [];
gdjs.gameCode.GDfakeObjects4= [];
gdjs.gameCode.GDfakeObjects5= [];
gdjs.gameCode.GDfakeObjects6= [];
gdjs.gameCode.GDghosts_9595onlyObjects1= [];
gdjs.gameCode.GDghosts_9595onlyObjects2= [];
gdjs.gameCode.GDghosts_9595onlyObjects3= [];
gdjs.gameCode.GDghosts_9595onlyObjects4= [];
gdjs.gameCode.GDghosts_9595onlyObjects5= [];
gdjs.gameCode.GDghosts_9595onlyObjects6= [];
gdjs.gameCode.GDghostPathObjects1= [];
gdjs.gameCode.GDghostPathObjects2= [];
gdjs.gameCode.GDghostPathObjects3= [];
gdjs.gameCode.GDghostPathObjects4= [];
gdjs.gameCode.GDghostPathObjects5= [];
gdjs.gameCode.GDghostPathObjects6= [];
gdjs.gameCode.GDghostsObjects1= [];
gdjs.gameCode.GDghostsObjects2= [];
gdjs.gameCode.GDghostsObjects3= [];
gdjs.gameCode.GDghostsObjects4= [];
gdjs.gameCode.GDghostsObjects5= [];
gdjs.gameCode.GDghostsObjects6= [];
gdjs.gameCode.GDscore_9595textObjects1= [];
gdjs.gameCode.GDscore_9595textObjects2= [];
gdjs.gameCode.GDscore_9595textObjects3= [];
gdjs.gameCode.GDscore_9595textObjects4= [];
gdjs.gameCode.GDscore_9595textObjects5= [];
gdjs.gameCode.GDscore_9595textObjects6= [];
gdjs.gameCode.GDuselessObjects1= [];
gdjs.gameCode.GDuselessObjects2= [];
gdjs.gameCode.GDuselessObjects3= [];
gdjs.gameCode.GDuselessObjects4= [];
gdjs.gameCode.GDuselessObjects5= [];
gdjs.gameCode.GDuselessObjects6= [];
gdjs.gameCode.GDborderObjects1= [];
gdjs.gameCode.GDborderObjects2= [];
gdjs.gameCode.GDborderObjects3= [];
gdjs.gameCode.GDborderObjects4= [];
gdjs.gameCode.GDborderObjects5= [];
gdjs.gameCode.GDborderObjects6= [];
gdjs.gameCode.GDredGhostObjects1= [];
gdjs.gameCode.GDredGhostObjects2= [];
gdjs.gameCode.GDredGhostObjects3= [];
gdjs.gameCode.GDredGhostObjects4= [];
gdjs.gameCode.GDredGhostObjects5= [];
gdjs.gameCode.GDredGhostObjects6= [];
gdjs.gameCode.GDblueGhostObjects1= [];
gdjs.gameCode.GDblueGhostObjects2= [];
gdjs.gameCode.GDblueGhostObjects3= [];
gdjs.gameCode.GDblueGhostObjects4= [];
gdjs.gameCode.GDblueGhostObjects5= [];
gdjs.gameCode.GDblueGhostObjects6= [];
gdjs.gameCode.GDyellowGhostObjects1= [];
gdjs.gameCode.GDyellowGhostObjects2= [];
gdjs.gameCode.GDyellowGhostObjects3= [];
gdjs.gameCode.GDyellowGhostObjects4= [];
gdjs.gameCode.GDyellowGhostObjects5= [];
gdjs.gameCode.GDyellowGhostObjects6= [];


gdjs.gameCode.mapOfEmptyGDdotObjects = Hashtable.newFrom({"dot": []});
gdjs.gameCode.userFunc0x912918 = function GDJSInlineCode(runtimeScene) {
"use strict";
const ghosts=runtimeScene.getObjects("ghosts")
//const red=runtimeScene.getObjects("redGhost")
const blue=runtimeScene.getObjects("blueGhost")
const yellow=runtimeScene.getObjects("yellowGhost")
const red=runtimeScene.getObjects("redGhost")
if(ghosts.length==0 || blue.length==0||red.length==0||yellow.length==0)return

ghosts[0].setPosition(blue[0].getX(),blue[0].getY())
ghosts[1].setPosition(yellow[0].getX(),yellow[0].getY())
ghosts[2].setPosition(red[0].getX(),red[0].getY())
};
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.gameCode.GDplayerObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDpathObjects3Objects = Hashtable.newFrom({"path": gdjs.gameCode.GDpathObjects3});
gdjs.gameCode.eventsList0 = function(runtimeScene) {

};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDpathObjects3Objects = Hashtable.newFrom({"path": gdjs.gameCode.GDpathObjects3});
gdjs.gameCode.eventsList1 = function(runtimeScene) {

};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDghostPathObjects3Objects = Hashtable.newFrom({"ghostPath": gdjs.gameCode.GDghostPathObjects3});
gdjs.gameCode.eventsList2 = function(runtimeScene) {

};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDghostPathObjects3Objects = Hashtable.newFrom({"ghostPath": gdjs.gameCode.GDghostPathObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDblueGhostObjects3Objects = Hashtable.newFrom({"blueGhost": gdjs.gameCode.GDblueGhostObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDghostsObjects3Objects = Hashtable.newFrom({"ghosts": gdjs.gameCode.GDghostsObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDredGhostObjects3Objects = Hashtable.newFrom({"redGhost": gdjs.gameCode.GDredGhostObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDghostsObjects3Objects = Hashtable.newFrom({"ghosts": gdjs.gameCode.GDghostsObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDyellowGhostObjects3Objects = Hashtable.newFrom({"yellowGhost": gdjs.gameCode.GDyellowGhostObjects3});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDghostsObjects3Objects = Hashtable.newFrom({"ghosts": gdjs.gameCode.GDghostsObjects3});
gdjs.gameCode.eventsList3 = function(runtimeScene) {

};gdjs.gameCode.eventsList4 = function(runtimeScene) {

};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdotObjects5Objects = Hashtable.newFrom({"dot": gdjs.gameCode.GDdotObjects5});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdotObjects4Objects = Hashtable.newFrom({"dot": gdjs.gameCode.GDdotObjects4});
gdjs.gameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.gameCode.GDdotObjects5);
gdjs.copyArray(gdjs.gameCode.GDpathObjects4, gdjs.gameCode.GDpathObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdotObjects5.length;i<l;++i) {
    if ( gdjs.gameCode.GDdotObjects5[i].isCollidingWithPoint((( gdjs.gameCode.GDpathObjects5.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects5[0].getPointX("rightC")) - runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() / 2.5, (( gdjs.gameCode.GDpathObjects5.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects5[0].getPointY(""))) ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDdotObjects5[k] = gdjs.gameCode.GDdotObjects5[i];
        ++k;
    }
}
gdjs.gameCode.GDdotObjects5.length = k;
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpathObjects5 */
/* Reuse gdjs.gameCode.GDdotObjects5 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdotObjects5Objects, (( gdjs.gameCode.GDpathObjects5.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects5[0].getPointX("rightC")) - runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() / 2.5, (( gdjs.gameCode.GDpathObjects5.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects5[0].getPointY("")), "");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.gameCode.GDdotObjects4);
/* Reuse gdjs.gameCode.GDpathObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdotObjects4.length;i<l;++i) {
    if ( gdjs.gameCode.GDdotObjects4[i].isCollidingWithPoint((( gdjs.gameCode.GDpathObjects4.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects4[0].getPointX("leftC")) + runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() / 2.5, (( gdjs.gameCode.GDpathObjects4.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects4[0].getPointY(""))) ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDdotObjects4[k] = gdjs.gameCode.GDdotObjects4[i];
        ++k;
    }
}
gdjs.gameCode.GDdotObjects4.length = k;
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpathObjects4 */
/* Reuse gdjs.gameCode.GDdotObjects4 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdotObjects4Objects, (( gdjs.gameCode.GDpathObjects4.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects4[0].getPointX("leftC")) + runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() / 2.5, (( gdjs.gameCode.GDpathObjects4.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects4[0].getPointY("")), "");
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdotObjects5Objects = Hashtable.newFrom({"dot": gdjs.gameCode.GDdotObjects5});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdotObjects4Objects = Hashtable.newFrom({"dot": gdjs.gameCode.GDdotObjects4});
gdjs.gameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.gameCode.GDdotObjects5);
gdjs.copyArray(gdjs.gameCode.GDpathObjects4, gdjs.gameCode.GDpathObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdotObjects5.length;i<l;++i) {
    if ( gdjs.gameCode.GDdotObjects5[i].isCollidingWithPoint((( gdjs.gameCode.GDpathObjects5.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects5[0].getPointX("")), (( gdjs.gameCode.GDpathObjects5.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects5[0].getPointY("topC")) + runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() / 2.5) ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDdotObjects5[k] = gdjs.gameCode.GDdotObjects5[i];
        ++k;
    }
}
gdjs.gameCode.GDdotObjects5.length = k;
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpathObjects5 */
/* Reuse gdjs.gameCode.GDdotObjects5 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdotObjects5Objects, (( gdjs.gameCode.GDpathObjects5.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects5[0].getPointX("")), (( gdjs.gameCode.GDpathObjects5.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects5[0].getPointY("topC")) + runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() / 2.5, "");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.gameCode.GDdotObjects4);
/* Reuse gdjs.gameCode.GDpathObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdotObjects4.length;i<l;++i) {
    if ( gdjs.gameCode.GDdotObjects4[i].isCollidingWithPoint((( gdjs.gameCode.GDpathObjects4.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects4[0].getPointX("")), (( gdjs.gameCode.GDpathObjects4.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects4[0].getPointY("bottomC")) - runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() / 2.5) ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDdotObjects4[k] = gdjs.gameCode.GDdotObjects4[i];
        ++k;
    }
}
gdjs.gameCode.GDdotObjects4.length = k;
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDpathObjects4 */
/* Reuse gdjs.gameCode.GDdotObjects4 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdotObjects4Objects, (( gdjs.gameCode.GDpathObjects4.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects4[0].getPointX("")), (( gdjs.gameCode.GDpathObjects4.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects4[0].getPointY("bottomC")) - runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() / 2.5, "");
}
}

}


};gdjs.gameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDpathObjects3, gdjs.gameCode.GDpathObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.gameCode.GDpathObjects4.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects4[0].getWidth()) > (( gdjs.gameCode.GDpathObjects4.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects4[0].getHeight()));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.gameCode.GDpathObjects3, gdjs.gameCode.GDpathObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.gameCode.GDpathObjects4.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects4[0].getWidth()) < (( gdjs.gameCode.GDpathObjects4.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects4[0].getHeight()));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDgood_9595spotsObjects1, gdjs.gameCode.GDgood_9595spotsObjects2);


for (gdjs.gameCode.forEachIndex3 = 0;gdjs.gameCode.forEachIndex3 < gdjs.gameCode.GDgood_9595spotsObjects2.length;++gdjs.gameCode.forEachIndex3) {
gdjs.gameCode.GDpathObjects3.length = 0;

gdjs.gameCode.GDgood_9595spotsObjects3.length = 0;


gdjs.gameCode.forEachTemporary3 = gdjs.gameCode.GDgood_9595spotsObjects2[gdjs.gameCode.forEachIndex3];
gdjs.gameCode.GDgood_9595spotsObjects3.push(gdjs.gameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.gameCode.GDgood_9595spotsObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects3[0].getWidth()) < (( gdjs.gameCode.GDgood_9595spotsObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDpathObjects3Objects, (( gdjs.gameCode.GDgood_9595spotsObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects3[0].getCenterXInScene()), (( gdjs.gameCode.GDgood_9595spotsObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects3[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.gameCode.GDpathObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDpathObjects3[i].getBehavior("Resizable").setWidth(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
}
{for(var i = 0, len = gdjs.gameCode.GDpathObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDpathObjects3[i].getBehavior("Resizable").setHeight((( gdjs.gameCode.GDgood_9595spotsObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects3[0].getHeight()) - 35);
}
}
}
}

}


{

gdjs.copyArray(gdjs.gameCode.GDgood_9595spotsObjects1, gdjs.gameCode.GDgood_9595spotsObjects2);


for (gdjs.gameCode.forEachIndex3 = 0;gdjs.gameCode.forEachIndex3 < gdjs.gameCode.GDgood_9595spotsObjects2.length;++gdjs.gameCode.forEachIndex3) {
gdjs.gameCode.GDpathObjects3.length = 0;

gdjs.gameCode.GDgood_9595spotsObjects3.length = 0;


gdjs.gameCode.forEachTemporary3 = gdjs.gameCode.GDgood_9595spotsObjects2[gdjs.gameCode.forEachIndex3];
gdjs.gameCode.GDgood_9595spotsObjects3.push(gdjs.gameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.gameCode.GDgood_9595spotsObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects3[0].getWidth()) > (( gdjs.gameCode.GDgood_9595spotsObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDpathObjects3Objects, (( gdjs.gameCode.GDgood_9595spotsObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects3[0].getCenterXInScene()), (( gdjs.gameCode.GDgood_9595spotsObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects3[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.gameCode.GDpathObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDpathObjects3[i].getBehavior("Resizable").setHeight(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
}
{for(var i = 0, len = gdjs.gameCode.GDpathObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDpathObjects3[i].getBehavior("Resizable").setWidth((( gdjs.gameCode.GDgood_9595spotsObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects3[0].getWidth()) - 35);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ghosts_only"), gdjs.gameCode.GDghosts_9595onlyObjects2);

for (gdjs.gameCode.forEachIndex3 = 0;gdjs.gameCode.forEachIndex3 < gdjs.gameCode.GDghosts_9595onlyObjects2.length;++gdjs.gameCode.forEachIndex3) {
gdjs.gameCode.GDghostPathObjects3.length = 0;

gdjs.gameCode.GDghosts_9595onlyObjects3.length = 0;


gdjs.gameCode.forEachTemporary3 = gdjs.gameCode.GDghosts_9595onlyObjects2[gdjs.gameCode.forEachIndex3];
gdjs.gameCode.GDghosts_9595onlyObjects3.push(gdjs.gameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.gameCode.GDghosts_9595onlyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghosts_9595onlyObjects3[0].getWidth()) < (( gdjs.gameCode.GDghosts_9595onlyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghosts_9595onlyObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDghostPathObjects3Objects, (( gdjs.gameCode.GDghosts_9595onlyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghosts_9595onlyObjects3[0].getCenterXInScene()), (( gdjs.gameCode.GDghosts_9595onlyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghosts_9595onlyObjects3[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.gameCode.GDghostPathObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDghostPathObjects3[i].getBehavior("Resizable").setWidth(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
}
{for(var i = 0, len = gdjs.gameCode.GDghostPathObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDghostPathObjects3[i].getBehavior("Resizable").setHeight((( gdjs.gameCode.GDghosts_9595onlyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghosts_9595onlyObjects3[0].getHeight()) - 35);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ghosts_only"), gdjs.gameCode.GDghosts_9595onlyObjects2);

for (gdjs.gameCode.forEachIndex3 = 0;gdjs.gameCode.forEachIndex3 < gdjs.gameCode.GDghosts_9595onlyObjects2.length;++gdjs.gameCode.forEachIndex3) {
gdjs.gameCode.GDblueGhostObjects3.length = 0;

gdjs.gameCode.GDghostPathObjects3.length = 0;

gdjs.gameCode.GDghostsObjects3.length = 0;

gdjs.gameCode.GDredGhostObjects3.length = 0;

gdjs.gameCode.GDyellowGhostObjects3.length = 0;

gdjs.gameCode.GDghosts_9595onlyObjects3.length = 0;


gdjs.gameCode.forEachTemporary3 = gdjs.gameCode.GDghosts_9595onlyObjects2[gdjs.gameCode.forEachIndex3];
gdjs.gameCode.GDghosts_9595onlyObjects3.push(gdjs.gameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.gameCode.GDghosts_9595onlyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghosts_9595onlyObjects3[0].getWidth()) > (( gdjs.gameCode.GDghosts_9595onlyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghosts_9595onlyObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDghostPathObjects3Objects, (( gdjs.gameCode.GDghosts_9595onlyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghosts_9595onlyObjects3[0].getCenterXInScene()), (( gdjs.gameCode.GDghosts_9595onlyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghosts_9595onlyObjects3[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.gameCode.GDghostPathObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDghostPathObjects3[i].getBehavior("Resizable").setHeight(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
}
{for(var i = 0, len = gdjs.gameCode.GDghostPathObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDghostPathObjects3[i].getBehavior("Resizable").setWidth((( gdjs.gameCode.GDghosts_9595onlyObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghosts_9595onlyObjects3[0].getWidth()) - 40);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDblueGhostObjects3Objects, (( gdjs.gameCode.GDghostPathObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghostPathObjects3[0].getPointX("leftC")), (( gdjs.gameCode.GDghostPathObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghostPathObjects3[0].getCenterYInScene()), "ghost layer");
}
{for(var i = 0, len = gdjs.gameCode.GDblueGhostObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDblueGhostObjects3[i].getBehavior("Resizable").setSize(28, 28);
}
}
{for(var i = 0, len = gdjs.gameCode.GDblueGhostObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDblueGhostObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDghostsObjects3Objects, (( gdjs.gameCode.GDblueGhostObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDblueGhostObjects3[0].getCenterXInScene()), (( gdjs.gameCode.GDblueGhostObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDblueGhostObjects3[0].getCenterYInScene()), "ghost layer");
}
{for(var i = 0, len = gdjs.gameCode.GDghostsObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDghostsObjects3[i].getBehavior("Resizable").setSize(28, 28);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDredGhostObjects3Objects, (( gdjs.gameCode.GDghostPathObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghostPathObjects3[0].getCenterXInScene()), (( gdjs.gameCode.GDghostPathObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghostPathObjects3[0].getCenterYInScene()), "ghost layer");
}
{for(var i = 0, len = gdjs.gameCode.GDredGhostObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDredGhostObjects3[i].getBehavior("Resizable").setSize(28, 28);
}
}
{for(var i = 0, len = gdjs.gameCode.GDredGhostObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDredGhostObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDghostsObjects3Objects, 0, 0, "ghost layer");
}
{for(var i = 0, len = gdjs.gameCode.GDghostsObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDghostsObjects3[i].getBehavior("Resizable").setSize(28, 28);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDyellowGhostObjects3Objects, (( gdjs.gameCode.GDghostPathObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghostPathObjects3[0].getPointX("rightC")), (( gdjs.gameCode.GDghostPathObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDghostPathObjects3[0].getCenterYInScene()), "ghost layer");
}
{for(var i = 0, len = gdjs.gameCode.GDyellowGhostObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDyellowGhostObjects3[i].getBehavior("Resizable").setSize(28, 28);
}
}
{for(var i = 0, len = gdjs.gameCode.GDyellowGhostObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDyellowGhostObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDghostsObjects3Objects, (( gdjs.gameCode.GDyellowGhostObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDyellowGhostObjects3[0].getCenterXInScene()), (( gdjs.gameCode.GDyellowGhostObjects3.length === 0 ) ? 0 :gdjs.gameCode.GDyellowGhostObjects3[0].getCenterYInScene()), "ghost layer");
}
{for(var i = 0, len = gdjs.gameCode.GDghostsObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDghostsObjects3[i].getBehavior("Resizable").setSize(28, 28);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ghosts"), gdjs.gameCode.GDghostsObjects2);

for (gdjs.gameCode.forEachIndex3 = 0;gdjs.gameCode.forEachIndex3 < gdjs.gameCode.GDghostsObjects2.length;++gdjs.gameCode.forEachIndex3) {
gdjs.gameCode.GDghostsObjects3.length = 0;


gdjs.gameCode.forEachTemporary3 = gdjs.gameCode.GDghostsObjects2[gdjs.gameCode.forEachIndex3];
gdjs.gameCode.GDghostsObjects3.push(gdjs.gameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.gameCode.GDghostsObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDghostsObjects3[i].hide();
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("blueGhost"), gdjs.gameCode.GDblueGhostObjects2);
gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects2);
gdjs.copyArray(runtimeScene.getObjects("yellowGhost"), gdjs.gameCode.GDyellowGhostObjects2);
{for(var i = 0, len = gdjs.gameCode.GDyellowGhostObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDyellowGhostObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.gameCode.GDredGhostObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDredGhostObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.gameCode.GDblueGhostObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDblueGhostObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);

for (gdjs.gameCode.forEachIndex3 = 0;gdjs.gameCode.forEachIndex3 < gdjs.gameCode.GDpathObjects2.length;++gdjs.gameCode.forEachIndex3) {
gdjs.gameCode.GDpathObjects3.length = 0;


gdjs.gameCode.forEachTemporary3 = gdjs.gameCode.GDpathObjects2[gdjs.gameCode.forEachIndex3];
gdjs.gameCode.GDpathObjects3.push(gdjs.gameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.gameCode.GDpathObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDpathObjects3[i].hide();
}
}

{ //Subevents: 
gdjs.gameCode.eventsList7(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ghosts_only"), gdjs.gameCode.GDghosts_9595onlyObjects1);
/* Reuse gdjs.gameCode.GDgood_9595spotsObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDgood_9595spotsObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDgood_9595spotsObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.gameCode.GDghosts_9595onlyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDghosts_9595onlyObjects1[i].hide();
}
}
}

}


};gdjs.gameCode.eventsList9 = function(runtimeScene) {

};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdotObjects1Objects = Hashtable.newFrom({"dot": gdjs.gameCode.GDdotObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdotObjects1Objects = Hashtable.newFrom({"dot": gdjs.gameCode.GDdotObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDpathObjects1Objects = Hashtable.newFrom({"path": gdjs.gameCode.GDpathObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDpathObjects1Objects = Hashtable.newFrom({"path": gdjs.gameCode.GDpathObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDpathObjects1Objects = Hashtable.newFrom({"path": gdjs.gameCode.GDpathObjects1});
gdjs.gameCode.eventsList10 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "game");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("blueGhost"), gdjs.gameCode.GDblueGhostObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects1);
gdjs.copyArray(runtimeScene.getObjects("score_text"), gdjs.gameCode.GDscore_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("yellowGhost"), gdjs.gameCode.GDyellowGhostObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].addForce(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), 0);
}
}
{for(var i = 0, len = gdjs.gameCode.GDredGhostObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDredGhostObjects1[i].addForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9).getChild("xForce")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9).getChild("yForce")), 0);
}
}
{for(var i = 0, len = gdjs.gameCode.GDblueGhostObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDblueGhostObjects1[i].addForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild("xForce")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild("yForce")), 0);
}
}
{for(var i = 0, len = gdjs.gameCode.GDyellowGhostObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDyellowGhostObjects1[i].addForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getChild("xForce")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getChild("yForce")), 0);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.gameCode.mapOfEmptyGDdotObjects));
}
{for(var i = 0, len = gdjs.gameCode.GDscore_9595textObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDscore_9595textObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()));
}
}
}

}


{


gdjs.gameCode.userFunc0x912918(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("good_spots"), gdjs.gameCode.GDgood_9595spotsObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].setPosition((( gdjs.gameCode.GDgood_9595spotsObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects1[0].getCenterXInScene()),(( gdjs.gameCode.GDgood_9595spotsObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects1[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("good_spots"), gdjs.gameCode.GDgood_9595spotsObjects1);
gdjs.gameCode.GDplayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects, (( gdjs.gameCode.GDgood_9595spotsObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDgood_9595spotsObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDgood_9595spotsObjects1[0].getCenterYInScene()), "player level");
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Resizable").setSize(30, 30);
}
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "end");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pink");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "red");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "blue");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "yellow");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sync");
}

{ //Subevents
gdjs.gameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("left");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("right");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("up");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("down");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects1[i].isCollidingWithPoint((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getPointX("")) - ((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getWidth()) / 2) - 2, (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpathObjects1[k] = gdjs.gameCode.GDpathObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) == "left";
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDplayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(-(100) * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("left");
}
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects1[i].isCollidingWithPoint((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getPointX("")) + ((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getWidth()) / 2) + 2, (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpathObjects1[k] = gdjs.gameCode.GDpathObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) == "right";
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDplayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(100 * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("right");
}
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects1[i].isCollidingWithPoint((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getPointX("")), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getPointY("")) - ((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getHeight()) / 2) - 2) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpathObjects1[k] = gdjs.gameCode.GDpathObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) == "up";
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDplayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(-(100) * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber());
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("up");
}
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects1[i].isCollidingWithPoint((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getPointX("")), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getPointY("")) + ((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getHeight()) / 2) + 2) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDpathObjects1[k] = gdjs.gameCode.GDpathObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) == "down";
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDplayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(100 * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber());
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("down");
}
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects1[i].getX() < 301 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDplayerObjects1[k] = gdjs.gameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].setX(969);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDredGhostObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDredGhostObjects1[i].getX() < 301 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDredGhostObjects1[k] = gdjs.gameCode.GDredGhostObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDredGhostObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDredGhostObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDredGhostObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDredGhostObjects1[i].setX(969);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("blueGhost"), gdjs.gameCode.GDblueGhostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDblueGhostObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDblueGhostObjects1[i].getX() < 301 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDblueGhostObjects1[k] = gdjs.gameCode.GDblueGhostObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDblueGhostObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDblueGhostObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDblueGhostObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDblueGhostObjects1[i].setX(969);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yellowGhost"), gdjs.gameCode.GDyellowGhostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDyellowGhostObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDyellowGhostObjects1[i].getX() < 301 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDyellowGhostObjects1[k] = gdjs.gameCode.GDyellowGhostObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDyellowGhostObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDyellowGhostObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDyellowGhostObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDyellowGhostObjects1[i].setX(969);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects1[i].getX() > 969 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDplayerObjects1[k] = gdjs.gameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].setX(301);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDredGhostObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDredGhostObjects1[i].getX() > 969 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDredGhostObjects1[k] = gdjs.gameCode.GDredGhostObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDredGhostObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDredGhostObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDredGhostObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDredGhostObjects1[i].setX(301);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("blueGhost"), gdjs.gameCode.GDblueGhostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDblueGhostObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDblueGhostObjects1[i].getX() > 969 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDblueGhostObjects1[k] = gdjs.gameCode.GDblueGhostObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDblueGhostObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDblueGhostObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDblueGhostObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDblueGhostObjects1[i].setX(301);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yellowGhost"), gdjs.gameCode.GDyellowGhostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDyellowGhostObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDyellowGhostObjects1[i].getX() > 969 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDyellowGhostObjects1[k] = gdjs.gameCode.GDyellowGhostObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDyellowGhostObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDyellowGhostObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDyellowGhostObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDyellowGhostObjects1[i].setX(301);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.gameCode.GDdotObjects1.length = 0;

gdjs.gameCode.GDplayerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.gameCode.GDdotObjects1_1final.length = 0;
gdjs.gameCode.GDplayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.gameCode.GDdotObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 100 * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdotObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDdotObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointX("")), (( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointY("")) + 5) ) {
        isConditionTrue_2 = true;
        gdjs.gameCode.GDdotObjects2[k] = gdjs.gameCode.GDdotObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDdotObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDdotObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDdotObjects1_1final.indexOf(gdjs.gameCode.GDdotObjects2[j]) === -1 )
            gdjs.gameCode.GDdotObjects1_1final.push(gdjs.gameCode.GDdotObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDplayerObjects1_1final.indexOf(gdjs.gameCode.GDplayerObjects2[j]) === -1 )
            gdjs.gameCode.GDplayerObjects1_1final.push(gdjs.gameCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.gameCode.GDdotObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == -(100) * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdotObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDdotObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointX("")), (( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointY("")) - 5) ) {
        isConditionTrue_2 = true;
        gdjs.gameCode.GDdotObjects2[k] = gdjs.gameCode.GDdotObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDdotObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDdotObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDdotObjects1_1final.indexOf(gdjs.gameCode.GDdotObjects2[j]) === -1 )
            gdjs.gameCode.GDdotObjects1_1final.push(gdjs.gameCode.GDdotObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDplayerObjects1_1final.indexOf(gdjs.gameCode.GDplayerObjects2[j]) === -1 )
            gdjs.gameCode.GDplayerObjects1_1final.push(gdjs.gameCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.gameCode.GDdotObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 100 * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdotObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDdotObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointX("")) + 5, (( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointY(""))) ) {
        isConditionTrue_2 = true;
        gdjs.gameCode.GDdotObjects2[k] = gdjs.gameCode.GDdotObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDdotObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDdotObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDdotObjects1_1final.indexOf(gdjs.gameCode.GDdotObjects2[j]) === -1 )
            gdjs.gameCode.GDdotObjects1_1final.push(gdjs.gameCode.GDdotObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDplayerObjects1_1final.indexOf(gdjs.gameCode.GDplayerObjects2[j]) === -1 )
            gdjs.gameCode.GDplayerObjects1_1final.push(gdjs.gameCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.gameCode.GDdotObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == -(100) * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdotObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDdotObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointX("")) - 5, (( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointY(""))) ) {
        isConditionTrue_2 = true;
        gdjs.gameCode.GDdotObjects2[k] = gdjs.gameCode.GDdotObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDdotObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDdotObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDdotObjects1_1final.indexOf(gdjs.gameCode.GDdotObjects2[j]) === -1 )
            gdjs.gameCode.GDdotObjects1_1final.push(gdjs.gameCode.GDdotObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDplayerObjects1_1final.indexOf(gdjs.gameCode.GDplayerObjects2[j]) === -1 )
            gdjs.gameCode.GDplayerObjects1_1final.push(gdjs.gameCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.gameCode.GDdotObjects1_1final, gdjs.gameCode.GDdotObjects1);
gdjs.copyArray(gdjs.gameCode.GDplayerObjects1_1final, gdjs.gameCode.GDplayerObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDdotObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDdotObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdotObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}
}

}


{

gdjs.gameCode.GDpathObjects1.length = 0;

gdjs.gameCode.GDplayerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.gameCode.GDpathObjects1_1final.length = 0;
gdjs.gameCode.GDplayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 100 * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointX("")), (( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointY("")) + 5) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDplayerObjects1_1final.indexOf(gdjs.gameCode.GDplayerObjects2[j]) === -1 )
            gdjs.gameCode.GDplayerObjects1_1final.push(gdjs.gameCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == -(100) * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointX("")), (( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointY("")) - 5) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDplayerObjects1_1final.indexOf(gdjs.gameCode.GDplayerObjects2[j]) === -1 )
            gdjs.gameCode.GDplayerObjects1_1final.push(gdjs.gameCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 100 * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointX("")) + 5, (( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointY(""))) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDplayerObjects1_1final.indexOf(gdjs.gameCode.GDplayerObjects2[j]) === -1 )
            gdjs.gameCode.GDplayerObjects1_1final.push(gdjs.gameCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == -(100) * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointX("")) - 5, (( gdjs.gameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects2[0].getPointY(""))) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDplayerObjects1_1final.indexOf(gdjs.gameCode.GDplayerObjects2[j]) === -1 )
            gdjs.gameCode.GDplayerObjects1_1final.push(gdjs.gameCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.gameCode.GDpathObjects1_1final, gdjs.gameCode.GDpathObjects1);
gdjs.copyArray(gdjs.gameCode.GDplayerObjects1_1final, gdjs.gameCode.GDplayerObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDplayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Animation").pauseAnimation();
}
}

{ //Subevents
gdjs.gameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.gameCode.GDpathObjects1.length = 0;

gdjs.gameCode.GDredGhostObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.gameCode.GDpathObjects1_1final.length = 0;
gdjs.gameCode.GDredGhostObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9).getChild("yForce")) == 100 * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDredGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects2[0].getPointX("")), (( gdjs.gameCode.GDredGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects2[0].getPointY("")) + 5) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDredGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDredGhostObjects1_1final.indexOf(gdjs.gameCode.GDredGhostObjects2[j]) === -1 )
            gdjs.gameCode.GDredGhostObjects1_1final.push(gdjs.gameCode.GDredGhostObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9).getChild("yForce")) == -(100) * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDredGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects2[0].getPointX("")), (( gdjs.gameCode.GDredGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects2[0].getPointY("")) - 5) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDredGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDredGhostObjects1_1final.indexOf(gdjs.gameCode.GDredGhostObjects2[j]) === -1 )
            gdjs.gameCode.GDredGhostObjects1_1final.push(gdjs.gameCode.GDredGhostObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9).getChild("xForce")) == 100 * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDredGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects2[0].getPointX("")) + 5, (( gdjs.gameCode.GDredGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects2[0].getPointY(""))) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDredGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDredGhostObjects1_1final.indexOf(gdjs.gameCode.GDredGhostObjects2[j]) === -1 )
            gdjs.gameCode.GDredGhostObjects1_1final.push(gdjs.gameCode.GDredGhostObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9).getChild("xForce")) == -(100) * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDredGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects2[0].getPointX("")) - 5, (( gdjs.gameCode.GDredGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects2[0].getPointY(""))) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDredGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDredGhostObjects1_1final.indexOf(gdjs.gameCode.GDredGhostObjects2[j]) === -1 )
            gdjs.gameCode.GDredGhostObjects1_1final.push(gdjs.gameCode.GDredGhostObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.gameCode.GDpathObjects1_1final, gdjs.gameCode.GDpathObjects1);
gdjs.copyArray(gdjs.gameCode.GDredGhostObjects1_1final, gdjs.gameCode.GDredGhostObjects1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("xForce").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("yForce").setNumber(0);
}
}

}


{

gdjs.gameCode.GDblueGhostObjects1.length = 0;

gdjs.gameCode.GDpathObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.gameCode.GDblueGhostObjects1_1final.length = 0;
gdjs.gameCode.GDpathObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("blueGhost"), gdjs.gameCode.GDblueGhostObjects2);
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild("yForce")) == 100 * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDblueGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDblueGhostObjects2[0].getPointX("")), (( gdjs.gameCode.GDblueGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDblueGhostObjects2[0].getPointY("")) + 5) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDblueGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDblueGhostObjects1_1final.indexOf(gdjs.gameCode.GDblueGhostObjects2[j]) === -1 )
            gdjs.gameCode.GDblueGhostObjects1_1final.push(gdjs.gameCode.GDblueGhostObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("blueGhost"), gdjs.gameCode.GDblueGhostObjects2);
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild("yForce")) == -(100) * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDblueGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDblueGhostObjects2[0].getPointX("")), (( gdjs.gameCode.GDblueGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDblueGhostObjects2[0].getPointY("")) - 5) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDblueGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDblueGhostObjects1_1final.indexOf(gdjs.gameCode.GDblueGhostObjects2[j]) === -1 )
            gdjs.gameCode.GDblueGhostObjects1_1final.push(gdjs.gameCode.GDblueGhostObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("blueGhost"), gdjs.gameCode.GDblueGhostObjects2);
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild("xForce")) == 100 * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDblueGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDblueGhostObjects2[0].getPointX("")) + 5, (( gdjs.gameCode.GDblueGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDblueGhostObjects2[0].getPointY(""))) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDblueGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDblueGhostObjects1_1final.indexOf(gdjs.gameCode.GDblueGhostObjects2[j]) === -1 )
            gdjs.gameCode.GDblueGhostObjects1_1final.push(gdjs.gameCode.GDblueGhostObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("blueGhost"), gdjs.gameCode.GDblueGhostObjects2);
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getChild("xForce")) == -(100) * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDblueGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDblueGhostObjects2[0].getPointX("")) - 5, (( gdjs.gameCode.GDblueGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDblueGhostObjects2[0].getPointY(""))) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDblueGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDblueGhostObjects1_1final.indexOf(gdjs.gameCode.GDblueGhostObjects2[j]) === -1 )
            gdjs.gameCode.GDblueGhostObjects1_1final.push(gdjs.gameCode.GDblueGhostObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.gameCode.GDblueGhostObjects1_1final, gdjs.gameCode.GDblueGhostObjects1);
gdjs.copyArray(gdjs.gameCode.GDpathObjects1_1final, gdjs.gameCode.GDpathObjects1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).getChild("xForce").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(10).getChild("yForce").setNumber(0);
}
}

}


{

gdjs.gameCode.GDpathObjects1.length = 0;

gdjs.gameCode.GDyellowGhostObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.gameCode.GDpathObjects1_1final.length = 0;
gdjs.gameCode.GDyellowGhostObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
gdjs.copyArray(runtimeScene.getObjects("yellowGhost"), gdjs.gameCode.GDyellowGhostObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getChild("yForce")) == 100 * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDyellowGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDyellowGhostObjects2[0].getPointX("")), (( gdjs.gameCode.GDyellowGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDyellowGhostObjects2[0].getPointY("")) + 5) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDyellowGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDyellowGhostObjects1_1final.indexOf(gdjs.gameCode.GDyellowGhostObjects2[j]) === -1 )
            gdjs.gameCode.GDyellowGhostObjects1_1final.push(gdjs.gameCode.GDyellowGhostObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
gdjs.copyArray(runtimeScene.getObjects("yellowGhost"), gdjs.gameCode.GDyellowGhostObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getChild("yForce")) == -(100) * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDyellowGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDyellowGhostObjects2[0].getPointX("")), (( gdjs.gameCode.GDyellowGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDyellowGhostObjects2[0].getPointY("")) - 5) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDyellowGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDyellowGhostObjects1_1final.indexOf(gdjs.gameCode.GDyellowGhostObjects2[j]) === -1 )
            gdjs.gameCode.GDyellowGhostObjects1_1final.push(gdjs.gameCode.GDyellowGhostObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
gdjs.copyArray(runtimeScene.getObjects("yellowGhost"), gdjs.gameCode.GDyellowGhostObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getChild("xForce")) == 100 * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDyellowGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDyellowGhostObjects2[0].getPointX("")) + 5, (( gdjs.gameCode.GDyellowGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDyellowGhostObjects2[0].getPointY(""))) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDyellowGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDyellowGhostObjects1_1final.indexOf(gdjs.gameCode.GDyellowGhostObjects2[j]) === -1 )
            gdjs.gameCode.GDyellowGhostObjects1_1final.push(gdjs.gameCode.GDyellowGhostObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects2);
gdjs.copyArray(runtimeScene.getObjects("yellowGhost"), gdjs.gameCode.GDyellowGhostObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11).getChild("xForce")) == -(100) * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDpathObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpathObjects2[i].isCollidingWithPoint((( gdjs.gameCode.GDyellowGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDyellowGhostObjects2[0].getPointX("")) - 5, (( gdjs.gameCode.GDyellowGhostObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDyellowGhostObjects2[0].getPointY(""))) ) {
        isConditionTrue_3 = true;
        gdjs.gameCode.GDpathObjects2[k] = gdjs.gameCode.GDpathObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpathObjects2.length = k;
isConditionTrue_2 = !isConditionTrue_3;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDpathObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDpathObjects1_1final.indexOf(gdjs.gameCode.GDpathObjects2[j]) === -1 )
            gdjs.gameCode.GDpathObjects1_1final.push(gdjs.gameCode.GDpathObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.gameCode.GDyellowGhostObjects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDyellowGhostObjects1_1final.indexOf(gdjs.gameCode.GDyellowGhostObjects2[j]) === -1 )
            gdjs.gameCode.GDyellowGhostObjects1_1final.push(gdjs.gameCode.GDyellowGhostObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.gameCode.GDpathObjects1_1final, gdjs.gameCode.GDpathObjects1);
gdjs.copyArray(gdjs.gameCode.GDyellowGhostObjects1_1final, gdjs.gameCode.GDyellowGhostObjects1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(11).getChild("xForce").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(11).getChild("yForce").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "end", false);
}
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.gameCode.GDdotObjects1);
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdotObjects1Objects);
}
{for(var i = 0, len = gdjs.gameCode.GDdotObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdotObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdotObjects1Objects, 0, 0, "");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sync") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sync") <= 1.5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects1);
gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects1);
{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDpathObjects1Objects);
}
{for(var i = 0, len = gdjs.gameCode.GDredGhostObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDredGhostObjects1[i].setPosition((( gdjs.gameCode.GDpathObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects1[0].getCenterXInScene()),(( gdjs.gameCode.GDpathObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects1[0].getCenterYInScene()));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getGame().getVariables().getFromIndex(20).getChild(gdjs.randomInRange(0, 3)).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sync") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sync") <= 3.5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("blueGhost"), gdjs.gameCode.GDblueGhostObjects1);
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects1);
{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDpathObjects1Objects);
}
{for(var i = 0, len = gdjs.gameCode.GDblueGhostObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDblueGhostObjects1[i].setPosition((( gdjs.gameCode.GDpathObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects1[0].getCenterXInScene()),(( gdjs.gameCode.GDpathObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects1[0].getCenterYInScene()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sync") >= 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sync") <= 5.5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.gameCode.GDpathObjects1);
gdjs.copyArray(runtimeScene.getObjects("yellowGhost"), gdjs.gameCode.GDyellowGhostObjects1);
{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDpathObjects1Objects);
}
{for(var i = 0, len = gdjs.gameCode.GDyellowGhostObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDyellowGhostObjects1[i].setPosition((( gdjs.gameCode.GDpathObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects1[0].getCenterXInScene()),(( gdjs.gameCode.GDpathObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDpathObjects1[0].getCenterYInScene()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("good_spots"), gdjs.gameCode.GDgood_9595spotsObjects1);
gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDgood_9595spotsObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDgood_9595spotsObjects1[i].isCollidingWithPoint((( gdjs.gameCode.GDredGhostObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects1[0].getPointX("")) - ((( gdjs.gameCode.GDredGhostObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects1[0].getWidth()) / 2) - 5, (( gdjs.gameCode.GDredGhostObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects1[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDgood_9595spotsObjects1[k] = gdjs.gameCode.GDgood_9595spotsObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDgood_9595spotsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsString() == "left");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("xForce").setNumber(-(100) * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("yForce").setNumber(0);
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("good_spots"), gdjs.gameCode.GDgood_9595spotsObjects1);
gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDgood_9595spotsObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDgood_9595spotsObjects1[i].isCollidingWithPoint((( gdjs.gameCode.GDredGhostObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects1[0].getPointX("")) + ((( gdjs.gameCode.GDredGhostObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects1[0].getWidth()) / 2) + 5, (( gdjs.gameCode.GDredGhostObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects1[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDgood_9595spotsObjects1[k] = gdjs.gameCode.GDgood_9595spotsObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDgood_9595spotsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsString() == "right");
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("xForce").setNumber(100 * runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("yForce").setNumber(0);
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("good_spots"), gdjs.gameCode.GDgood_9595spotsObjects1);
gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDgood_9595spotsObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDgood_9595spotsObjects1[i].isCollidingWithPoint((( gdjs.gameCode.GDredGhostObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects1[0].getPointX("")), (( gdjs.gameCode.GDredGhostObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects1[0].getPointY("")) - ((( gdjs.gameCode.GDredGhostObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects1[0].getHeight()) / 2) - 5) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDgood_9595spotsObjects1[k] = gdjs.gameCode.GDgood_9595spotsObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDgood_9595spotsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16)) == "up";
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("xForce").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("yForce").setNumber(-(100) * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber());
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("good_spots"), gdjs.gameCode.GDgood_9595spotsObjects1);
gdjs.copyArray(runtimeScene.getObjects("redGhost"), gdjs.gameCode.GDredGhostObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDgood_9595spotsObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDgood_9595spotsObjects1[i].isCollidingWithPoint((( gdjs.gameCode.GDredGhostObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects1[0].getPointX("")), (( gdjs.gameCode.GDredGhostObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects1[0].getPointY("")) + ((( gdjs.gameCode.GDredGhostObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDredGhostObjects1[0].getHeight()) / 2) + 5) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDgood_9595spotsObjects1[k] = gdjs.gameCode.GDgood_9595spotsObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDgood_9595spotsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16)) == "down";
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("xForce").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("yForce").setNumber(100 * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber());
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "red"), 3) > 1);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(runtimeScene.getGame().getVariables().getFromIndex(20).getChild(gdjs.randomInRange(0, 3)).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
{
}

}

}

};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDpathObjects1.length = 0;
gdjs.gameCode.GDpathObjects2.length = 0;
gdjs.gameCode.GDpathObjects3.length = 0;
gdjs.gameCode.GDpathObjects4.length = 0;
gdjs.gameCode.GDpathObjects5.length = 0;
gdjs.gameCode.GDpathObjects6.length = 0;
gdjs.gameCode.GDplayerObjects1.length = 0;
gdjs.gameCode.GDplayerObjects2.length = 0;
gdjs.gameCode.GDplayerObjects3.length = 0;
gdjs.gameCode.GDplayerObjects4.length = 0;
gdjs.gameCode.GDplayerObjects5.length = 0;
gdjs.gameCode.GDplayerObjects6.length = 0;
gdjs.gameCode.GDbgObjects1.length = 0;
gdjs.gameCode.GDbgObjects2.length = 0;
gdjs.gameCode.GDbgObjects3.length = 0;
gdjs.gameCode.GDbgObjects4.length = 0;
gdjs.gameCode.GDbgObjects5.length = 0;
gdjs.gameCode.GDbgObjects6.length = 0;
gdjs.gameCode.GDgood_9595spotsObjects1.length = 0;
gdjs.gameCode.GDgood_9595spotsObjects2.length = 0;
gdjs.gameCode.GDgood_9595spotsObjects3.length = 0;
gdjs.gameCode.GDgood_9595spotsObjects4.length = 0;
gdjs.gameCode.GDgood_9595spotsObjects5.length = 0;
gdjs.gameCode.GDgood_9595spotsObjects6.length = 0;
gdjs.gameCode.GDdebugObjects1.length = 0;
gdjs.gameCode.GDdebugObjects2.length = 0;
gdjs.gameCode.GDdebugObjects3.length = 0;
gdjs.gameCode.GDdebugObjects4.length = 0;
gdjs.gameCode.GDdebugObjects5.length = 0;
gdjs.gameCode.GDdebugObjects6.length = 0;
gdjs.gameCode.GDdotObjects1.length = 0;
gdjs.gameCode.GDdotObjects2.length = 0;
gdjs.gameCode.GDdotObjects3.length = 0;
gdjs.gameCode.GDdotObjects4.length = 0;
gdjs.gameCode.GDdotObjects5.length = 0;
gdjs.gameCode.GDdotObjects6.length = 0;
gdjs.gameCode.GDfakeObjects1.length = 0;
gdjs.gameCode.GDfakeObjects2.length = 0;
gdjs.gameCode.GDfakeObjects3.length = 0;
gdjs.gameCode.GDfakeObjects4.length = 0;
gdjs.gameCode.GDfakeObjects5.length = 0;
gdjs.gameCode.GDfakeObjects6.length = 0;
gdjs.gameCode.GDghosts_9595onlyObjects1.length = 0;
gdjs.gameCode.GDghosts_9595onlyObjects2.length = 0;
gdjs.gameCode.GDghosts_9595onlyObjects3.length = 0;
gdjs.gameCode.GDghosts_9595onlyObjects4.length = 0;
gdjs.gameCode.GDghosts_9595onlyObjects5.length = 0;
gdjs.gameCode.GDghosts_9595onlyObjects6.length = 0;
gdjs.gameCode.GDghostPathObjects1.length = 0;
gdjs.gameCode.GDghostPathObjects2.length = 0;
gdjs.gameCode.GDghostPathObjects3.length = 0;
gdjs.gameCode.GDghostPathObjects4.length = 0;
gdjs.gameCode.GDghostPathObjects5.length = 0;
gdjs.gameCode.GDghostPathObjects6.length = 0;
gdjs.gameCode.GDghostsObjects1.length = 0;
gdjs.gameCode.GDghostsObjects2.length = 0;
gdjs.gameCode.GDghostsObjects3.length = 0;
gdjs.gameCode.GDghostsObjects4.length = 0;
gdjs.gameCode.GDghostsObjects5.length = 0;
gdjs.gameCode.GDghostsObjects6.length = 0;
gdjs.gameCode.GDscore_9595textObjects1.length = 0;
gdjs.gameCode.GDscore_9595textObjects2.length = 0;
gdjs.gameCode.GDscore_9595textObjects3.length = 0;
gdjs.gameCode.GDscore_9595textObjects4.length = 0;
gdjs.gameCode.GDscore_9595textObjects5.length = 0;
gdjs.gameCode.GDscore_9595textObjects6.length = 0;
gdjs.gameCode.GDuselessObjects1.length = 0;
gdjs.gameCode.GDuselessObjects2.length = 0;
gdjs.gameCode.GDuselessObjects3.length = 0;
gdjs.gameCode.GDuselessObjects4.length = 0;
gdjs.gameCode.GDuselessObjects5.length = 0;
gdjs.gameCode.GDuselessObjects6.length = 0;
gdjs.gameCode.GDborderObjects1.length = 0;
gdjs.gameCode.GDborderObjects2.length = 0;
gdjs.gameCode.GDborderObjects3.length = 0;
gdjs.gameCode.GDborderObjects4.length = 0;
gdjs.gameCode.GDborderObjects5.length = 0;
gdjs.gameCode.GDborderObjects6.length = 0;
gdjs.gameCode.GDredGhostObjects1.length = 0;
gdjs.gameCode.GDredGhostObjects2.length = 0;
gdjs.gameCode.GDredGhostObjects3.length = 0;
gdjs.gameCode.GDredGhostObjects4.length = 0;
gdjs.gameCode.GDredGhostObjects5.length = 0;
gdjs.gameCode.GDredGhostObjects6.length = 0;
gdjs.gameCode.GDblueGhostObjects1.length = 0;
gdjs.gameCode.GDblueGhostObjects2.length = 0;
gdjs.gameCode.GDblueGhostObjects3.length = 0;
gdjs.gameCode.GDblueGhostObjects4.length = 0;
gdjs.gameCode.GDblueGhostObjects5.length = 0;
gdjs.gameCode.GDblueGhostObjects6.length = 0;
gdjs.gameCode.GDyellowGhostObjects1.length = 0;
gdjs.gameCode.GDyellowGhostObjects2.length = 0;
gdjs.gameCode.GDyellowGhostObjects3.length = 0;
gdjs.gameCode.GDyellowGhostObjects4.length = 0;
gdjs.gameCode.GDyellowGhostObjects5.length = 0;
gdjs.gameCode.GDyellowGhostObjects6.length = 0;

gdjs.gameCode.eventsList10(runtimeScene);
gdjs.gameCode.GDpathObjects1.length = 0;
gdjs.gameCode.GDpathObjects2.length = 0;
gdjs.gameCode.GDpathObjects3.length = 0;
gdjs.gameCode.GDpathObjects4.length = 0;
gdjs.gameCode.GDpathObjects5.length = 0;
gdjs.gameCode.GDpathObjects6.length = 0;
gdjs.gameCode.GDplayerObjects1.length = 0;
gdjs.gameCode.GDplayerObjects2.length = 0;
gdjs.gameCode.GDplayerObjects3.length = 0;
gdjs.gameCode.GDplayerObjects4.length = 0;
gdjs.gameCode.GDplayerObjects5.length = 0;
gdjs.gameCode.GDplayerObjects6.length = 0;
gdjs.gameCode.GDbgObjects1.length = 0;
gdjs.gameCode.GDbgObjects2.length = 0;
gdjs.gameCode.GDbgObjects3.length = 0;
gdjs.gameCode.GDbgObjects4.length = 0;
gdjs.gameCode.GDbgObjects5.length = 0;
gdjs.gameCode.GDbgObjects6.length = 0;
gdjs.gameCode.GDgood_9595spotsObjects1.length = 0;
gdjs.gameCode.GDgood_9595spotsObjects2.length = 0;
gdjs.gameCode.GDgood_9595spotsObjects3.length = 0;
gdjs.gameCode.GDgood_9595spotsObjects4.length = 0;
gdjs.gameCode.GDgood_9595spotsObjects5.length = 0;
gdjs.gameCode.GDgood_9595spotsObjects6.length = 0;
gdjs.gameCode.GDdebugObjects1.length = 0;
gdjs.gameCode.GDdebugObjects2.length = 0;
gdjs.gameCode.GDdebugObjects3.length = 0;
gdjs.gameCode.GDdebugObjects4.length = 0;
gdjs.gameCode.GDdebugObjects5.length = 0;
gdjs.gameCode.GDdebugObjects6.length = 0;
gdjs.gameCode.GDdotObjects1.length = 0;
gdjs.gameCode.GDdotObjects2.length = 0;
gdjs.gameCode.GDdotObjects3.length = 0;
gdjs.gameCode.GDdotObjects4.length = 0;
gdjs.gameCode.GDdotObjects5.length = 0;
gdjs.gameCode.GDdotObjects6.length = 0;
gdjs.gameCode.GDfakeObjects1.length = 0;
gdjs.gameCode.GDfakeObjects2.length = 0;
gdjs.gameCode.GDfakeObjects3.length = 0;
gdjs.gameCode.GDfakeObjects4.length = 0;
gdjs.gameCode.GDfakeObjects5.length = 0;
gdjs.gameCode.GDfakeObjects6.length = 0;
gdjs.gameCode.GDghosts_9595onlyObjects1.length = 0;
gdjs.gameCode.GDghosts_9595onlyObjects2.length = 0;
gdjs.gameCode.GDghosts_9595onlyObjects3.length = 0;
gdjs.gameCode.GDghosts_9595onlyObjects4.length = 0;
gdjs.gameCode.GDghosts_9595onlyObjects5.length = 0;
gdjs.gameCode.GDghosts_9595onlyObjects6.length = 0;
gdjs.gameCode.GDghostPathObjects1.length = 0;
gdjs.gameCode.GDghostPathObjects2.length = 0;
gdjs.gameCode.GDghostPathObjects3.length = 0;
gdjs.gameCode.GDghostPathObjects4.length = 0;
gdjs.gameCode.GDghostPathObjects5.length = 0;
gdjs.gameCode.GDghostPathObjects6.length = 0;
gdjs.gameCode.GDghostsObjects1.length = 0;
gdjs.gameCode.GDghostsObjects2.length = 0;
gdjs.gameCode.GDghostsObjects3.length = 0;
gdjs.gameCode.GDghostsObjects4.length = 0;
gdjs.gameCode.GDghostsObjects5.length = 0;
gdjs.gameCode.GDghostsObjects6.length = 0;
gdjs.gameCode.GDscore_9595textObjects1.length = 0;
gdjs.gameCode.GDscore_9595textObjects2.length = 0;
gdjs.gameCode.GDscore_9595textObjects3.length = 0;
gdjs.gameCode.GDscore_9595textObjects4.length = 0;
gdjs.gameCode.GDscore_9595textObjects5.length = 0;
gdjs.gameCode.GDscore_9595textObjects6.length = 0;
gdjs.gameCode.GDuselessObjects1.length = 0;
gdjs.gameCode.GDuselessObjects2.length = 0;
gdjs.gameCode.GDuselessObjects3.length = 0;
gdjs.gameCode.GDuselessObjects4.length = 0;
gdjs.gameCode.GDuselessObjects5.length = 0;
gdjs.gameCode.GDuselessObjects6.length = 0;
gdjs.gameCode.GDborderObjects1.length = 0;
gdjs.gameCode.GDborderObjects2.length = 0;
gdjs.gameCode.GDborderObjects3.length = 0;
gdjs.gameCode.GDborderObjects4.length = 0;
gdjs.gameCode.GDborderObjects5.length = 0;
gdjs.gameCode.GDborderObjects6.length = 0;
gdjs.gameCode.GDredGhostObjects1.length = 0;
gdjs.gameCode.GDredGhostObjects2.length = 0;
gdjs.gameCode.GDredGhostObjects3.length = 0;
gdjs.gameCode.GDredGhostObjects4.length = 0;
gdjs.gameCode.GDredGhostObjects5.length = 0;
gdjs.gameCode.GDredGhostObjects6.length = 0;
gdjs.gameCode.GDblueGhostObjects1.length = 0;
gdjs.gameCode.GDblueGhostObjects2.length = 0;
gdjs.gameCode.GDblueGhostObjects3.length = 0;
gdjs.gameCode.GDblueGhostObjects4.length = 0;
gdjs.gameCode.GDblueGhostObjects5.length = 0;
gdjs.gameCode.GDblueGhostObjects6.length = 0;
gdjs.gameCode.GDyellowGhostObjects1.length = 0;
gdjs.gameCode.GDyellowGhostObjects2.length = 0;
gdjs.gameCode.GDyellowGhostObjects3.length = 0;
gdjs.gameCode.GDyellowGhostObjects4.length = 0;
gdjs.gameCode.GDyellowGhostObjects5.length = 0;
gdjs.gameCode.GDyellowGhostObjects6.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;
