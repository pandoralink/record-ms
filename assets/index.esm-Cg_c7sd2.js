var R;(function(n){n[n.HIGH_SURROGATE_START=55296]="HIGH_SURROGATE_START",n[n.HIGH_SURROGATE_END=56319]="HIGH_SURROGATE_END",n[n.LOW_SURROGATE_START=56320]="LOW_SURROGATE_START",n[n.REGIONAL_INDICATOR_START=127462]="REGIONAL_INDICATOR_START",n[n.REGIONAL_INDICATOR_END=127487]="REGIONAL_INDICATOR_END",n[n.FITZPATRICK_MODIFIER_START=127995]="FITZPATRICK_MODIFIER_START",n[n.FITZPATRICK_MODIFIER_END=127999]="FITZPATRICK_MODIFIER_END",n[n.VARIATION_MODIFIER_START=65024]="VARIATION_MODIFIER_START",n[n.VARIATION_MODIFIER_END=65039]="VARIATION_MODIFIER_END",n[n.DIACRITICAL_MARKS_START=8400]="DIACRITICAL_MARKS_START",n[n.DIACRITICAL_MARKS_END=8447]="DIACRITICAL_MARKS_END",n[n.SUBDIVISION_INDICATOR_START=127988]="SUBDIVISION_INDICATOR_START",n[n.TAGS_START=917504]="TAGS_START",n[n.TAGS_END=917631]="TAGS_END",n[n.ZWJ=8205]="ZWJ"})(R||(R={}));const u=Object.freeze([776,2359,2367,2984,3007,3021,3633,3635,3648,3657,4352,4449,4520]);var o;function C(n){if(typeof n!="string")throw new TypeError("string cannot be undefined or null");const I=[];let r=0,t=0;for(;r<n.length;)t+=S(r+t,n),a(n[r+t])&&t++,O(n[r+t])&&t++,D(n[r+t])&&t++,N(n[r+t])?t++:(I.push(n.substring(r,r+t)),r+=t,t=0);return I}function S(n,I){const r=I[n];if(!c(r)||n===I.length-1)return 1;const t=r+I[n+1];let e=I.substring(n+2,n+5);return _(t)&&_(e)?4:s(t)&&f(e)?I.slice(n).indexOf(String.fromCodePoint(917631))+2:E(e)?4:2}function c(n){return n&&A(n[0].charCodeAt(0),55296,56319)}function _(n){return A(T(n),127462,127487)}function s(n){return A(T(n),127988,127988)}function E(n){return A(T(n),127995,127999)}function O(n){return typeof n=="string"&&A(n.charCodeAt(0),65024,65039)}function D(n){return typeof n=="string"&&A(n.charCodeAt(0),8400,8447)}function f(n){const I=n.codePointAt(0);return typeof n=="string"&&typeof I=="number"&&A(I,917504,917631)}function a(n){return typeof n=="string"&&u.includes(n.charCodeAt(0))}function N(n){return typeof n=="string"&&n.charCodeAt(0)===8205}function T(n){return(n.charCodeAt(0)-55296<<10)+(n.charCodeAt(1)-56320)+65536}function A(n,I,r){return n>=I&&n<=r}(function(n){n[n.unit_1=1]="unit_1",n[n.unit_2=2]="unit_2",n[n.unit_4=4]="unit_4"})(o||(o={}));export{C as r};