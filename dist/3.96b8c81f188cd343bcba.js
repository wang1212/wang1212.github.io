(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{6:function(t,e,a){"use strict";var n=c(a(0)),s=c(a(1));function c(t){return t&&t.__esModule?t:{default:t}}
/*! About page script */Router.add("/about",function(){document.title="关于我-不如怀念";var t=(0,n.default)("<div></div>");t.append('<section class="text-center mb-3"><p class="h2 text-muted font-italic font-weight-light">'+s.default.about.top+"</p></section>"),t.append('<section class="text-center mb-3"><h3><span class="head d-inline-block">I Think</span></h3><p class="font-weight-light">'+s.default.about.I_Think+"</p></section>"),t.append('<section class="text-center mb-3"><h3><span class="head d-inline-block">Career</span></h3><p class="font-weight-light">'+s.default.about.Career+"</p></section>");var e="";Object.keys(s.default.about.Technology_Stack).forEach(function(t,a){var n="";s.default.about.Technology_Stack[t].forEach(function(t){n+='<div class="progress mb-2"><div class="progress-bar" role="progressbar" aria-valuenow="'+t[1].match(/\d+/)+'" aria-valuemin="0" aria-valuemax="100">'+t[0]+"</div></div>"}),e+='<section class="mb-3"><h4 class="text-left font-weight-light">'+t+"</h4><div>"+n+"</div></section>"}),t.append('<section class="text-center mb-3"><h3><span class="head d-inline-block">Technology Stack</span></h3>'+e+"</section>"),t.append('<section class="text-center mb-3"><h3><span class="head d-inline-block">'+s.default.constellation+'</span></h3><p class="font-weight-light">'+s.default.about.Constellation+"</p></section>");var a="";s.default.about.Like.forEach(function(t){a+='<p class="font-weight-light">'+t+"</p>"}),t.append('<section class="text-center mb-3"><h3><span class="head d-inline-block">Like</span></h3>'+a+"</section>");var c="";s.default.about.Now.forEach(function(t){c+='<p class="font-weight-light">'+t+"</p>"}),t.append('<section class="text-center mb-3"><h3><span class="head d-inline-block">Now</span></h3>'+c+"</section>"),t.append('<section class="text-center mb-3"><h3><span class="head d-inline-block">E-mail</span></h3><p class="font-weight-light">'+s.default.about.E_mail+"</p></section>"),(0,n.default)("#content").fadeOut("fast",function(){(0,n.default)(this).attr("content","about").html(t.children()).fadeIn(function(){(0,n.default)(this).find(".progress-bar").each(function(t,e){(0,n.default)(e).css("width",(0,n.default)(e).attr("aria-valuenow")+"%")})})})})}}]);