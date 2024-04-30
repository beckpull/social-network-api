<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
</br>

<br />
<div align="center">
  <a href="https://github.com/beckpull/social-network-api">



<h1 align="center">Social Network API</h1>

  <p align="center">
This repository contains a basic REST API built with Node.js, Express.js, MongoDB, and Mongoose. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on a collection of resources stored in a MongoDB database.
    <br />
    <a href="https://github.com/beckpull/social-network-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://drive.google.com/file/d/1sLbUSHUm0UKJLUR87v5fbyDN_cBwLAJ2/view">View Demo</a>
    ·
    <a href="https://github.com/beckpull/social-network-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/beckpull/social-network-api/issues">Request Feature</a>
  </p>
</div>

</br>
</br>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
     <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

</br>
</br>

<!-- ABOUT THE PROJECT -->
## About The Project

This project is a RESTful API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It utilizes Express.js for routing, a MongoDB database, and the Mongoose ODM. The goal of this project is to build a robust API capable of handling large amounts of unstructured data typical of a social network. It provides endpoints for creating, reading, updating, and deleting users, thoughts, reactions, and managing friend lists.

**Key Features**:

- **Express.js**: Utilizes Express.js for handling routing and middleware, providing a flexible and scalable architecture for the API.
- **MongoDB with Mongoose**: Integrates MongoDB as the database backend, with Mongoose providing object modeling for Node.js, simplifying interactions with the database.
- **CRUD Operations**: Implements endpoints for performing CRUD operations on users, thoughts, reactions, and friend lists, allowing for seamless management of data.
- **Asynchronous Operations**: Handles database operations asynchronously to ensure optimal performance and scalability.
- **Error Handling**: Includes robust error handling to provide informative responses in case of invalid requests or server errors.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![NodeJS]
* ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=darkgreen)
* ![MongoDB](https://img.shields.io/badge/Mongoose•odm-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=darkgreen)
* ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
* ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

<p align="center"><i><strong>✨ Everything you need to know ✨</strong></i></p>

### Prerequisites

_This application has several dependencies, to install individually onto your machine, navigate to the directory this code lives in and type these commands into your Terminal / Git Bash:_
  ```sh
  npm i express
  npm i mongodb
  npm i mongoose
  npm i nodemon --save-dev
  ```

### Installation

_To get a local copy up and running follow these simple example steps:_

1. Clone the repo
   ```sh
   HTTP: git clone https://github.com/beckpull/social-network-api.git
   SSH: git clone git@github.com:beckpull/social-network-api.git
   ```
2. Install all necessary NPM packages
   ```sh
   npm i && npm run seed
   ```
3. Node `server.js`
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage 
</br></br>

<div align="center"> 
  <img src="./assets/qr.png" width="200" alt="qr code for demo video">
  </br>
  </br>
  <strong><i>Scan the QR code above or click <strong><a href="https://drive.google.com/file/d/1sLbUSHUm0UKJLUR87v5fbyDN_cBwLAJ2/view">HERE</a></strong> to view a demo video of the following API routes</strong>
    </br>
    </br>
    </br>
    <a href="https://github.com/beckpull/social-network-api">
    <p>/api/users</p>
      <img src="./assets/users1.png" width="300">
      <img src="./assets/users2.png" width="300">
      <img src="./assets/users3.png" width="523">
    </a>
    </br></br>
    <a href="https://github.com/beckpull/social-network-api">
      <p>/api/users/:userId/friends/:friendId</p>
      <img src="./assets/friendsPOST.png" width="605">
      <img src="./assets/friendsDELETE.png" width="647">
    </a>
    </br></br>
    <a href="https://github.com/beckpull/social-network-api">
      <p>/api/thoughts</p>
      <img src="./assets/thoughts.png" width="700">
    </a>
    <a href="https://github.com/beckpull/social-network-api">
      <p>/api/thoughts/:thoughtId/</p>
      <img src="./assets/singleThought.png" width="700">
      <img src="./assets/singleThought2.png" width="500">
    </a>
  </br></br>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

<img src="./assets/roadmap.png">
<div align="right">
  <p><i>This was my roadmap for this project</i></p>
</div>
</br>
<!-- GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

_If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!_

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Added ______ , NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

See the [open issues](https://github.com/beckpull/social-network-api/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

<p align='center'>Distributed under the MIT License. See `LICENSE.txt` for more information.</p>
<p align='center'>© Beck Feltman · All rights reserved.</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

**Rebecca Feltman** - [Email me](mailto:beckpull@icloud.com) - or check me out on [GitHub!](https://github.com/beckpull) 

>Repository Link: [https://github.com/beckpull/social-network-api](https://github.com/beckpull/social-network-api)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* This README file template was created by [@othneildrew](https://github.com/othneildrew) - the original can be found [here](https://github.com/othneildrew/Best-README-Template)


#### Disclaimer: 
> I utilized several articles from sources such as (but not limited to) Stack Overflow, W3Schools, and MDN Web Docs, as well as many classwork example code from the University of Denver **as references** for the javascript code attached. 
>
**All of the utilized information has been altered in order to fit this project. This repository contains _solely_ my own work.** 
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/beckpull/social-network-api.svg?style=for-the-badge
[contributors-url]: https://github.com/beckpull/social-network-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/beckpull/social-network-api.svg?style=for-the-badge
[forks-url]: https://github.com/beckpull/social-network-api/network/members
[stars-shield]: https://img.shields.io/github/stars/beckpull/social-network-api.svg?style=for-the-badge
[stars-url]: https://github.com/beckpull/social-network-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/beckpull/social-network-api.svg?style=for-the-badge
[issues-url]: https://github.com/beckpull/social-network-api/issues
[license-shield]: https://img.shields.io/github/license/beckpull/social-network-api.svg?style=for-the-badge
[license-url]: https://github.com/beckpull/social-network-api/blob/main/LICENSE
[product-screenshot]: images/screenshot.png
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Bulma]: https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white
[linkedin-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/beckpull/
[stackoverflow-shield]: https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white
[jest-shield]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[inquirer-shield]: https://img.shields.io/badge/dependency-inquirer-black
[inquirer-url]: https://www.npmjs.com/package/inquirer
