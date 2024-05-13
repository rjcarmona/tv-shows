# tv-shows-app

## Description

TV shows is an application that shows a list of TV shows coming from a open TV shows API [http://www.tvmaze.com/api].
The shows are grouped by genre and properly sorted by range.
When clicking on a TV show the user will be able to see more details about the show.

## Tech stack

vue 3.4.21
axios: 1.6.8
pinia 2.1.7
vuetify 3.6.3
@heroicons/vue 2.1.3
typescript 5.4.0

## Design

The app is built with the Vuetify UI Library in order to enhance the user experience.
When the data is loading, a loader component will be displayed, after the data is loaded a list of TV shows will be displayed together with a searchbox.
The searchbox has an icon which is part of @heroicons.
When the user types a TV show name in the searchbox and there's no match an empty state component will appear.
On the details page there's a back link allowing the user to navigate back to the list view.

## Structure/Architechture

The TV shows App uses Pinia as a store library in order to share a state across components/pages.
I've decided to use Pinia since the TV maze API returns quite some complex data and with Pinia is easier to handle and mantain this data in the application.
Antoher advantage would be, that we can use the Pinia Vue Devtools plugin, this plugin allows you to explore your stores.
Axios as HTTP client to make the API calls.
All the heavy logic is handled by the Main Pages (ListPage and TvShowDetailsPage), the other components components follow the "Dumb" approach so the are only rendering data.
The components have input properties so we can re-use them and customize their content.
Since the data that we get from the API has a lot of information I've decided to use Typescript, so the app is more maintainable and easier to scale.
For unit testing Jest and Vitest are being used.


## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
