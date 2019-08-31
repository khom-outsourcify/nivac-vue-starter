import Vue from "vue";

Vue.filter("capitalize", str => str.replace(/\b\w/g, l => l.toUpperCase()));

Vue.filter("uppercase", str => str.toUpperCase());

Vue.filter("lowercase", str => str.toLowerCase());
