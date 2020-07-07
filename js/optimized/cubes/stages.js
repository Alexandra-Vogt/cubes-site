// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cubes.stages');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cubes.io');
goog.require('cubes.engine');
goog.require('quil.core');
/**
 * The initial stage of the game where the title is displayed.
 */
cubes.stages.title_stage = (function cubes$stages$title_stage(state){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,(cljs.core.truth_(quil.core.key_pressed_QMARK_())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stage,"game"], null):null)], 0));
});
/**
 * The function that executes during the game stage.
 */
cubes.stages.game_stage = (function cubes$stages$game_stage(state){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,(function (){var enemies = cljs.core.cst$kw$enemies.cljs$core$IFn$_invoke$arity$1(state);
var player_x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state));
var player_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state));
var player_speed_x = (cljs.core.cst$kw$speed_DASH_x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state)) + cubes.io.get_x_accel());
var player_speed_y = (cljs.core.cst$kw$speed_DASH_y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state)) + cubes.io.get_y_accel());
var player = cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state);
var min_x = (- (quil.core.width() / (2)));
var max_x = ((quil.core.width() / (2)) - (20));
var min_y = (- (quil.core.height() / (2)));
var max_y = ((quil.core.height() / (2)) - (20));
var time = cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(state);
var score = cljs.core.cst$kw$score.cljs$core$IFn$_invoke$arity$1(state);
var point_cubes = cljs.core.cst$kw$point_DASH_cubes.cljs$core$IFn$_invoke$arity$1(state);
var speed = quil.core.sqrt((quil.core.pow(player_speed_x,(2)) + quil.core.pow(player_speed_y,(2))));
var distance = cljs.core.cst$kw$distance.cljs$core$IFn$_invoke$arity$1(state);
if(cubes.engine.player_alive_QMARK_(player,min_x,max_x,min_y,max_y,enemies)){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$speed,cljs.core.cst$kw$max_DASH_score,cljs.core.cst$kw$time,cljs.core.cst$kw$score,cljs.core.cst$kw$player,cljs.core.cst$kw$point_DASH_cubes,cljs.core.cst$kw$distance,cljs.core.cst$kw$enemies,cljs.core.cst$kw$text],[speed,cljs.core.cst$kw$max_DASH_score.cljs$core$IFn$_invoke$arity$1(state),(time + (1)),cubes.engine.update_score(player,score,point_cubes),cubes.engine.update_player(player_speed_x,player_speed_y,player_x,player_y),cubes.engine.gen_point_cubes(player,min_x,max_x,min_y,max_y,point_cubes,speed,time),(distance + speed),cubes.engine.gen_enemies(min_x,max_x,min_y,max_y,time,speed,enemies),["SCORE: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$score.cljs$core$IFn$_invoke$arity$1(state)),"\n","FRAME: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(state)),"\n","SPEED: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(state).toFixed((1)))].join('')]);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ignore_DASH_keypress,true,cljs.core.cst$kw$screen_DASH_time,(0),cljs.core.cst$kw$stage,"score"], null);
}
})()], 0));
});
cubes.stages.score_stage = (function cubes$stages$score_stage(state){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,(function (){var restart = ((cljs.core.not(cljs.core.cst$kw$ignore_DASH_keypress.cljs$core$IFn$_invoke$arity$1(state)))?quil.core.key_pressed_QMARK_():false);
var max_score = (function (){var x__4219__auto__ = cljs.core.cst$kw$max_DASH_score.cljs$core$IFn$_invoke$arity$1(state);
var y__4220__auto__ = cljs.core.cst$kw$score.cljs$core$IFn$_invoke$arity$1(state);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
if(cljs.core.not(restart)){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$text,["GAME OVER\n","FRAMES:    ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(state)),"\n","DISTANCE:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.cst$kw$distance.cljs$core$IFn$_invoke$arity$1(state) | (0))),"\n","MAX SCORE: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$max_DASH_score.cljs$core$IFn$_invoke$arity$1(state)),"\n","SCORE:     ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$score.cljs$core$IFn$_invoke$arity$1(state)),((((60) < cljs.core.cst$kw$screen_DASH_time.cljs$core$IFn$_invoke$arity$1(state)))?"\n\nPRESS ANY KEY TO CONTINUE...":null)].join(''),cljs.core.cst$kw$screen_DASH_time,(cljs.core.cst$kw$screen_DASH_time.cljs$core$IFn$_invoke$arity$1(state) + (1)),cljs.core.cst$kw$ignore_DASH_keypress,(cljs.core.truth_((function (){var or__4131__auto__ = quil.core.key_pressed_QMARK_();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((30) > cljs.core.cst$kw$screen_DASH_time.cljs$core$IFn$_invoke$arity$1(state));
}
})())?cljs.core.cst$kw$ignore_DASH_keypress.cljs$core$IFn$_invoke$arity$1(state):false),cljs.core.cst$kw$speed,(0),cljs.core.cst$kw$max_DASH_score,max_score], null);
} else {
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$player,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(-20),cljs.core.cst$kw$y,(20)], null),cljs.core.cst$kw$enemies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$point_DASH_cubes,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$time,(0),cljs.core.cst$kw$distance,(0),cljs.core.cst$kw$score,(0),cljs.core.cst$kw$stage,"game"], null);
}
})()], 0));
});
cubes.stages.update_stage_state = (function cubes$stages$update_stage_state(state){
var pred__6668 = cljs.core._EQ_;
var expr__6669 = cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_((pred__6668.cljs$core$IFn$_invoke$arity$2 ? pred__6668.cljs$core$IFn$_invoke$arity$2("title",expr__6669) : pred__6668.call(null,"title",expr__6669)))){
return cubes.stages.title_stage(state);
} else {
if(cljs.core.truth_((pred__6668.cljs$core$IFn$_invoke$arity$2 ? pred__6668.cljs$core$IFn$_invoke$arity$2("game",expr__6669) : pred__6668.call(null,"game",expr__6669)))){
return cubes.stages.game_stage(state);
} else {
if(cljs.core.truth_((pred__6668.cljs$core$IFn$_invoke$arity$2 ? pred__6668.cljs$core$IFn$_invoke$arity$2("score",expr__6669) : pred__6668.call(null,"score",expr__6669)))){
return cubes.stages.score_stage(state);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6669)].join('')));
}
}
}
});
