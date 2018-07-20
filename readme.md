
## Points to be noted :

* Precompiled templates help in faster loading so we pre-compile every handlebar template and add only the runtime handlebar source file in html head.
* For SEO it is better to have meta tags for each page copied. No need to automate head. It helps in caching existing documents too.
* Compile all handlebar templates to one single js file and include only that :
  Command : handlebars [directory/filename name] -f compiled-templates.js
* Import all partial scss files into one final scss file which needs to be watched. Include only compiled css     file.
  Command : sass --watch src/scss:compiled


split:
responsive design
modular code
