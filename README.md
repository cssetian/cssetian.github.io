
# Random Notes
* 'homepage' attribute in package.json specifies the host path that the app is deployed to
* * same url as repository name indicates app is being deployed to the github page of this repo
* 'predeploy' and 'deploy' npm scripts allow app to be deployed with 'npm deploy'
* adding -b master to the deploy script indicates that the master is where compiled site code should be pushed to
* the default branch for the repository has been changed to 'dev'
* user pages must be built from the master branch
* in order to build and deploy the app to the master branch (and update the live site), `npm run deploy` should be run from the `cssetian` directory