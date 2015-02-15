define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div id=\"adminSidebar\" class=\"sidebar\"><ul role=\"tablist\" class=\"nav nav-tabs\"><li role=\"presentation\" class=\"active\"><a href=\"#adminNewCircle\" aria-controls=\"adminNewCircle\" role=\"tab\" data-toggle=\"tab\"><i class=\"glyphicon glyphicon-plus\"></i><span class=\"title\">&#x65B0;&#x898F;&#x56E3;&#x4F53;&#x8FFD;&#x52A0;</span></a></li><li role=\"presentation\"><a href=\"#adminUserList\" aria-controls=\"adminUserList\" role=\"tab\" data-toggle=\"tab\"><i class=\"glyphicon glyphicon-th-list\"></i><span class=\"title\">&#x30E6;&#x30FC;&#x30B6;&#x30FC;&#x4E00;&#x89A7;</span></a></li></ul></div><div id=\"adminContent\" class=\"content\"><div class=\"tab-content\"><div id=\"adminNewCircle\" role=\"tabpanel\" class=\"tab-pane fade in active\"><h1>&#x65B0;&#x898F;&#x56E3;&#x4F53;&#x8FFD;&#x52A0;<div data-js=\"markdown\" class=\"label label-default\">&#x30D7;&#x30EC;&#x30D3;&#x30E5;&#x30FC;</div></h1><form><div class=\"form-group\"><label for=\"circle_name\">&#x56E3;&#x4F53;&#x540D;</label><input id=\"circle_name\" type=\"text\" placeholder=\"応用数学研究部\" class=\"form-control\"/><label for=\"circle_description\">&#x56E3;&#x4F53;&#x8AAC;&#x660E;</label><textarea id=\"circle_description\" placeholder=\"団体説明を記入\" rows=\"10\" class=\"form-control\"></textarea><label for=\"circle_num\">&#x4EBA;&#x6570;</label><input id=\"circle_num\" type=\"text\" placeholder=\"18\" class=\"form-control\"/><label for=\"site_name\">&#x30A6;&#x30A7;&#x30D6;&#x30B5;&#x30A4;&#x30C8;</label><input id=\"site_name\" type=\"text\" placeholder=\"http://unitus-ac.com\" class=\"form-control\"/><label for=\"university\">&#x6240;&#x5C5E;&#x5927;&#x5B66;</label><input id=\"university\" type=\"text\" placeholder=\"東京理科大学\" class=\"form-control\"/><label for=\"remarks\">&#x5099;&#x8003;</label><textarea id=\"remarks\" placeholder=\"インカレサークルです。\" class=\"form-control\"></textarea><label for=\"contact\">&#x9023;&#x7D61;&#x5148;</label><input id=\"contact\" type=\"text\" placeholder=\"Tel: 090123456\" class=\"form-control\"/><label for=\"leader\">&#x4EE3;&#x8868;&#x8005;</label><input id=\"leader\" type=\"text\" placeholder=\"@hogehoge\" class=\"form-control\"/><div class=\"checkbox\"><label><input id=\"isAcceptOutside\" type=\"checkbox\"/> &#x5916;&#x90E8;&#x751F;&#x306E;&#x30B5;&#x30FC;&#x30AF;&#x30EB;&#x52A0;&#x5165;&#x53EF;&#x5426;</label></div><div class=\"pull-right\"><button type=\"submit\" class=\"btn btn-primary\">&#x4FDD;&#x5B58;&#x3059;&#x308B;</button></div><div class=\"clear\"></div></div></form></div><div id=\"adminUserList\" role=\"tabpanel\" class=\"tab-pane fade\"><h1>&#x30E6;&#x30FC;&#x30B6;&#x30FC;&#x4E00;&#x89A7;</h1><table><thead><tr><th class=\"name_w\">&#x540D;&#x524D;</th><th class=\"author_w\">&#x6A29;&#x9650;</th><th class=\"number_w\">&#x5B66;&#x5E74;</th><th class=\"university_w\">&#x6240;&#x5C5E;&#x5927;&#x5B66;</th><th class=\"mail_w\">&#x30E1;&#x30FC;&#x30EB;&#x30A2;&#x30C9;&#x30EC;&#x30B9;</th></tr></thead><tbody data-js=\"userList\"></tbody></table></div></div></div><div id=\"adminOptionbar\"><div data-js=\"close_admin\" class=\"close_btn\"><div class=\"glyphicon glyphicon-remove\"></div></div></div>");;return buf.join("");
};

});