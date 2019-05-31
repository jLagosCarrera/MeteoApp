<p align="center">
  <a href="https://github.com/jLagosCarrera/MeteoApp">
    <img src="img/logo.png" height="100px"/>
  </a>
</p>
<p align="center">
  <a href="https://app.netlify.com/sites/meteoapp/deploys" alt="Netlify Continuous Deployment">
    <img src="https://api.netlify.com/api/v1/badges/5afac4ae-1dc4-4a0a-a291-c6a3167a2442/deploy-status">
  </a>
</p>
<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2019.svg?style=plastic">
  <a href="https://github.com/jLagosCarrera/MeteoApp/releases" alt="Download Repository">
    <img src="https://img.shields.io/github/downloads/jLagosCarrera/MeteoApp/total.svg?style=plastic">
  </a>
  <img src="https://img.shields.io/github/repo-size/JLagosCarrera/MeteoApp.svg?style=plastic">
</p>
<p align="center">
  <a href="https://github.com/jLagosCarrera/MeteoApp/issues" alt="Open Issues">
    <img src="https://img.shields.io/github/issues/jLagosCarrera/MeteoApp.svg?style=plastic">
  </a>
  <a href="https://github.com/jLagosCarrera/MeteoApp/issues?q=is%3Aissue+is%3Aclosed" alt="Closed Issues">
    <img src="https://img.shields.io/github/issues-closed/jLagosCarrera/MeteoApp.svg?style=plastic">
  </a>
</p>
<h1 align="center">MeteoApp</h1>
<p align="center">MeteoApp is a weather forecast web app. MeteoApp is built with JavaScript over AngularJS framework along some libraries like uiRouter or Redux and API services from geoNames and openWeatherMaps.</p>
<h2 align="center">Demo</h2>
<p align="center">There is a demo of the application hosted on Netlify with continuous deploys on the following link:</p>
<p align="center"><a href="https://meteoapp.netlify.com">https://meteoapp.netlify.com</a></p>

## Index
1. [Introduction](#introduction)
2. [Local Deploy](#local-deploy)
3. [Dependencies](#dependencies)
4. [Known Issues](#known-issues)
5. [Contributing and Support](#contributing-and-support)
6. [Special Thanks](#special-thanks)
7. [License](#license)

<h2 align="center">Introduction</h2>

MeteoApp is an application developed entirely during my 3 month FCT internship on GBtec Software.  

The main purpose of the application is learning about web development. The use of Javascript ES6+, modern framework like AngularJS, useful libraries used on big applications like uiRouter or Redux and handling geoNames and openWeatherMaps API calls for filtering the data retrieved by them. With all these new concepts and technologies learnt I was able to create and deploy a standard modern weather web application.

<h2 align="center">Local deploy</h2>

If you want to deploy this application locally on your computer you will need [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com/) which comes along with the Node installation.  

Download this repository and after the download you need to add an .env file on the root folder of the application with the following API keys you can get for free:
- [openWeatherMaps API Key](https://openweathermap.org/appid).
- [geoNames API Key](https://www.geonames.org/export/).  

```text
OPENWEATHERMAP_API_KEY=(openWeatherMaps API Key)
GEONAMES_API_KEY=(geoNames API Key)
```  

After this you are almost ready to go, just open a terminal on the repository folder and run the following commands:
- **_dev_** -> Runs server locally on port 9000.
- **_build_** -> Generates a build of the web on the dist folder.

```bash
npm i

npm run dev
npm run build
```

<h2 align="center">Dependencies</h2>

- [angular](https://angularjs.org/): Framework used for the dynamic build of the application.
- [angular-material](https://material.angularjs.org/): Used for implementing UI components into the application.
- [angular-animate](https://www.npmjs.com/package/angular-animate): Allow material components animations.
- [angular-aria](https://www.npmjs.com/package/angular-aria): Allows material components accesibility.
- [angular-messages](https://www.npmjs.com/package/angular-messages): Allows material components messages content display.
- [material-icons](https://marella.github.io/material-icons/): Used for displaying material design icons.  
- [redux](https://redux.js.org/): Library used to work with the state of the application.
- [ng-redux](https://github.com/angular-redux/ng-redux): Implementation of redux to AngularJS.  
- [uiRouter](https://ui-router.github.io/): Manage of the application screens and routing.

<h2 align="center">Known Issues</h2>

<h2 align="center">Contributing and Support</h2>

<h2 align="center">Special Thanks</h2>

<h2 align="center">License</h2>
