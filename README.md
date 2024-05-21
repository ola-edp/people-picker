# edp-people-picker

This project lists the Travelers EDP program bootcamp cohort 1 and picks a random person from the group. People start out unpicked, and are displayed and added to the list of picked people when they are selected. The list can be reset using the Reset button.

## Running this project locally

### 1. Dependencies
- Node.js
- MongoDB

### 2. Set up MongoDB
1. **Make sure you have MongoDB installed**
    - A good indicator is if you have the MongoDB Compass App installed.
    - You can install MongoDB Community Server (which includes MongoDB Compass) from here: https://www.mongodb.com/try/download/community .

2. **Insert the people data into your Database**
    - You can either use the `people.json` file located in the `database-files folder`, or use your own people data / json file.

    - If you use your own people data, it should be structured as follows in a json file:
    ```
    [
        {
            "id": number,
            "first": "FirstName",
            "last": "LastName",
            "age": number,
            "email": "email@email.com",
            "imageUrl": "/images/Image_Name.png"
        }
    ]
    ```
    - Where each element of the Array is a person Object with the shown key:value pairs.
    - Replace the values as needed, and add in as many person objects as you desire.
    - Be sure to add a `png image` into the `images folder` (inside the `people-app` folder) with the same name as the value you'll choose for `Image_Name.png` in the `imageUrl` key.
    
3. **Insert the people data into the Database**
    - Use `MongoDB Compass' User Interface` or `mongoimport` from `MongoDB Command Line Database Tools`.
    - If you don't have the MongoDB Command Line Database Tools installed or setup, download them here: https://www.mongodb.com/try/download/database-tools (I recommend the msi installer).
    - Make sure to read how to properly setup the MongoDB Command Line Database Tools (after you've installed them) here: https://www.mongodb.com/docs/database-tools/installation/installation-windows/ .
        - The default PATH for the commands is:
        ```
        C:\Program Files\MongoDB\Tools\100\bin\
        ```

4. **Using MongoDB Compass**
    - 1: Open MongoDB Compass
    - 2: Connect to the localhost on port 27017
    - 3: You will see a list on the left-hand side of the app. One of those items says `Databases`. Directly to the right is a refrsh icon followed by a `+` icon. Click that `+` icon to create a new Database.
        - Note what you name this Database as you will be using it in a `.env` file mentioned below.
    - 4: When you hover your cursor over one of the listed Databases, you will see a `+` icon and a trash icon appear next to the Database your cursor is hovering over. Click that `+` icon to add a new Collection to that Database.
        - Note what you name this Collection as you will be using it in a `.env` file mentioned below.
    - 5: Clicking on the folder icon (ie: the Collection you just made) that appears under that Database will show the data in it.
    - 6: Click the `Add Data` button in green and select `Import JSON or CSV file`, then select your json file, whether it's from the `database-files folder` or one of your own directories.

5. **Using MongoDB Command Line Database Tools**
    - 1: Run the following command in a terminal:
    ```
    mongoimport --uri mongodb://localhost:27017/your_db_name --collection your_collection_name --drop --file path_to_json_file/json_file_name.json --jsonArray
    ```
    - Where:
        - `your_db_name` is whatever you've named your Database.
        - `your_collection_name` is whatever you've named your Database's Collection.
        - `path_to_json_file` is wherever the json file you're trying to add to your Database is located.
            - Example: `c:/people-picker/database-files/`
        - `json_file_name` is whatever the name of the json file is that you're trying to add to your Database.

### 3. How to run locally
1. **Make sure mongoDB is running**

Bonus: You *may* create a local folder called `db/data` and run ...
  ```
  npm run mongo
  ```
To create a **local** database. Change package.json to customize the port number.

2. **Clone this repository**
    - Change into the `edp-people-picker` directory:
        ```
        $ cd edp-people-picker
        ```
    - Install node module dependencies:
        ```
        $ npm install
        ```
    - Change into the `edp-people-picker/people-app` directory and install node module dependencies for the React app:
        ```
        $ cd people-app
        $ npm install
        ```

3. **Set up / create the .env file**
    - Add these lines to a `.env` file you will create inside of the `people-picker` folder:
    ```
    PORT=3000;
    MONGO_DB_URL=mongodb://localhost:27017
    MONGO_DB=your_db_name
    MONGO_DB_COLLECTION=your_collection_name
    ```
    - Where:
        - `your_db_name` is whatever you've named your Database.
        - `your_collection_name` is whatever you've named your Database's Collection.

4. **Start the server**
    - Make sure you are back in the `edp-people-picker` directory:
    ```
    $ node --watch ./server.js
    ```
    Alternatively, you can use:
   ```
   $ npm run start
   ```
   - Open a new bash console, and cd into the `edp-people-picker/people-app` directory:
   ```
   $ npm run dev
   ```

### 4. Navigate to [http://localhost:5173/](http://localhost:5173/)
