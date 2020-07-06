// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cubes.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('cubes.render');
goog.require('cubes.stages');
cubes.core.setup = (function cubes$core$setup(){
quil.core.frame_rate((30));

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stage,cljs.core.cst$kw$speed,cljs.core.cst$kw$max_DASH_score,cljs.core.cst$kw$time,cljs.core.cst$kw$score,cljs.core.cst$kw$player,cljs.core.cst$kw$point_DASH_cubes,cljs.core.cst$kw$distance,cljs.core.cst$kw$enemies,cljs.core.cst$kw$text],["title",(0),(0),(0),(0),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(-20),cljs.core.cst$kw$y,(20)], null),cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,["CONTROLS:\n","THE ARROW KEYS CONTROL ACCELERATION\n","THE CUBES MOVE AT THE OUTPUT OF A FUNCTION OF YOUR SPEED\n","\n","RULES:\n","HITTING RED SQUARES ENDS THE GAME\n","HITTING BLUE SQUARES INCREMENTS THE SCORE COUNTER\n","THE LONGER YOU PLAY THE MORE FREQUENTLY RED CUBES SPAWN\n","\n","GOOD LUCK!\n","PRESS ANY KEY TO CONTINUE..."].join('')]);
});
cubes.core.run_sketch = (function cubes$core$run_sketch(){
var width = (window.innerWidth - (15));
var height = (window.innerHeight - (20));
cubes.core.cubes = ((function (width,height){
return (function cubes$core$run_sketch_$_cubes(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"cubes",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(cubes.stages.update_stage_state))?((function (width,height){
return (function() { 
var G__6673__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cubes.stages.update_stage_state,args);
};
var G__6673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6674__i = 0, G__6674__a = new Array(arguments.length -  0);
while (G__6674__i < G__6674__a.length) {G__6674__a[G__6674__i] = arguments[G__6674__i + 0]; ++G__6674__i;}
  args = new cljs.core.IndexedSeq(G__6674__a,0,null);
} 
return G__6673__delegate.call(this,args);};
G__6673.cljs$lang$maxFixedArity = 0;
G__6673.cljs$lang$applyTo = (function (arglist__6675){
var args = cljs.core.seq(arglist__6675);
return G__6673__delegate(args);
});
G__6673.cljs$core$IFn$_invoke$arity$variadic = G__6673__delegate;
return G__6673;
})()
;})(width,height))
:cubes.stages.update_stage_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(cubes.core.setup))?((function (width,height){
return (function() { 
var G__6676__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cubes.core.setup,args);
};
var G__6676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6677__i = 0, G__6677__a = new Array(arguments.length -  0);
while (G__6677__i < G__6677__a.length) {G__6677__a[G__6677__i] = arguments[G__6677__i + 0]; ++G__6677__i;}
  args = new cljs.core.IndexedSeq(G__6677__a,0,null);
} 
return G__6676__delegate.call(this,args);};
G__6676.cljs$lang$maxFixedArity = 0;
G__6676.cljs$lang$applyTo = (function (arglist__6678){
var args = cljs.core.seq(arglist__6678);
return G__6676__delegate(args);
});
G__6676.cljs$core$IFn$_invoke$arity$variadic = G__6676__delegate;
return G__6676;
})()
;})(width,height))
:cubes.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(cubes.render.render_state))?((function (width,height){
return (function() { 
var G__6679__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cubes.render.render_state,args);
};
var G__6679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6680__i = 0, G__6680__a = new Array(arguments.length -  0);
while (G__6680__i < G__6680__a.length) {G__6680__a[G__6680__i] = arguments[G__6680__i + 0]; ++G__6680__i;}
  args = new cljs.core.IndexedSeq(G__6680__a,0,null);
} 
return G__6679__delegate.call(this,args);};
G__6679.cljs$lang$maxFixedArity = 0;
G__6679.cljs$lang$applyTo = (function (arglist__6681){
var args = cljs.core.seq(arglist__6681);
return G__6679__delegate(args);
});
G__6679.cljs$core$IFn$_invoke$arity$variadic = G__6679__delegate;
return G__6679;
})()
;})(width,height))
:cubes.render.render_state)], 0));
});})(width,height))
;
goog.exportSymbol('cubes.core.cubes', cubes.core.cubes);

if(cljs.core.truth_(cljs.core.some(((function (width,height){
return (function (p1__5625__5626__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__5625__5626__auto__);
});})(width,height))
,null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,cubes.core.cubes,cljs.core.cst$kw$host_DASH_id,"cubes"], null));
}
});
goog.exportSymbol('cubes.core.run_sketch', cubes.core.run_sketch);
