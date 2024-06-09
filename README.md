<a name="readme-top"></a>

<h3 align="center">Study.io</h3>

  <p align="center">
    Fullstack CRUD app using Spring Boot, MongoDB, and React with typescript
    <br />
    <a href="https://github.com/EvanPolk/study.io/issues">Report Bug</a>
    ·
    <a href="https://github.com/EvanPolk/study.io/issues">Request Feature</a>
  </p>
</div>



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



<!-- ABOUT THE PROJECT -->
## About The Project
  Study.io is a quizlet-like flashcard app I started making during my finals week. It uses MongoDB integrated with a Spring boot REST API to allow for persistance. On the frontend, I used react with typescript to allow the user to easily change different aspects of their flashcard sets. I wanted to challenge myself with this project, so the idea of modeling more complex relational databases within a spring ORM seemed like a good place to start. Adding frontend capabilities allowed me to better understand the interactions between both sides of a websites architecture.

### Built With

* Spring Boot
* Spring Web
* Spring Data MongoDB
* React with typescript
* Tailwind CSS
* Docker

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* Navigate to the root folder where the docker-compose.yml file is contained
  ```sh
  docker-compose up -d
  ```
* Once the containers are up and running navigate to ./study-io-frontend
  ```sh
  npm run dev
  ```
* After this the website's frontend will be hosted locally on your machine, just navigate to the url given which is typically http://localhost:5173/

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Get functionality for all flashcard sets is given at localhost:8080/api/v1/flashcardSets and returns:
```sh
[
  {
    "id": "664e2134c727d925790397ed",
    "setName": "Example",
    "flashcards": [
      {
        "id": "664e2134c727d925790397ea",
        "front": "Front1",
        "back": "Back1"
      },
      {
        "id": "664e2134c727d925790397eb",
        "front": "Front2",
        "back": "Back2"
      },
      {
        "id": "664e2134c727d925790397ec",
        "front": "Front3",
        "back": "Back3"
      }
    ]
  },
  {
    "id": "664e2134c727d925790397ee",
    "setName": "Example 2",
    "flashcards": [
      {
        "id": "664e2134c727d925790397ea",
        "front": "Front1",
        "back": "Back1"
      },
      {
        "id": "664e2134c727d925790397eb",
        "front": "Front2",
        "back": "Back2"
      },
      {
        "id": "664e2134c727d925790397ec",
        "front": "Front3",
        "back": "Back3"
      }
    ]
  }
]
```

<br>

GET functionality for a flashcard Set by id is given at localhost:8080/api/v1/flashcardSets/{flashcardSetId}
```sh
{
  "id": "664e2134c727d925790397ed",
  "setName": "Example",
  "flashcards": [
    {
      "id": "664e2134c727d925790397ea",
      "front": "Front1",
      "back": "Back1"
    },
    {
      "id": "664e2134c727d925790397eb",
      "front": "Front2",
      "back": "Back2"
    },
    {
      "id": "664e2134c727d925790397ec",
      "front": "Front3",
      "back": "Back3"
    }
  ]
}
```

<br>

GET functionality for all flashcards is given at localhost:8080/api/v1/flashcards
```sh
[
  {
    "id": "664e2134c727d925790397ea",
    "front": "Front1",
    "back": "Back1"
  },
  {
    "id": "664e2134c727d925790397eb",
    "front": "Front2",
    "back": "Back2"
  },
  {
    "id": "664e2134c727d925790397ec",
    "front": "Front3",
    "back": "Back3"
  }
]
```

<br>

GET functionality for a flashcard is given at localhost:8080/api/v1/flashcards/{flashcardId}
```sh
{
  "id": "664e2134c727d925790397ea",
  "front": "Front1",
  "back": "Back1"
}
```

<br>

POST functionality adds a flashcard set via:
```sh
POST /api/v1/flashcardSets
Accept: application/json
Content-Type: application/json

{
    "setName": "Example 3"
}
```
* ID is generated automatically

<br>

POST functionality adds a flashcard to a flashcard set via:
```sh
POST /api/v1/flashcardSets/{flashcardSetId}
Accept: application/json
Content-Type: application/json

{
    "front": "Current President of the United States",
    "back": "Joseph Biden"
}
```
* ID is generated automatically

<br>

DELETE functionality is provided through the endpoint /api/v1/flashcardSets/{flashcardSetId}
```sh
DELETE /api/v1/flashcardSets/664e2134c727d925790397ed
```
* If the ID does not match a flashcardSet stored in the database a http: 500 error will be returned

<br>

DELETE functionality is provided through the endpoint /api/v1/flashcardSets/{flashcardSetId}/{flashcardId}
```sh
DELETE /api/v1/flashcardSets/664e2134c727d925790397ed/664e2134c727d925790397ea
```
* If the ID does not match a flashcardSet stored in the database a http: 500 error will be returned, likewise with flashcardId

<br>

PUT functionality is provided through the endpoint /api/v1/flashcardSets/{flashcardSetId}
```sh
PUT /api/v1/flashcardSets/664e2134c727d925790397ed?setName=new+name
```
* Every paramter shown is optional within the PUT request
* The names cannot be blank, or the same as the currently stored name, otherwise the specific value is not altered

<br>

PUT functionality is provided through the endpoint /api/v1/flashcards/{flashcardId}
```sh
PUT /api/v1/flashcards/664e2134c727d925790397ea?front=new+front&back=new+back
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Greater functionality with a spaced repitition algorithm
- [ ] Front end re-styling
    - [X] Switch to tailwind with more customized styling
    - [ ] Animations to allow hidden front or back card to allow for a smoother user experience

See the [open issues](https://github.com/EvanPolk/study.io/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Evan Polk - evanpolk2@gmail.com - epolk@luc.edu

Project Link: https://github.com/EvanPolk/study.io

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* README inspired by:
  * https://github.com/othneildrew/Best-README-Template

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

