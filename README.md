# Fezzik
This Angular 2 application has several issues with it.  Please fork this repo, make any bug fixes that allow it to function properly as well as any of the requirements that were given to you.  When you are finished, please commit and push your changes up to your fork and open a pull request to merge your changes in.

## Development server
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

You will need to run npm install before starting the application.  This app was developed using npm version 3.10.10 and node.js version 6.10.1.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Instructions/Requirements
There are several issues with this application.  Please review the current list of bugs and requirements and complete the changes.  If you feel there are other improvements on this, please feel free to make them.

#### Bugs
+ The messages service needs to be configured with the new API Gateway endpoint, the url should have been provided to you.
+ The Jumbotron component has a broken import and cannot access the MessagesService.
+ The Content component contains a bug when querying new posts

#### Requirements
+ The Jumbotron component contains a button, this button should rebuild the jumbotron message on click.
+ The Jumbotron content inside of `.lead.text-muted` should be text-aligned center.
+ The Content component has a nested element known as `.card .giphy`.  `.giphy` needs to have the following styles applied to it:
  + 100% width
  + 280px height
  + background does not repeat
  + background position is centered
  + background size is contained

#### Bonus
Create a new component that follows Bootstrap theming conventions and develop something fun!

## Further help
To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

If you have any questions about the requirements or any configurations, please reach out to your point of contact.
