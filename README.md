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

## Build Errors on Vercel

```java
info  - Checking validity of types...
Failed to compile.
./components/github/GithubUser.tsx:60:20
Type error: No overload matches this call.
  Overload 1 of 2, '(props: { component: ElementType<any>; } & { children?: ReactNode; classes?: Partial<ContainerClasses> | undefined; disableGutters?: boolean | undefined; fixed?: boolean | undefined; maxWidth?: false | ... 1 more ... | undefined; sx?: SxProps<...> | undefined; } & CommonProps & Omit<...>): Element', gave the following error.
    Type '{ pt: string | number | (string & {}) | Property.PaddingTop<string | number>[] | (Property.PaddingTop<string | number> | Property.PaddingTop<string | number>[] | null | undefined)[] | ... 7 more ... | undefined; textAlign: "left"; }' is not assignable to type 'SxProps<Theme> | undefined'.
      Type '{ pt: string | number | (string & {}) | Property.PaddingTop<string | number>[] | (Property.PaddingTop<string | number> | Property.PaddingTop<string | number>[] | null | undefined)[] | ... 7 more ... | undefined; textAlign: "left"; }' is not assignable to type 'undefined'.
  Overload 2 of 2, '(props: DefaultComponentProps<ContainerTypeMap<{}, "div">>): Element', gave the following error.
    Type '{ pt: string | number | (string & {}) | Property.PaddingTop<string | number>[] | (Property.PaddingTop<string | number> | Property.PaddingTop<string | number>[] | null | undefined)[] | ... 7 more ... | undefined; textAlign: "left"; }' is not assignable to type 'SxProps<Theme> | undefined'.
      Type '{ pt: string | number | (string & {}) | Property.PaddingTop<string | number>[] | (Property.PaddingTop<string | number> | Property.PaddingTop<string | number>[] | null | undefined)[] | ... 7 more ... | undefined; textAlign: "left"; }' is not assignable to type 'undefined'.
  58 |
  59 |     return (
> 60 |         <Container sx={{ pt: containerProps.pt, textAlign: 'left' }}>
     |                    ^
  61 |             <Stack direction="row" spacing={2}>
  62 |                 <Avatar
  63 |                     // @ts-ignore
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! next-github-charts-mern@ build: `next build`
npm ERR! Exit status 1
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
