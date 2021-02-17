# Aurexia Social Token Platform

## API

The API is being developed in Python 3.7 using flask.

## Front

The Front End of this platform is being developed in [React.js](https://fr.reactjs.org/docs/getting-started.html)

## TO DO

### Development

All development must be done in the dev branch.
The Main branch is reserved for final output wented. It must be update when features are completly finished. Each feature will be development on a specific branch with US' name given in Trello.

Reminders :

To create a branch :

```command
git branch US01
```

To go on that new branch :

```command
git checkout US01
```

### Before push

Add all librairies used in Python into the requirements.txt file with the correct version.

At each pip install command note the version to add into the requirements.txt file

On main branch to update the website front you must run the folowing command before commit in Front directory:

```command
npm run deploy
```

### Before runing the code

Be sure to install all dependency and run the code in correct environment
