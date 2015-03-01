var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __hasProp = {}.hasOwnProperty;

define(['jquery', 'backbone', 'templates/dashboard/admin_panel', 'models/circle'], function($, Backbone, AdminTemplate, Circle) {
  var AdminPanelView;
  return AdminPanelView = (function(_super) {
    __extends(AdminPanelView, _super);

    function AdminPanelView() {
      this.validationCreateButton = __bind(this.validationCreateButton, this);
      this.watchNewCircleEvents = __bind(this.watchNewCircleEvents, this);
      this.watchChangeValue = __bind(this.watchChangeValue, this);
      return AdminPanelView.__super__.constructor.apply(this, arguments);
    }

    AdminPanelView.prototype.initialize = function(option) {
      var sendData;
      this.notyHelper = new NotyHelper();
      this.circle = new Circle();
      this.watchNewCircleEvents();
      sendData = {
        count: 40
      };
      $.ajax({
        type: "GET",
        url: "https://core.unitus-ac.com/Person",
        data: sendData,
        success: function(msg) {
          return $.each(msg.Content.Persons, function() {
            var text;
            text = '';
            text += '<tr>';
            text += '<td class="name name_w">' + this.Name + '<i data-js="deleteAccount" class="fa fa-times"></i></td>';
            text += '<td class="author author_w">' + "閲覧者" + '</td>';
            text += '<td class="number number_w">' + this.Grade + '</td>';
            text += '<td class="university university_w">' + this.BelongedTo + '</td>';
            text += '<td class="mail mail_w">' + this.UserName + '<i class="fa fa-clipboard" data-js="copyMail" data-clipboard-text="' + this.UserName + '"></i></td>';
            text += '</tr>';
            return $("[data-js=userList]").append(text);
          });
        },
        error: function(msg) {
          return console.log(msg);
        }
      });
      this.admin_panel = option.admin_panel;
      this.admin_panel.on("change:isOpen", (function(_this) {
        return function() {
          return _this.$el.toggleClass("hidden_panel_l");
        };
      })(this));
      return this.renderAdminPanel();
    };

    AdminPanelView.prototype.events = {
      "click [data-js=close_admin]": "closePanel",
      "focus #adminNewCircle input": "watchChangeValue",
      "focus #adminNewCircle textarea": "watchChangeValue",
      "click [data-js=createCircle]": "createCircle"
    };

    AdminPanelView.prototype.createCircle = function(e) {
      var sendData;
      e.preventDefault();
      e.stopPropagation();
      $(e.target).html("<img src='./img/send.gif'>");
      sendData = {
        Name: this.circle.get("CircleName"),
        Description: this.circle.get("CircleDescription"),
        MemberCount: this.circle.get("MemberCount"),
        BelongedSchool: this.circle.get("BelongedSchool"),
        Notes: this.circle.get("Notes"),
        Contact: this.circle.get("Contact"),
        CanInterColledge: true,
        ActivityDate: this.circle.get("ActivityDate"),
        LeaderUserName: this.circle.get("LeaderUserName")
      };
      return $.ajax({
        type: "POST",
        url: "https://core.unitus-ac.com/Circle",
        data: sendData,
        success: (function(_this) {
          return function(msg) {
            _this.notyHelper.generate("success", "作成完了", (_this.circle.get("CircleName")) + "を追加しました。");
            console.log("成功したよ");
            console.log(msg);
            return $(e.target).html("作成する");
          };
        })(this),
        error: (function(_this) {
          return function(msg) {
            console.log("失敗したよ");
            console.log(msg);
            if (msg.statusText === "Conflict") {
              _this.notyHelper.generate("error", "作成失敗", (_this.circle.get("CircleName")) + "はすでに存在します。");
            } else {
              switch (msg.responseText) {
                case "Name is empty.":
                  _this.notyHelper.generate("error", "作成失敗", "団体名が記入されていません。");
                  _this.$("[data-js=CircleName]").addClass("form-danger");
                  break;
                case "LeaderUserName is empty.":
                  _this.notyHelper.generate("error", "作成失敗", "代表者名が記入されていません。");
                  _this.$("[data-js=LeaderUserName]").addClass("form-danger");
                  break;
                case "BelongedSchool is empty.":
                  _this.notyHelper.generate("error", "作成失敗", "所属大学が記入されていません。");
                  _this.$("[data-js=BelongedSchool]").addClass("form-danger");
                  break;
                default:
                  _this.notyHelper.generate("error", "作成失敗", (_this.circle.get("CircleName")) + "は何らかの理由で作成できませんでした。");
              }
            }
            return $(e.target).html("作成する");
          };
        })(this)
      });
    };

    AdminPanelView.prototype.watchChangeValue = function(e) {
      var $target;
      $target = $(e.target);
      return $(e.target).on("change", (function(_this) {
        return function() {
          console.log($target.attr("data-js"));
          $target.removeClass("form-danger");
          return _this.circle.trigger($target.attr("data-js"));
        };
      })(this));
    };

    AdminPanelView.prototype.watchNewCircleEvents = function(e) {
      this.circle.on("CircleName", (function(_this) {
        return function() {
          _this.circle.set({
            CircleName: _this.$("[data-js=CircleName]").val()
          });
          _this.validationCreateButton();
          return console.log(_this.circle.get("CircleName"));
        };
      })(this));
      this.circle.on("CircleDescription", (function(_this) {
        return function() {
          _this.circle.set({
            CircleDescription: _this.$("[data-js=CircleDescription]").val()
          });
          return console.log(_this.circle.get("CircleDescription"));
        };
      })(this));
      this.circle.on("MemberCount", (function(_this) {
        return function() {
          _this.circle.set({
            MemberCount: _this.$("[data-js=MemberCount]").val()
          });
          return console.log(_this.circle.get("MemberCount"));
        };
      })(this));
      this.circle.on("WebAddress", (function(_this) {
        return function() {
          return _this.circle.set({
            WebAddress: _this.$("[data-js=WebAddress]").val()
          });
        };
      })(this));
      this.circle.on("BelongedSchool", (function(_this) {
        return function() {
          _this.circle.set({
            BelongedSchool: _this.$("[data-js=BelongedSchool]").val()
          });
          _this.validationCreateButton();
          return console.log(_this.circle.get("BelongedSchool"));
        };
      })(this));
      this.circle.on("Notes", (function(_this) {
        return function() {
          _this.circle.set({
            Notes: _this.$("[data-js=Notes]").val()
          });
          return console.log(_this.circle.get("Notes"));
        };
      })(this));
      this.circle.on("Contact", (function(_this) {
        return function() {
          _this.circle.set({
            Contact: _this.$("[data-js=Contact]").val()
          });
          return console.log(_this.circle.get("Contact"));
        };
      })(this));
      this.circle.on("CanInterColledge", (function(_this) {
        return function() {
          if (_this.$("[data-js=CanInterColledge]").is(':checked')) {
            _this.circle.set({
              CanInterColledge: true
            });
          } else {
            _this.circle.set({
              CanInterColledge: false
            });
          }
          return console.log(_this.circle.get("CanInterColledge"));
        };
      })(this));
      this.circle.on("ActivityDate", (function(_this) {
        return function() {
          _this.circle.set({
            ActivityDate: _this.$("[data-js=ActivityDate]").val()
          });
          return console.log(_this.circle.get("ActivityDate"));
        };
      })(this));
      return this.circle.on("LeaderUserName", (function(_this) {
        return function() {
          _this.circle.set({
            LeaderUserName: _this.$("[data-js=LeaderUserName]").val()
          });
          _this.validationCreateButton();
          return console.log(_this.circle.get("LeaderUserName"));
        };
      })(this));
    };

    AdminPanelView.prototype.renderAdminPanel = function() {
      return this.$el.html(AdminTemplate());
    };

    AdminPanelView.prototype.closePanel = function() {
      return this.admin_panel.set({
        isOpen: false
      });
    };

    AdminPanelView.prototype.validationCreateButton = function() {
      if (this.circle.get("CircleName") !== "" && this.circle.get("BelongedSchool") !== "" && this.circle.get("LeaderUserName") !== "") {
        return this.$("[data-js=createCircle]").prop("disabled", false);
      } else {
        return this.$("[data-js=createCircle]").prop("disabled", true);
      }
    };

    return AdminPanelView;

  })(Backbone.View);
});
