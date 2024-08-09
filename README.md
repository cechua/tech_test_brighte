#  FE Libraries Used:
1) React Hook Form - to optimize the inputs render, as discussed during the technical interview regarding how to prevent rerenders of input that was not changed. React Hook Form under the hood helps with this issue as it isolates re-renders.
2) Zod - Schema Validation for Form
3) Tailwind CSS - Styling
4) Axios - Fetching and Posting of Data

#  BE Libraries Used:
1) Express - Nodejs Framework
2) Sequelize - ORM for data model and database queries
3) Sqlite3 - for temporary memory-based storage



# Setup
## Frontend:
```bash
cd fe
npm install
npm run dev
```
Defaults to Port 5173 - http://localhost:5173

## Backend:
```bash
cd be
npm install
npm start
```
Defaults to Port 3000 - http://localhost:3000

Port can be changed by making an .env file however this will require a change in FE API_URL in useUsers Hook
