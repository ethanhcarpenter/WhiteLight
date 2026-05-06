gdjs.endCode = {};
gdjs.endCode.localVariables = [];
gdjs.endCode.idToCallbackMap = new Map();
gdjs.endCode.GDpathObjects1= [];
gdjs.endCode.GDpathObjects2= [];
gdjs.endCode.GDpathObjects3= [];
gdjs.endCode.GDplayerObjects1= [];
gdjs.endCode.GDplayerObjects2= [];
gdjs.endCode.GDplayerObjects3= [];
gdjs.endCode.GDbgObjects1= [];
gdjs.endCode.GDbgObjects2= [];
gdjs.endCode.GDbgObjects3= [];
gdjs.endCode.GDgood_9595spotsObjects1= [];
gdjs.endCode.GDgood_9595spotsObjects2= [];
gdjs.endCode.GDgood_9595spotsObjects3= [];
gdjs.endCode.GDborderObjects1= [];
gdjs.endCode.GDborderObjects2= [];
gdjs.endCode.GDborderObjects3= [];
gdjs.endCode.GDdebugObjects1= [];
gdjs.endCode.GDdebugObjects2= [];
gdjs.endCode.GDdebugObjects3= [];
gdjs.endCode.GDdotObjects1= [];
gdjs.endCode.GDdotObjects2= [];
gdjs.endCode.GDdotObjects3= [];
gdjs.endCode.GDbannerObjects1= [];
gdjs.endCode.GDbannerObjects2= [];
gdjs.endCode.GDbannerObjects3= [];
gdjs.endCode.GDreturn_9595promtObjects1= [];
gdjs.endCode.GDreturn_9595promtObjects2= [];
gdjs.endCode.GDreturn_9595promtObjects3= [];
gdjs.endCode.GDscore_9595textObjects1= [];
gdjs.endCode.GDscore_9595textObjects2= [];
gdjs.endCode.GDscore_9595textObjects3= [];
gdjs.endCode.GDuselessObjects1= [];
gdjs.endCode.GDuselessObjects2= [];
gdjs.endCode.GDuselessObjects3= [];
gdjs.endCode.GDborderObjects1= [];
gdjs.endCode.GDborderObjects2= [];
gdjs.endCode.GDborderObjects3= [];
gdjs.endCode.GDredGhostObjects1= [];
gdjs.endCode.GDredGhostObjects2= [];
gdjs.endCode.GDredGhostObjects3= [];
gdjs.endCode.GDblueGhostObjects1= [];
gdjs.endCode.GDblueGhostObjects2= [];
gdjs.endCode.GDblueGhostObjects3= [];
gdjs.endCode.GDyellowGhostObjects1= [];
gdjs.endCode.GDyellowGhostObjects2= [];
gdjs.endCode.GDyellowGhostObjects3= [];


gdjs.endCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("banner"), gdjs.endCode.GDbannerObjects2);
gdjs.copyArray(runtimeScene.getObjects("return_promt"), gdjs.endCode.GDreturn_9595promtObjects2);
{for(var i = 0, len = gdjs.endCode.GDbannerObjects2.length ;i < len;++i) {
    gdjs.endCode.GDbannerObjects2[i].getBehavior("Text").setText("CONGRATULATIONS");
}
}
{for(var i = 0, len = gdjs.endCode.GDreturn_9595promtObjects2.length ;i < len;++i) {
    gdjs.endCode.GDreturn_9595promtObjects2[i].getBehavior("Text").setText(gdjs.endCode.GDreturn_9595promtObjects2[i].getBehavior("Text").getText() + ("CONTINUE"));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("banner"), gdjs.endCode.GDbannerObjects1);
gdjs.copyArray(runtimeScene.getObjects("return_promt"), gdjs.endCode.GDreturn_9595promtObjects1);
{for(var i = 0, len = gdjs.endCode.GDbannerObjects1.length ;i < len;++i) {
    gdjs.endCode.GDbannerObjects1[i].getBehavior("Text").setText("UNLUCKY");
}
}
{for(var i = 0, len = gdjs.endCode.GDreturn_9595promtObjects1.length ;i < len;++i) {
    gdjs.endCode.GDreturn_9595promtObjects1[i].getBehavior("Text").setText(gdjs.endCode.GDreturn_9595promtObjects1[i].getBehavior("Text").getText() + ("TRY AGAIN"));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}
}

}


};gdjs.endCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("good_spots"), gdjs.endCode.GDgood_9595spotsObjects1);
gdjs.copyArray(runtimeScene.getObjects("score_text"), gdjs.endCode.GDscore_9595textObjects1);
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "game");
}
{for(var i = 0, len = gdjs.endCode.GDgood_9595spotsObjects1.length ;i < len;++i) {
    gdjs.endCode.GDgood_9595spotsObjects1[i].hide();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1.1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.endCode.GDscore_9595textObjects1.length ;i < len;++i) {
    gdjs.endCode.GDscore_9595textObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()));
}
}

{ //Subevents
gdjs.endCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}
}

}


};

gdjs.endCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.endCode.GDpathObjects1.length = 0;
gdjs.endCode.GDpathObjects2.length = 0;
gdjs.endCode.GDpathObjects3.length = 0;
gdjs.endCode.GDplayerObjects1.length = 0;
gdjs.endCode.GDplayerObjects2.length = 0;
gdjs.endCode.GDplayerObjects3.length = 0;
gdjs.endCode.GDbgObjects1.length = 0;
gdjs.endCode.GDbgObjects2.length = 0;
gdjs.endCode.GDbgObjects3.length = 0;
gdjs.endCode.GDgood_9595spotsObjects1.length = 0;
gdjs.endCode.GDgood_9595spotsObjects2.length = 0;
gdjs.endCode.GDgood_9595spotsObjects3.length = 0;
gdjs.endCode.GDborderObjects1.length = 0;
gdjs.endCode.GDborderObjects2.length = 0;
gdjs.endCode.GDborderObjects3.length = 0;
gdjs.endCode.GDdebugObjects1.length = 0;
gdjs.endCode.GDdebugObjects2.length = 0;
gdjs.endCode.GDdebugObjects3.length = 0;
gdjs.endCode.GDdotObjects1.length = 0;
gdjs.endCode.GDdotObjects2.length = 0;
gdjs.endCode.GDdotObjects3.length = 0;
gdjs.endCode.GDbannerObjects1.length = 0;
gdjs.endCode.GDbannerObjects2.length = 0;
gdjs.endCode.GDbannerObjects3.length = 0;
gdjs.endCode.GDreturn_9595promtObjects1.length = 0;
gdjs.endCode.GDreturn_9595promtObjects2.length = 0;
gdjs.endCode.GDreturn_9595promtObjects3.length = 0;
gdjs.endCode.GDscore_9595textObjects1.length = 0;
gdjs.endCode.GDscore_9595textObjects2.length = 0;
gdjs.endCode.GDscore_9595textObjects3.length = 0;
gdjs.endCode.GDuselessObjects1.length = 0;
gdjs.endCode.GDuselessObjects2.length = 0;
gdjs.endCode.GDuselessObjects3.length = 0;
gdjs.endCode.GDborderObjects1.length = 0;
gdjs.endCode.GDborderObjects2.length = 0;
gdjs.endCode.GDborderObjects3.length = 0;
gdjs.endCode.GDredGhostObjects1.length = 0;
gdjs.endCode.GDredGhostObjects2.length = 0;
gdjs.endCode.GDredGhostObjects3.length = 0;
gdjs.endCode.GDblueGhostObjects1.length = 0;
gdjs.endCode.GDblueGhostObjects2.length = 0;
gdjs.endCode.GDblueGhostObjects3.length = 0;
gdjs.endCode.GDyellowGhostObjects1.length = 0;
gdjs.endCode.GDyellowGhostObjects2.length = 0;
gdjs.endCode.GDyellowGhostObjects3.length = 0;

gdjs.endCode.eventsList1(runtimeScene);
gdjs.endCode.GDpathObjects1.length = 0;
gdjs.endCode.GDpathObjects2.length = 0;
gdjs.endCode.GDpathObjects3.length = 0;
gdjs.endCode.GDplayerObjects1.length = 0;
gdjs.endCode.GDplayerObjects2.length = 0;
gdjs.endCode.GDplayerObjects3.length = 0;
gdjs.endCode.GDbgObjects1.length = 0;
gdjs.endCode.GDbgObjects2.length = 0;
gdjs.endCode.GDbgObjects3.length = 0;
gdjs.endCode.GDgood_9595spotsObjects1.length = 0;
gdjs.endCode.GDgood_9595spotsObjects2.length = 0;
gdjs.endCode.GDgood_9595spotsObjects3.length = 0;
gdjs.endCode.GDborderObjects1.length = 0;
gdjs.endCode.GDborderObjects2.length = 0;
gdjs.endCode.GDborderObjects3.length = 0;
gdjs.endCode.GDdebugObjects1.length = 0;
gdjs.endCode.GDdebugObjects2.length = 0;
gdjs.endCode.GDdebugObjects3.length = 0;
gdjs.endCode.GDdotObjects1.length = 0;
gdjs.endCode.GDdotObjects2.length = 0;
gdjs.endCode.GDdotObjects3.length = 0;
gdjs.endCode.GDbannerObjects1.length = 0;
gdjs.endCode.GDbannerObjects2.length = 0;
gdjs.endCode.GDbannerObjects3.length = 0;
gdjs.endCode.GDreturn_9595promtObjects1.length = 0;
gdjs.endCode.GDreturn_9595promtObjects2.length = 0;
gdjs.endCode.GDreturn_9595promtObjects3.length = 0;
gdjs.endCode.GDscore_9595textObjects1.length = 0;
gdjs.endCode.GDscore_9595textObjects2.length = 0;
gdjs.endCode.GDscore_9595textObjects3.length = 0;
gdjs.endCode.GDuselessObjects1.length = 0;
gdjs.endCode.GDuselessObjects2.length = 0;
gdjs.endCode.GDuselessObjects3.length = 0;
gdjs.endCode.GDborderObjects1.length = 0;
gdjs.endCode.GDborderObjects2.length = 0;
gdjs.endCode.GDborderObjects3.length = 0;
gdjs.endCode.GDredGhostObjects1.length = 0;
gdjs.endCode.GDredGhostObjects2.length = 0;
gdjs.endCode.GDredGhostObjects3.length = 0;
gdjs.endCode.GDblueGhostObjects1.length = 0;
gdjs.endCode.GDblueGhostObjects2.length = 0;
gdjs.endCode.GDblueGhostObjects3.length = 0;
gdjs.endCode.GDyellowGhostObjects1.length = 0;
gdjs.endCode.GDyellowGhostObjects2.length = 0;
gdjs.endCode.GDyellowGhostObjects3.length = 0;


return;

}

gdjs['endCode'] = gdjs.endCode;
