// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cubes.io');
goog.require('cljs.core');
goog.require('cljs.core.constants');
cubes.io.keystates = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cubes.io.keys_by_code = new cljs.core.PersistentArrayMap(null, 4, [(37),cljs.core.cst$kw$left,(38),cljs.core.cst$kw$up,(39),cljs.core.cst$kw$right,(40),cljs.core.cst$kw$down], null);
window.addEventListener("keydown",(function (e){
var G__6649 = cljs.core.cst$kw$pressed;
var G__6650 = e.keyCode;
return (cubes.io.update_keystate_BANG_.cljs$core$IFn$_invoke$arity$2 ? cubes.io.update_keystate_BANG_.cljs$core$IFn$_invoke$arity$2(G__6649,G__6650) : cubes.io.update_keystate_BANG_.call(null,G__6649,G__6650));
}));
window.addEventListener("keyup",(function (e){
var G__6651 = null;
var G__6652 = e.keyCode;
return (cubes.io.update_keystate_BANG_.cljs$core$IFn$_invoke$arity$2 ? cubes.io.update_keystate_BANG_.cljs$core$IFn$_invoke$arity$2(G__6651,G__6652) : cubes.io.update_keystate_BANG_.call(null,G__6651,G__6652));
}));
cubes.io.update_keystate_BANG_ = (function cubes$io$update_keystate_BANG_(state,code){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cubes.io.keys_by_code,code);
if(cljs.core.truth_(temp__5735__auto__)){
var k = temp__5735__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cubes.io.keystates,cljs.core.assoc,k,state);
} else {
return null;
}
});
cubes.io.get_x_accel = (function cubes$io$get_x_accel(){
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cubes.io.keystates),cljs.core.cst$kw$left),cljs.core.cst$kw$pressed))?-0.5:(0)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cubes.io.keystates),cljs.core.cst$kw$right),cljs.core.cst$kw$pressed))?0.5:(0)));
});
cubes.io.get_y_accel = (function cubes$io$get_y_accel(){
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cubes.io.keystates),cljs.core.cst$kw$up),cljs.core.cst$kw$pressed))?-0.5:(0)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cubes.io.keystates),cljs.core.cst$kw$down),cljs.core.cst$kw$pressed))?0.5:(0)));
});
