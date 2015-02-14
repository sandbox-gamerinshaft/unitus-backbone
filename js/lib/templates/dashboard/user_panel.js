define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div id=\"userSidebar\" class=\"sidebar\"><!-- Nav tabs--><ul role=\"tablist\" data-js=\"userSideList\" class=\"nav nav-tabs\"><li role=\"presentation\" class=\"active\"><a href=\"#circleList\" aria-controls=\"circleList\" role=\"tab\" data-toggle=\"tab\"><i class=\"glyphicon glyphicon-th\"></i><span class=\"title\">加盟団体一覧</span></a></li><li role=\"presentation\"><a href=\"#mail\" aria-controls=\"mail\" role=\"tab\" data-toggle=\"tab\"><i class=\"glyphicon glyphicon-envelope\"></i><span class=\"title\">部員招待</span></a></li><li role=\"presentation\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\"><i class=\"glyphicon glyphicon-user\"></i><span class=\"title\">プロフィール</span></a></li></ul></div><div id=\"userContent\" class=\"content\"><div data-js=\"userPanelList\" class=\"tab-content\"><div id=\"circleList\" role=\"tabpanel\" class=\"tab-pane fade in active\"><h1>加盟団体一覧</h1><table><thead><tr><th class=\"name_w\">名前</th><th class=\"author_w\">権限</th><th class=\"number_w\">人数</th><th class=\"university_w\">大学名</th><th class=\"update_w\">更新日</th></tr></thead><tbody data-js=\"circleList\"></tbody></table></div><div id=\"mail\" role=\"tabpanel\" class=\"tab-pane fade\"><h1>メンバー招待</h1><p>このページでは、自分が権限を与えられているサークルないし部活のメンバーを招待することが出来ます。</p><form><div class=\"form-group\"><label for=\"circle_name\">団体名</label><input id=\"circle_name\" type=\"text\" placeholder=\"応用数学研究部\" class=\"form-control\"/><label for=\"circle_description\">団体説明</label><textarea id=\"circle_description\" placeholder=\"団体説明を記入\" rows=\"10\" class=\"form-control\"></textarea><label for=\"circle_num\">人数</label><input id=\"circle_num\" type=\"text\" placeholder=\"18\" class=\"form-control\"/><label for=\"site_name\">ウェブサイト</label><input id=\"site_name\" type=\"text\" placeholder=\"http://unitus-ac.com\" class=\"form-control\"/><label for=\"university\">所属大学</label><input id=\"university\" type=\"text\" placeholder=\"東京理科大学\" class=\"form-control\"/><label for=\"remarks\">備考</label><textarea id=\"remarks\" placeholder=\"インカレサークルです。\" class=\"form-control\"></textarea><label for=\"contact\">連絡先</label><input id=\"contact\" type=\"text\" placeholder=\"Tel: 090123456\" class=\"form-control\"/><label for=\"leader\">代表者</label><input id=\"leader\" type=\"text\" placeholder=\"@hogehoge\" class=\"form-control\"/><div class=\"checkbox\"><label><input id=\"isAcceptOutside\" type=\"checkbox\"/> 外部生のサークル加入可否</label></div><div class=\"pull-right\"><button type=\"submit\" class=\"btn btn-primary\">保存する</button></div></div></form></div><div id=\"profile\" data-js=\"myProfile\" role=\"tabpanel\" class=\"tab-pane fade\"></div></div></div>");;return buf.join("");
};

});
