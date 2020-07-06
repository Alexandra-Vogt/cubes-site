// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cubes.render');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
cubes.render.gvred = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(251),(73),(52)], null);
cubes.render.gvblue = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(131),(165),(152)], null);
cubes.render.gvyellow = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(189),(47)], null);
cubes.render.gvdark = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(29),(32),(33)], null);
cubes.render.gvgrey = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40),(40)], null);
cubes.render.render_square = (function cubes$render$render_square(p__6543,x,y,thickness,size){
var vec__6544 = p__6543;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6544,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6544,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6544,(2),null);
var inner = (size - (thickness * (2)));
quil.core.fill.cljs$core$IFn$_invoke$arity$3(r,g,b);

quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,y,size,size);

quil.core.fill.cljs$core$IFn$_invoke$arity$1(cubes.render.gvdark);

return quil.core.rect.cljs$core$IFn$_invoke$arity$4((thickness + x),(thickness + y),inner,inner);
});
cubes.render.render_player = (function cubes$render$render_player(p__6547){
var map__6548 = p__6547;
var map__6548__$1 = (((((!((map__6548 == null))))?(((((map__6548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6548):map__6548);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6548__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6548__$1,cljs.core.cst$kw$y);
return cubes.render.render_square(cubes.render.gvyellow,x,y,2.5,(20));
});
cubes.render.render_enemy = (function cubes$render$render_enemy(p__6550){
var map__6551 = p__6550;
var map__6551__$1 = (((((!((map__6551 == null))))?(((((map__6551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6551):map__6551);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6551__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6551__$1,cljs.core.cst$kw$y);
return cubes.render.render_square(cubes.render.gvred,x,y,2.5,(20));
});
cubes.render.render_point_cube = (function cubes$render$render_point_cube(p__6553){
var map__6554 = p__6553;
var map__6554__$1 = (((((!((map__6554 == null))))?(((((map__6554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6554):map__6554);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6554__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6554__$1,cljs.core.cst$kw$y);
return cubes.render.render_square(cubes.render.gvblue,x,y,2.5,(20));
});
cubes.render.render_entities = (function cubes$render$render_entities(state){
quil.core.text.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spawned_QMARK_.cljs$core$IFn$_invoke$arity$1(state)),(100),(100));

var tr__6447__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__6447__auto__);

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cubes.render.render_point_cube,cljs.core.cst$kw$point_DASH_cubes.cljs$core$IFn$_invoke$arity$1(state)));

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cubes.render.render_enemy,cljs.core.cst$kw$enemies.cljs$core$IFn$_invoke$arity$1(state)));

return cubes.render.render_player(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state));
}finally {quil.core.pop_matrix();
}});
cubes.render.render_state = (function cubes$render$render_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$3((29),(32),(33));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((29),(32),(33));

cubes.render.render_entities(state);

quil.core.fill.cljs$core$IFn$_invoke$arity$1(cubes.render.gvyellow);

return quil.core.text.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(state)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.mod(quil.core.seconds(),(2)) | (0)),(0)))?"\u2588":"")].join(''),(10),(20));
});
