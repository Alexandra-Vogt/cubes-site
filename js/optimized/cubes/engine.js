// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cubes.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Checks if the player has collided with the walls or an enemy.
 *   Returns true if yes, false if no.
 */
cubes.engine.player_killed_QMARK_ = (function cubes$engine$player_killed_QMARK_(state){
var player_x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state));
var player_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state));
var enemies = cljs.core.cst$kw$enemies.cljs$core$IFn$_invoke$arity$1(state);
var or__4131__auto__ = (player_x >= (330));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (player_x <= (-350));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (or__4131__auto____$1,or__4131__auto__,player_x,player_y,enemies){
return (function (enemy){
var enemy_x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(enemy);
var enemy_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(enemy);
return (((player_y >= (enemy_y - (20)))) && (((player_y - (20)) <= enemy_y)) && ((player_x >= (enemy_x - (20)))) && (((player_x - (20)) <= enemy_x)));
});})(or__4131__auto____$1,or__4131__auto__,player_x,player_y,enemies))
,enemies));
}
}
});
/**
 * Checks if the player has collided with a point cube. Returns
 *   true if yes, false if no.
 */
cubes.engine.update_point_cube_pos = (function cubes$engine$update_point_cube_pos(state){
var player_x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state));
var player_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state));
var point_cubes = cljs.core.cst$kw$point_DASH_cubes.cljs$core$IFn$_invoke$arity$1(state);
var speed = (function (){var x__4219__auto__ = cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(state);
var y__4220__auto__ = (- cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(state));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (player_x,player_y,point_cubes,speed){
return (function (point){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(point),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(point) + speed)], null);
});})(player_x,player_y,point_cubes,speed))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (player_x,player_y,point_cubes,speed){
return (function (point){
var point_x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(point);
var point_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(point);
return (!((((player_y >= (point_y - (20)))) && (((player_y - (20)) <= point_y)) && ((player_x >= (point_x - (20)))) && (((player_x - (20)) <= point_x)))));
});})(player_x,player_y,point_cubes,speed))
,point_cubes));
});
cubes.engine.update_enemy_pos = (function cubes$engine$update_enemy_pos(state){
var speed = (function (){var x__4219__auto__ = cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(state);
var y__4220__auto__ = (- cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(state));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (speed){
return (function (enemy){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(enemy),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(enemy) + speed)], null);
});})(speed))
,cljs.core.cst$kw$enemies.cljs$core$IFn$_invoke$arity$1(state));
});
