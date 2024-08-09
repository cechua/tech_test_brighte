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
cp .env.example .env
npm start
```
Defaults to Port 3000 - http://localhost:3000

Port can be changed by making an .env file however this will require a change in FE API_URL in useUsers Hook


# Sample Images:
![image](https://github.com/user-attachments/assets/c1f087c5-1efd-4007-a8ba-e277bf09dcd2)

![image](https://github.com/user-attachments/assets/128a7a43-e2e6-4233-b26d-fa639422792c)

![image](https://github.com/user-attachments/assets/807841c7-31da-4423-92e9-9b218ac8bac7)

