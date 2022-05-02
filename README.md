# next-github-charts-mern

# 🚀 Javascript full-stack 🚀

https://github.com/coding-to-music/next-github-charts-mern

https://next-github-charts-mern.vercel.app

https://next-github-charts-mern.herokuapp.com

by Greg Murray gmmurray https://github.com/gmmurray

https://experiencer.dev

https://github.com/gmmurray/experiencer

## Build Warnings

```java

```

## Build Errors

```java

```

## Environment Values

```java
NEXT_PUBLIC_BASE_URL="https://next-github-charts-mern.herokuapp.com"

MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/next-github-charts-mern?retryWrites=true&w=majority"

AUTH_SECRET=""
JWT_SECRET=""

NEXT_PUBLIC_GITHUB_CLIENT_ID=""
NEXT_PUBLIC_GITHUB_CLIENT_SECRET=""

NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN=""
```

## Project Name

Experiencer

## Description

Implemented in NextJS, this app utilizes the Next Auth framework and Github's api's to give developers an easy yet customizable way to show off their experiences. This includes a timeline where they can show important events, a list page for noteworthy experiences, and a ui around their Github profile.

## Live Link

The app is deployed at [this url](https://experiencer.dev)

## Technologies Used

-   [NextJS](https://nextjs.org/) - React Jamstack framework
-   [Next-Auth](https://next-auth.js.org/) - Auth system that works seamlessly with NextJS
-   [Netlify](https://www.netlify.com/) - Frontend and serverless function hosting
-   [MongoDB Atlas](https://www.mongodb.com/atlas) - Cloud-based NoSQL solution
-   [React Query](https://react-query.tanstack.com/) - React data fetching and caching library
-   [Octokit](https://github.com/octokit) - Github API client library
-   [React Final Form](https://final-form.org/react) - Simple react form library
-   [Recharts](https://recharts.org/en-US/) - React chart library
-   [Material UI](https://mui.com/) - Popular React UI library based on Material Design by Google

## Status

Core functionality completed, needs redesign (mostly theming, colors, etc.) and polish

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/next-github-charts-mern.git
git push -u origin main
```

## Heroku

```java
heroku create next-github-charts-mern
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set MONGODB_URI="your value"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```
