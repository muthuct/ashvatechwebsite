(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navbar'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "is-active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return " <nav class=\"navbar is-link is-fixed-top\">\n      <div class=\"navbar-brand\">\n        <a class=\"navbar-item\" href=\"#\">\n          <img src=\"img/logo-small.png\" alt=\"Ashva Tech\" width=\"105\" height=\"40\">\n        </a>\n        <div class=\"navbar-burger burger\" data-target=\"navbarTarget\">\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n      </div>\n    \n      <div id=\"navbarTarget\" class=\"navbar-menu\">\n        <div class=\"navbar-end\">\n          <a class=\"navbar-item "
    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),"Home",{"name":"ifeq","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"index.html\">\n            Home\n          </a>\n          <a class=\"navbar-item "
    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),"Contact",{"name":"ifeq","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"contactus.html\">\n            Contact\n          </a>\n          <a class=\"navbar-item "
    + ((stack1 = (helpers.ifeq || (depth0 && depth0.ifeq) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),"About",{"name":"ifeq","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"aboutus.html\">\n            About\n          </a>\n          \n        </div>\n    \n        \n      </div>\n    </nav>";
},"useData":true});
})();