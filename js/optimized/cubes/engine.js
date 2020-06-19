// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cubes.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
/**
 * Returns the rectangle representing the bounds of a size 20 square entity.
 */
cubes.engine.entity_bounds = (function cubes$engine$entity_bounds(p__6655){
var map__6656 = p__6655;
var map__6656__$1 = (((((!((map__6656 == null))))?(((((map__6656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6656):map__6656);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6656__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6656__$1,cljs.core.cst$kw$y);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (20)),x,(y - (20)),y], null);
});
/**
 * Whether the two given rectangles intersect.
 */
cubes.engine.intersect_QMARK_ = (function cubes$engine$intersect_QMARK_(p__6658,p__6659){
var vec__6660 = p__6658;
var axmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6660,(0),null);
var axmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6660,(1),null);
var aymin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6660,(2),null);
var aymax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6660,(3),null);
var vec__6663 = p__6659;
var bxmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6663,(0),null);
var bxmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6663,(1),null);
var bymin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6663,(2),null);
var bymax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6663,(3),null);
return (((aymax >= bymin)) && ((aymin <= bymax)) && ((axmax >= bxmin)) && ((axmin <= bxmax)));
});
/**
 * Returns whether the player has stayed clear of the walls and enemies.
 */
cubes.engine.player_alive_QMARK_ = (function cubes$engine$player_alive_QMARK_(player,min_x,max_x,min_y,max_y,enemies){
return ((cubes.engine.intersect_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(player),cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(player),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(player),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_x,max_x,min_y,max_y], null))) && (cljs.core.not_any_QMARK_((function (enemy){
return cubes.engine.intersect_QMARK_(cubes.engine.entity_bounds(player),cubes.engine.entity_bounds(enemy));
}),enemies)));
});
/**
 * Filters out out of bounds entities.
 */
cubes.engine.gc_entities = (function cubes$engine$gc_entities(max_y,entities){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ent){
var ent_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(ent);
return (ent_y <= (max_y + (30)));
}),entities);
});
/**
 * Updates the position of the point cubes.
 */
cubes.engine.update_point_cube_pos = (function cubes$engine$update_point_cube_pos(player,max_y,point_cubes,speed){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (point){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(point),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(point) + (cljs.core.cst$kw$speed_DASH_mul.cljs$core$IFn$_invoke$arity$1(point) * speed)),cljs.core.cst$kw$speed_DASH_mul,cljs.core.cst$kw$speed_DASH_mul.cljs$core$IFn$_invoke$arity$1(point)], null);
}),cubes.engine.gc_entities(max_y,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (point){
return (!(cubes.engine.intersect_QMARK_(cubes.engine.entity_bounds(player),cubes.engine.entity_bounds(point))));
}),point_cubes)));
});
/**
 * Updates the positions of each enemy.
 */
cubes.engine.update_enemy_pos = (function cubes$engine$update_enemy_pos(max_y,enemies,speed){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (enemy){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(enemy),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(enemy) + (cljs.core.cst$kw$speed_DASH_mul.cljs$core$IFn$_invoke$arity$1(enemy) * speed)),cljs.core.cst$kw$speed_DASH_mul,cljs.core.cst$kw$speed_DASH_mul.cljs$core$IFn$_invoke$arity$1(enemy)], null);
}),cubes.engine.gc_entities(max_y,enemies));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cubes.engine.update_enemy_pos(max_y,enemies,speed),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (spawn_freq){
return (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$2(min_x,max_x),cljs.core.cst$kw$y,(min_y - (20)),cljs.core.cst$kw$speed_DASH_mul,quil.core.random.cljs$core$IFn$_invoke$arity$2(1.5,0.5)], null);
});})(spawn_freq))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (((1) / spawn_freq) | (0));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),(1))));
} else {
return cubes.engine.update_enemy_pos(max_y,enemies,speed);
}
});
/**
 * Updates the score of the player.
 */
cubes.engine.update_score = (function cubes$engine$update_score(player,score,point_cubes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,point){
if(cubes.engine.intersect_QMARK_(cubes.engine.entity_bounds(player),cubes.engine.entity_bounds(point))){
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
cubes.engine.gen_point_cubes = (function cubes$engine$gen_point_cubes(player,min_x,max_x,min_y,max_y,point_cubes,speed,time){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(time,(((128) / (quil.core.width() / (700))) | (0))))) && ((0.4 < (function (){var x__4219__auto__ = speed;
var y__4220__auto__ = (- speed);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})())))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cubes.engine.update_point_cube_pos(player,max_y,point_cubes,speed),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$2(min_x,max_x),cljs.core.cst$kw$y,(min_y - (20)),cljs.core.cst$kw$speed_DASH_mul,quil.core.random.cljs$core$IFn$_invoke$arity$2(1.5,0.5)], null));
} else {
return cubes.engine.update_point_cube_pos(player,max_y,point_cubes,speed);
}
});
/**
 * This updates the player state.
 */
cubes.engine.update_player = (function cubes$engine$update_player(player_speed_x,player_speed_y,player_x,player_y){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(player_x + player_speed_x),cljs.core.cst$kw$y,(player_y + player_speed_y),cljs.core.cst$kw$speed_DASH_x,player_speed_x,cljs.core.cst$kw$speed_DASH_y,player_speed_y], null);
});
