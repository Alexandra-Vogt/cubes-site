// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cubes.render');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
cubes.render.render_player = (function cubes$render$render_player(x,y){
quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(255),(0));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,y,(20),(20));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4((2.5 + x),(2.5 + y),(15),(15));
});
cubes.render.render_enemy = (function cubes$render$render_enemy(x,y){
quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(0),(0));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,y,(20),(20));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4((2.5 + x),(2.5 + y),(15),(15));
});
cubes.render.render_point_cube = (function cubes$render$render_point_cube(x,y){
quil.core.fill.cljs$core$IFn$_invoke$arity$3((0),(0),(255));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,y,(20),(20));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4((2.5 + x),(2.5 + y),(15),(15));
});
cubes.render.render_entities = (function cubes$render$render_entities(state){
quil.core.text.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spawned_QMARK_.cljs$core$IFn$_invoke$arity$1(state)),(100),(100));

var tr__6447__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__6447__auto__);

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tr__6447__auto__){
return (function (point_cube){
return cubes.render.render_point_cube(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(point_cube),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(point_cube));
});})(tr__6447__auto__))
,cljs.core.cst$kw$point_DASH_cubes.cljs$core$IFn$_invoke$arity$1(state)));

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tr__6447__auto__){
return (function (enemy){
return cubes.render.render_enemy(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(enemy),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(enemy));
});})(tr__6447__auto__))
,cljs.core.cst$kw$enemies.cljs$core$IFn$_invoke$arity$1(state)));

return cubes.render.render_player(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state)));
}finally {quil.core.pop_matrix();
}});
cubes.render.render_title = (function cubes$render$render_title(state){
quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(255),(0));

return quil.core.text.cljs$core$IFn$_invoke$arity$3(["CONTROLS:\n","ARROW KEYS CONTROL ACCELERATION OF THE YELLOW CUBE\n","\n","RULES:\n","HITTING RED SQUARES ENDS THE GAME\n","HITTING BLUE SQUARES INCREMENTS THE SCORE COUNTER\n","THE LONGER YOU PLAY THE MORE FREQUENTLY RED CUBES SPAWN\n","\n","GOOD LUCK!\n","PRESS ANY KEY TO CONTINUE...",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.mod(quil.core.seconds(),(2)) | (0)),(0)))?"\u2588":"")].join(''),(10),(20));
});
cubes.render.render_game = (function cubes$render$render_game(state){
quil.core.text_font.cljs$core$IFn$_invoke$arity$1("Courier New");

quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(255),(0));

return quil.core.text.cljs$core$IFn$_invoke$arity$3(["SCORE: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$score.cljs$core$IFn$_invoke$arity$1(state)),"\n","FRAME: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(state)),"\n","SPEED: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(state).toFixed((1))),"\n"].join(''),(10),(20));
});
cubes.render.render_score = (function cubes$render$render_score(state){
quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(255),(0));

return quil.core.text.cljs$core$IFn$_invoke$arity$3(["GAME OVER\n","FRAMES:    ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(state)),"\n","DISTANCE:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.cst$kw$distance.cljs$core$IFn$_invoke$arity$1(state) | (0))),"\n","MAX SCORE: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$max_DASH_score.cljs$core$IFn$_invoke$arity$1(state)),"\n","SCORE:     ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$score.cljs$core$IFn$_invoke$arity$1(state)),"\n","\n","PRESS ANY KEY TO CONTINUE...",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.mod(quil.core.seconds(),(2)) | (0)),(0)))?"\u2588":"")].join(''),(10),(20));
});
cubes.render.render_state = (function cubes$render$render_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((0));

cubes.render.render_entities(state);

var pred__6543 = cljs.core._EQ_;
var expr__6544 = cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_((pred__6543.cljs$core$IFn$_invoke$arity$2 ? pred__6543.cljs$core$IFn$_invoke$arity$2("title",expr__6544) : pred__6543.call(null,"title",expr__6544)))){
return cubes.render.render_title(state);
} else {
if(cljs.core.truth_((pred__6543.cljs$core$IFn$_invoke$arity$2 ? pred__6543.cljs$core$IFn$_invoke$arity$2("game",expr__6544) : pred__6543.call(null,"game",expr__6544)))){
return cubes.render.render_game(state);
} else {
if(cljs.core.truth_((pred__6543.cljs$core$IFn$_invoke$arity$2 ? pred__6543.cljs$core$IFn$_invoke$arity$2("score",expr__6544) : pred__6543.call(null,"score",expr__6544)))){
return cubes.render.render_score(state);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6544)].join('')));
}
}
}
});
