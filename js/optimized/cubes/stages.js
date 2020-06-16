// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cubes.stages');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cubes.io');
goog.require('cubes.engine');
goog.require('quil.core');
/**
 * The initial stage of the game where the
 */
cubes.stages.title_stage = (function cubes$stages$title_stage(state){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stage,cljs.core.cst$kw$speed,cljs.core.cst$kw$max_DASH_score,cljs.core.cst$kw$time,cljs.core.cst$kw$score,cljs.core.cst$kw$player,cljs.core.cst$kw$point_DASH_cubes,cljs.core.cst$kw$distance,cljs.core.cst$kw$enemies],[(cljs.core.truth_(quil.core.key_pressed_QMARK_())?"game":"title"),(0),(0),(0),(0),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(-20),cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(-20),cljs.core.cst$kw$y,(-400)], null)], null),(0),cljs.core.PersistentVector.EMPTY]);
});
/**
 * The function that executes during the game state, describing the
 */
cubes.stages.game_stage = (function cubes$stages$game_stage(state){
var speed = (cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(state) + cubes.io.get_input_movement());
var player_x = (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state)) + speed);
var player_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state));
var distance = cljs.core.cst$kw$distance.cljs$core$IFn$_invoke$arity$1(state);
var point_cubes = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(state),(128)))) && ((0.4 < (function (){var x__4219__auto__ = speed;
var y__4220__auto__ = (- speed);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cubes.engine.update_point_cube_pos(state),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$2((-350),(330)),cljs.core.cst$kw$y,(-400)], null)):cubes.engine.update_point_cube_pos(state));
var enemies = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(state),(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (((60) / ((cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(state) / (500)) + (1))) | (0));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))) && ((0.4 < (function (){var x__4219__auto__ = speed;
var y__4220__auto__ = (- speed);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cubes.engine.update_enemy_pos(state),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$2((-350),(330)),cljs.core.cst$kw$y,(-400)], null)):cubes.engine.update_enemy_pos(state));
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stage,cljs.core.cst$kw$speed,cljs.core.cst$kw$max_DASH_score,cljs.core.cst$kw$time,cljs.core.cst$kw$score,cljs.core.cst$kw$player,cljs.core.cst$kw$point_DASH_cubes,cljs.core.cst$kw$distance,cljs.core.cst$kw$enemies],[(cljs.core.truth_(cubes.engine.player_killed_QMARK_(state))?"score":"game"),speed,cljs.core.cst$kw$max_DASH_score.cljs$core$IFn$_invoke$arity$1(state),(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(state) + (1)),(((cljs.core.count(point_cubes) < cljs.core.count(cljs.core.cst$kw$point_DASH_cubes.cljs$core$IFn$_invoke$arity$1(state))))?(cljs.core.cst$kw$score.cljs$core$IFn$_invoke$arity$1(state) + (1)):cljs.core.cst$kw$score.cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,player_x,cljs.core.cst$kw$y,player_y], null),point_cubes,(distance + (function (){var x__4219__auto__ = speed;
var y__4220__auto__ = (- speed);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()),enemies]);
});
cubes.stages.score_stage = (function cubes$stages$score_stage(state){
var restart = quil.core.key_pressed_QMARK_();
var max_score = (function (){var x__4219__auto__ = cljs.core.cst$kw$max_DASH_score.cljs$core$IFn$_invoke$arity$1(state);
var y__4220__auto__ = cljs.core.cst$kw$score.cljs$core$IFn$_invoke$arity$1(state);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$speed,(0),cljs.core.cst$kw$player,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(cljs.core.truth_(restart)?(-20):cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state))),cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state))], null),cljs.core.cst$kw$enemies,(cljs.core.truth_(restart)?cljs.core.PersistentVector.EMPTY:cljs.core.cst$kw$enemies.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$point_DASH_cubes,(cljs.core.truth_(restart)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(-20),cljs.core.cst$kw$y,(-400)], null)], null):cljs.core.cst$kw$point_DASH_cubes.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$time,(cljs.core.truth_(restart)?(0):cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$score,(cljs.core.truth_(restart)?(0):cljs.core.cst$kw$score.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$max_DASH_score,max_score,cljs.core.cst$kw$stage,(cljs.core.truth_(restart)?"game":"score")], null);
});
cubes.stages.update_stage_state = (function cubes$stages$update_stage_state(state){
var pred__6643 = cljs.core._EQ_;
var expr__6644 = cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_((pred__6643.cljs$core$IFn$_invoke$arity$2 ? pred__6643.cljs$core$IFn$_invoke$arity$2("title",expr__6644) : pred__6643.call(null,"title",expr__6644)))){
return cubes.stages.title_stage(state);
} else {
if(cljs.core.truth_((pred__6643.cljs$core$IFn$_invoke$arity$2 ? pred__6643.cljs$core$IFn$_invoke$arity$2("game",expr__6644) : pred__6643.call(null,"game",expr__6644)))){
return cubes.stages.game_stage(state);
} else {
if(cljs.core.truth_((pred__6643.cljs$core$IFn$_invoke$arity$2 ? pred__6643.cljs$core$IFn$_invoke$arity$2("score",expr__6644) : pred__6643.call(null,"score",expr__6644)))){
return cubes.stages.score_stage(state);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6644)].join('')));
}
}
}
});
