// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cubes.io');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
cubes.io.get_input_movement = (function cubes$io$get_input_movement(){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quil.core.key_as_keyword(),cljs.core.cst$kw$ArrowLeft);
if(and__4120__auto__){
return quil.core.key_pressed_QMARK_();
} else {
return and__4120__auto__;
}
})())){
return -0.5;
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quil.core.key_as_keyword(),cljs.core.cst$kw$ArrowRight);
if(and__4120__auto__){
return quil.core.key_pressed_QMARK_();
} else {
return and__4120__auto__;
}
})())){
return 0.5;
} else {
return (0);

}
}
});
