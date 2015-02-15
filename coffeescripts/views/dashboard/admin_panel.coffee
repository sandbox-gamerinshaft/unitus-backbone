define ['jquery', 'backbone','templates/dashboard/admin_panel'], ($, Backbone, AdminTemplate) ->
  class AdminPanelView extends Backbone.View
    initialize: (option) ->
      sendData =
        count: 40
        offset: 0
        validationToken: "abc"
      $.ajax
        type: "GET",
        url:"https://core.unitus-ac.com/Person",
        data: sendData,
        success: (msg)->
          $.each msg.Content.Persons, ->
            text =  ''
            text += '<tr>'
            text += '<td class="name name_w">' + this.Name + '<i data-js="deleteAccount" class="fa fa-times"></i></td>'
            text += '<td class="author author_w">' + "閲覧者" + '</td>'
            text += '<td class="number number_w">' + this.Grade + '</td>'
            text += '<td class="university university_w">' + this.BelongedTo + '</td>'
            text += '<td class="mail mail_w">' + this.UserName + '<i class="fa fa-clipboard" data-js="copyMail" data-clipboard-text="' + this.UserName + '"></i></td>'
            text += '</tr>'
            $("[data-js=userList]").append(text);

        error: (msg)->
          console.log msg

      @admin_panel = option.admin_panel
      @admin_panel.on "change:isOpen", =>
        @$el.toggleClass("hidden_panel")
      @renderAdminPanel()

    events:
      "click [data-js=close_admin]" : "closePanel"
    renderAdminPanel: ->
      @$el.html AdminTemplate()

    closePanel: ->
      @admin_panel.set isOpen: false

