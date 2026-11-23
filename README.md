![Static Badge](https://img.shields.io/badge/Boolean_Tech_Academy-1565C0?style=for-the-badge)

# Exercise 31/50: Photo Blog

Building a dynamic, responsive photo blog by fetching images from an external API, generating a photo gallery, and implementing an interactive overlay with image selection and CSS hover effects.

## Project overview

| Repository | Project | Category | Main Focus | Exercise |
|:--|:--|:--|:--|:--|
| js-photo-blog | Photo Blog | Exercise | JavaScript, fetch API & DOM manipulation | 31/50 |

## Assignment

Create a dynamic photo blog using the provided design references and assets.

The project is divided into two parts: first, build the photo gallery and retrieve its content from an API; then, implement an interactive overlay to display individual photographs.

### Part 1 - Photo blog

#### Milestone 1: Static layout

Reproduce the proposed design using the supplied screenshots and assets.

Focus on HTML and CSS, initially displaying just one photograph. You can use any image you like.

#### Milestone 2: Explore the API

Using Postman, test a request to the following endpoint.

`https://lanciweb.github.io/demo/api/pictures/`

Study the API response carefully and understand the data it provides. Start thinking about how to use that information to populate the page.

#### Milestone 3: Dynamic photo gallery

Add a JavaScript file and make an AJAX request to the API.

Use the response data to dynamically generate and display a collection of photographs on the page.

#### Bonus challenge

Make the page responsive so that:

- On mobile and tablet screens, photographs progressively stack into a single column.
- The title adjusts its font size to fit smaller screens.

##### Notes

Use the following Google Fonts.

- **Headings:** `Edu TAS Beginner`, sans-serif.
- **Dates:** `Sometype Mono`, monospace.

Bootstrap is not required. You are free to choose how to manage the page styling.

### Part 2 - Photo overlay

Continue working on the same repository, `js-photo-blog`, by implementing an interactive overlay for the photo gallery.

#### Milestone 4: Create the overlay

Create an overlay that covers the entire page.

Inside it, place an image of your choice and a close button, both centered appropriately.

#### Milestone 5: Show and hide the Overlay

Initially hide the overlay using a CSS class that sets `display: none`.

Then implement the following interactions.

- Clicking any photograph makes the overlay visible.
- Clicking the close button hides the overlay again.

#### Milestone 6: Display the selected photograph

Complete the interaction logic: when a photograph is clicked, the overlay must display **that exact photograph**, rather than a generic image.

There are several ways to achieve this, so experiment and find the solution that works best.

#### Bonus challenge

Add smooth hover effects to the photographs.

- Zoom in.
- Rotate by 10 degrees.
- Increase the shadow intensity.
- Change the mouse cursor to a pointer to indicate that the photographs are clickable.

All effects should transition smoothly.

## Technologies

![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white) 
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css&logoColor=white) 
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## What I learned

- Reproducing a visual design using HTML and CSS.
- Working with external APIs and JSON responses.
- Testing API requests with Postman.
- Making asynchronous HTTP requests using JavaScript.
- Dynamically generating HTML elements from API data.
- Building responsive layouts.
- Creating full-screen overlays with CSS.
- Handling click events to show and hide elements.
- Dynamically updating an image source based on user interaction.
- Applying CSS transitions and transforms for interactive hover effects.

## Credits

Exercise assigned by **Boolean Tech Academy** as part of the Web Development course (Class 152, A.Y. 2025-2026).
