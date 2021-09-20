# e-Commerce Back-End
<a href='https://opensource.org/licenses/MIT'>[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</a>
  
## Table of Contents
[Description](#Description)</br>
[Installation](#Installation)</br>
[Usage](#Usage)</br>
[License](#License)</br>
[Tests](#Tests)</br>
[Questions](#Questions)

## Description
The purpose of this project is to serve as the back-end for a company's software that would like to store info about their Products, along with their Categories, and Tags. This program does not have a front-end, but it can be tested using a REST API Client such as Insomnia.

## Installation
 - **Clone**: The first step is for the user to clone this repo to their local environment. 
 - **Install Packages**: Once the program is cloned, the user must open the terminal on the root of the project and install all packages. The user should first run "*npm i*" to get the node_modules folder, and then they may run "*npm install dotenv express mysql2 sequelize*" to get all required packages at once.
 - **.env**: Finally, the user needs to create a .env file containing: 
   - DB_NAME='ecommerce_db' 
   - DB_USER='root' 
   - DB_PASS='*user-password*'. 
   
Once all of that is taken care of, the user will be good to go!

## Usage
The application can be started by running the command "npm start" on the command line.Then, it can be tested using a REST API Client such as insomnia.</br>

video here

## Tests
#### *GET all Categories:*

</br><img width="625" alt="screenshot from GET categories in insomnia" src="./assets/images/get-all-categories.png "></img>

#### *GET tag by ID:*

</br><img width="625" alt="screenshot from GET tag by ID in insomnia" src="./assets/images/get-tag-by-id.png "></img>

#### *POST product:*

</br><img width="625" alt="screenshot from POST product in insomnia" src="./assets/images/post-product.png "></img>

#### *PUT product:*

</br><img width="625" alt="screenshot from put-product in insomnia" src="./assets/images/put-product.png "></img>

#### *DELETE Category:*

</br><img width="625" alt="screenshot from DELETE category by ID in insomnia" src="./assets/images/delete-category.png "></img>

## License
This application is covered under the <a href='https://opensource.org/licenses/MIT'>MIT License</a>

## Questions
<a href='https://github.com/Padredilg'>Padredilg</a></br>
If you have any questions, you may email at padredilg@knights.ucf.edu

