# react-photolabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts. It uses a pre-existing API to build a frontend user experience for users to interact with photos!

# Photolabs

## APP Interface
#### ❀ Display all photos 
![Screenshot of landing page.](https://github.com/lorraineC26/photolabs/blob/main/doc/all-photos.png?raw=true)

#### ❀ Display only fashion-related photos; notification is on at the top left corner since user marked some photos as favorite
![Topic-related photos.](https://github.com/lorraineC26/photolabs/blob/main/doc/fashion-photos-notif-on.png?raw=true)

#### ❀ Click on a photo to see the larger version and similar photos
![Details of photo.](https://github.com/lorraineC26/photolabs/blob/main/doc/photo-details1.png?raw=true)
![Details of photo.](https://github.com/lorraineC26/photolabs/blob/main/doc/photo-details2.png?raw=true)


## Tech Stack
- React
- Javascript
- Axios
- PostgreSQL
- SASS
- Express


## Setup
Install dependencies with `npm install` in each respective `/frontend` and `/backend`.


## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Dependencies
### Frontend Dependencies
- @testing-library/jest-dom: "^5.16.5",
- @testing-library/react: "^13.4.0",
- @testing-library/user-event: "^13.5.0",
- axios: "^1.6.0",
- react: "^18.2.0",
- react-dom: "^18.2.0",
- react-scripts: "5.0.1",
- web-vitals: "^2.1.4"

### Backend Dependencies
- body-parser: "^1.18.3",
- cors: "^2.8.5",
- dotenv: "^7.0.0",
- express: "^4.16.4",
- helmet: "^3.18.0",
- pg: "^8.5.0",
- socket.io: "^2.2.0",
- ws: "^7.0.0"