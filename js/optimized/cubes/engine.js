// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cubes.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
/**
 * Checks if the player has collided with the walls or an enemy.
 *   Returns true if yes, false if no.
 */
cubes.engine.player_killed_QMARK_ = (function cubes$engine$player_killed_QMARK_(player_x,player_y,min_x,max_x,min_y,max_y,enemies){
var or__4131__auto__ = (player_x >= min_x);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (player_x <= max_x);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (player_y >= min_y);
if(or__4131__auto____$2){
return or__4131__auto____$2;
} else {
var or__4131__auto____$3 = (player_y <= max_y);
if(or__4131__auto____$3){
return or__4131__auto____$3;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (or__4131__auto____$3,or__4131__auto____$2,or__4131__auto____$1,or__4131__auto__){
return (function (enemy){
var enemy_x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(enemy);
var enemy_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(enemy);
return (((player_y >= (enemy_y - (20)))) && (((player_y - (20)) <= enemy_y)) && ((player_x >= (enemy_x - (20)))) && (((player_x - (20)) <= enemy_x)));
});})(or__4131__auto____$3,or__4131__auto____$2,or__4131__auto____$1,or__4131__auto__))
,enemies));
}
}
}
}
});
/**
 * Filters out out of bounds entities.
 */
cubes.engine.gc_entities = (function cubes$engine$gc_entities(min_y,entities){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ent){
var ent_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(ent);
return ((min_y + (30)) >= ent_y);
}),entities);
});
/**
 * Updates the position of the point cubes.
 */
cubes.engine.update_point_cube_pos = (function cubes$engine$update_point_cube_pos(player_x,player_y,min_y,point_cubes,speed){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (point){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(point),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(point) + (cljs.core.cst$kw$speed_DASH_mul.cljs$core$IFn$_invoke$arity$1(point) * speed)),cljs.core.cst$kw$speed_DASH_mul,cljs.core.cst$kw$speed_DASH_mul.cljs$core$IFn$_invoke$arity$1(point)], null);
}),cubes.engine.gc_entities(min_y,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (point){
var point_x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(point);
var point_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(point);
return (!((((player_y >= (point_y - (20)))) && (((player_y - (20)) <= point_y)) && ((player_x >= (point_x - (20)))) && (((player_x - (20)) <= point_x)))));
}),point_cubes)));
});
/**
 * Updates the positions of each enemy.
 */
cubes.engine.update_enemy_pos = (function cubes$engine$update_enemy_pos(min_y,enemies,speed){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (enemy){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(enemy),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(enemy) + (cljs.core.cst$kw$speed_DASH_mul.cljs$core$IFn$_invoke$arity$1(enemy) * speed)),cljs.core.cst$kw$speed_DASH_mul,cljs.core.cst$kw$speed_DASH_mul.cljs$core$IFn$_invoke$arity$1(enemy)], null);
}),cubes.engine.gc_entities(min_y,enemies));
});
/**
 * Generates enemies and updates their positions.
 */
cubes.engine.gen_enemies = (function cubes$engine$gen_enemies(min_x,max_x,min_y,max_y,time,speed,enemies){
var spawn_freq = ((60) / (((((10) + time) / (500)) + (1)) * (quil.core.width() / (700))));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(time,(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (spawn_freq | (0));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))) && ((0.4 < (function (){var x__4219__auto__ = speed;
var y__4220__auto__ = (- speed);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})())) && (((100) < time)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cubes.engine.update_enemy_pos(min_y,enemies,speed),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (spawn_freq){
return (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$2(min_x,max_x),cljs.core.cst$kw$y,(max_y - (20)),cljs.core.cst$kw$speed_DASH_mul,quil.core.random.cljs$core$IFn$_invoke$arity$2(1.5,0.5)], null);
});})(spawn_freq))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (((1) / spawn_freq) | (0));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),(1))));
} else {
return cubes.engine.update_enemy_pos(min_y,enemies,speed);
}
});
/**
 * Updates the score of the player.
 */
cubes.engine.update_score = (function cubes$engine$update_score(player_x,player_y,score,point_cubes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,point){
var point_x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(point);
var point_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(point);
if((((player_y >= (point_y - (20)))) && (((player_y - (20)) <= point_y)) && ((player_x >= (point_x - (20)))) && (((player_x - (20)) <= point_x)))){
return (acc + (1));
} else {
return (acc + (0));
}
}),score,point_cubes);
});
/**
 * This calculates when the enemies should be spawned in the game.
 *   the spawn frequency calculation computes the frequency with which
 *   enemies will spawn.
 */
cubes.engine.gen_point_cubes = (function cubes$engine$gen_point_cubes(player_x,player_y,min_x,max_x,min_y,max_y,point_cubes,speed,time){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(time,(((128) / (quil.core.width() / (700))) | (0))))) && ((0.4 < (function (){var x__4219__auto__ = speed;
var y__4220__auto__ = (- speed);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})())))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cubes.engine.update_point_cube_pos(player_x,player_y,min_y,point_cubes,speed),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$2(min_x,max_x),cljs.core.cst$kw$y,(max_y - (20)),cljs.core.cst$kw$speed_DASH_mul,quil.core.random.cljs$core$IFn$_invoke$arity$2(1.5,0.5)], null));
} else {
return cubes.engine.update_point_cube_pos(player_x,player_y,min_y,point_cubes,speed);
}
});
/**
 * This updates the player state.
 */
cubes.engine.update_player = (function cubes$engine$update_player(player_speed_x,player_speed_y,player_x,player_y){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(player_x + player_speed_x),cljs.core.cst$kw$y,(player_y + player_speed_y),cljs.core.cst$kw$speed_DASH_x,player_speed_x,cljs.core.cst$kw$speed_DASH_y,player_speed_y], null);
});
