# Frontend Mentor - FAQ accordion solution

This is a solution to the [Article-Preview-Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon
- 
### Screenshot

![Screenshot_22-6-2025_162446_judithjude369 github io](https://github.com/user-attachments/assets/ba965fd1-0d7b-4ea8-8be3-d7fed6ee4495)

### Links

-  [Solution URL](https://github.com/JudithJude369/Article-Preview-Component)
-  [Live Site URL](https://judithjude369.github.io/Article-Preview-Component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned
This project really thought me alot, especially in the aspect of using vanilla javascript to build projects. I learnt how to remove and add classList and also perform some styles in javascript for the active class.


```css
.answers {
  display: none;
  max-height: 15rem;
  transition: max-height 0.3s ease-in-out;
}

```
```js
icon.addEventListener("click", () => {
  const isActive = shareContainer.classList.contains("active");

  if (!isActive) {
    shareContainer.classList.add("active");
    shareContainer.style.display = "flex";
  } else {
    shareContainer.classList.remove("active");
    shareContainer.style.display = "none";
  }
});
```
### Continued development
I hope to build more with vanilla Javascript, and hopefully improve my javascript knowledge and responsive design with CSS.

## Author

- Frontend Mentor - [@JudithJude369](https://www.frontendmentor.io/profile/JudithJude369)
- Twitter - [@JudithJ08832378](https://x.com/JudithJ08832378)

## Acknowledgments
I would like to really acknowledge freecodecamp for making learning easy and resources accessible for everyone.

