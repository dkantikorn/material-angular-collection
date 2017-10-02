# Angular2+ for custome template
Check for you angular-cli version

$ ng --version

If your angular-cli version less 1.4.2 then you must run the upgrade the angular-cli

$ npm upgrade -g @angular/cli

# Material Desing Demo
[Angular Material](https://material.angular.io/)
[npm Angular Material 2](https://www.npmjs.com/package/angular2-materialize)
[Material Icon](https://google.github.io/material-design-icons/)

# Angular Custom Collection
$ cd C:\Users\{{USER-NAME}}\AppData\Roaming\npm\node_modules\@angular\cli\node_modules

$ mkdir -p @template/material2

$ cp -R \@schematics/angular/* \@template/material2/

$ git clone https://github.com/dkantikorn/material-angular-collection.git

# Generate for the application

--collection = templatename

--material = make material template default basic themplate

--mdTheme = template name possible value  ["deeppurple-amber", "indigo-pink", "pink-bluegrey", "purple-green"] default "indigo-pink"

$ ng new --collection=@template/material2 --material --mdTheme purple-green my-app-name

$ cd my-app-name

$ ng serve