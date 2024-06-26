# Giftune Frontend

An app designed to keep you on top of your loved ones’ upcoming birthdays where you can effortlessly select the perfect gift from a diverse array of options provided by your loved one's wishlist.

## Giftune instructions (local host)

1. In command line, navigate to 'capstone-backend'
2. Insert command 'npm install'
3. Insert command 'npm run pg:init'
4. Insert command 'npm run dev'

   Now for the Frontend

5. In command line, navigate to 'capstone-frontend'
6. Insert command 'npm install'
7. Insert command 'npm start' or 'npm run start'

   Application will now open in a new tab on your default browser with URL 'http://localhost:3000/'

### Deployed Links

frontend: [Giftune on Netlify](https://giftune.netlify.app/)
backend: [Giftune on Render](https://capstone-backend-er7b.onrender.com)

#### Blockers we had during development

- Basic SQL queries everyone needed weren't made beforehand and we had multiple queries doing the same thing. We did some cleanup and fixed that as a group.
- At one point we needed to figure out how to store the user login in local storage or in state on App.js so we could get the user information passed around properly and make a conditional for the sidebar that should only show up after you log in. We asked Instructor Pak for help on this since we were at a loss to get this working. We ended up storing the user in both local storage and in state.
- Logic for mainpulating the upcoming dates and sorting them was confusing and a couple of us put our heads together to work it out and then used chatgpt to clean up the code a bit before we finished making it more efficient.
- CSS was a constant issue we were working on because we'd think we were done and then we'd try the deployed website on a bigger screen and find something else we needed to make more responsive.
- Bugs in CSS and functionality the weekend before needing to give a mock demo, everyone on the team had to jump in on a weekend to fix the app together.
- User profile images needed to be added but we couldn't use Multer without needing a cloud storage, so we came up with a set of images a user could choose from.
- React error regarding keys for items render from a map function on notification.js (This does not effect website functionality).

### Prerequisites

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Package manager

### Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

> Note: You should have the backend development server running before starting the frontend development server. Each server should be running simultaneously in separate terminal windows. This can be a lot to keep track of at first, so take your time when making changes to the repository.

### Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) - Routing
- [axios](https://www.npmjs.com/package/axios) - HTTP client

### Additional Notes

Due to changes made with the styling of Giftune I've found it user to opt for using a CSS library that enables for consitent classnames across the web app
