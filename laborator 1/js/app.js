new Vue({
el: '#app',
data: {
	a: 1,
	b: 0,
},
computed: {
 sum(){
 return parseFloat(this.a) * parseFloat(this.b);
}
},
 filters: {
 firstLetterBold(value){
value = value.toString();
 return value.replace(/\b\w/g, function(l){ return '[' + l.toUpperCase()  + ']'});
 return value;
}
}
});