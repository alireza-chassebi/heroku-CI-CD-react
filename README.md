# Heroku CI/CD workflow for React app using Docker & Travis CI

## Workflow

When pushing changes to github Travis CI will run the npm run test script defined in package.json. If <br />
all the tests pass the build will be deployed to heroku. If the tests fail members of the repo wil be <br />
aware that the last commit was unsafe.

## Setup

### Heroku

Create a heroku account and application. Set the applications deployment method to github and connect <br />
the app to your repo containing your app.

### Travis

Create a Travis CI account. Navigate to your profile settings and click Activate under Github Apps integration. <br />
Once on github selected the repo containing your app in order to integrate it with Travis CI. Navigate to your <br />
Travis CI dashboard click on the repo you just integrated and select settings, set the enviorment variables <br />
that are described in .travis.yml in this repo.

## Docker files

There are two dockerfiles one for development (Dockerfile.dev) and one for production (Dockerfile). <br />
There is also a docker-compose.yml file that can be used to streamline container creation and running through the CLI.

## Docker commands

navigate to the root directory of the app.

build development app image and create and run container with volumes.

```
  docker-compose up
```

rebuild development app image and create and run container with volumes.

```
  docker-compose up --build
```

build production ready app docker image. Replace IMAGENAME as desired

```
  docker build -t IMAGENAME .
```

create and run production ready docker container. Replace PORTNUMBER & HOSTPORT as desired.

```
  docker run -e PORT=PORTNUMBER -p HOSTPORT:PORTNUMBER IMAGENAME
```
