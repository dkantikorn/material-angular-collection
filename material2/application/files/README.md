# <%= utils.classify(name) %>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version <%= version %>.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

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