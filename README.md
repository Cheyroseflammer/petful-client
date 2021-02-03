# Petful/Fifo

Adoption site with a first come first serve basis using javascript DSA's.

## Application Link

---

Live Front-End: https://petful-seven-orcin.vercel.app/

Server Back-End: https://floating-reaches-91544.herokuapp.com/

### User Stories

---

#### User Story #1

As a pet lover, I want to visit the FIFO pet adoption site
so that I can get more information about the adoption process.

Acceptance criteria

When I go to the FIFO adoption agency site

- I see a description of the adoption process.
- I see a meaningful picture related to the description.
- I see a button for starting the adoption process.

#### User Story #2

As a user interested in adopting pets, I want to get more information
on each pet so that I can make an informed decision about who to adopt.

Acceptance criteria

When I visit the adoption page, I can see:

- An image of the pet;
- A physical description of the pet;
- The pet's name, gender, age, and breed.
- A story of the pet's journey to the shelter

#### User Story #3

As a user interested in adopting pets,
I want to see the pets that I can adopt.

Acceptance criteria

When I visit the adoption page, I can only see the
pet that is next in line to be adopted.

#### User Story #4

As a user interested in adopting pets, I want to get in line to adopt.

Acceptance criteria

When I visit the adoption page:

- I can see a list of other people currently in line.
- I can submit my name and be added to the end of the line.
- When I am not at the beginning of the line, I cannot see an option to adopt a pet.
- For demo purposes: Once I join the line, I can see other pets being adopted until I am at the front of the line.
  - Every five seconds, the user at the front of the line should be removed from the line and one of the pets up for adoption should disappear.
  - When I am at the front of the line, a new user should be added to the line behind me every five seconds until there are a total of five users in line.

#### User Story #5

As a user interested in adopting pets, I want to adopt a pet.

Acceptance criteria

When I am at the front of the line:

- I can see an option to adopt a pet.
- When I choose to adopt a pet:
  - I see a confirmation that I have adopted the pet.
  - I see my name removed from the line.
  - I see the pet I adopted is removed from view and replaced with another pet.

## Technology Used

---

Front-End: HTML5, CSS3, JavaScript, & React

Back-End: : Node.js, Express.js, Mocha, Chai, RESTful API, Postgres

## Running the Application Locally

Using your command line to navigate to the the projects folder, run the following in your terminal (intergrated or not)

##### Local React scripts

- To install the react project: npm install
- To run react (on port 3000): npm start
- To run tests: npm run test

## Screen Shots

### Home Page

![home-page](screenshots/home.png)

### Adopt Cat

![adopt-cat](screenshots/catAdopt.png)

### Adopt Dog

![adopt-dog](screenshots/dogAdopt.png)

### Congrats on your new pet

![new-pet-congrats](screenshots/congrats.png)
