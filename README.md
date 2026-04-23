# Movie Search App

A web app that lets you search for movies by title and view details like poster, year, rating, and plot.


## What it does


- Search bar that queries a movie API as you type or on submit.
- Displays results as a grid of movie cards with poster images.
- Click a movie to see full details (plot, cast, ratings).


## Why I built it

I wanted a project where I had to handle user input, make API requests based on that input, and display results dynamically. It's a step up from apps that just show static data — the content on screen depends entirely on what the user types.

## What I learned


- Handling form input and firing API requests on submit (or with debouncing while typing).
- Working with a real public API (OMDb or TMDB — fill in whichever).
- Parsing JSON responses and handling missing fields gracefully (not every movie has a poster).
- Showing loading and error states so the UI isn't confusing while data is fetching.
- Keeping API keys out of committed code.

## Tech used

- JavaScript (53%)
- CSS (43%)
- HTML (4%)
- Node.js / npm
- Movie API: [ TMDB  ]

## Running it locally

```bash
git clone https://github.com/Developer-Coder1/Movie-Search-App.git
cd Movie-Search-App
npm install
# Add your API key to a .env file
npm start
```

## Project structure

```
├── movie-search-app/     # main app code
├── package.json          # dependencies
└── package-lock.json
```

## Honest disclosure

I built this with significant AI assistance (Claude) — the design and most of the code were generated with AI help, and I directed the project and made decisions along the way. I'm being upfront about this because honesty matters more than claiming more than I did. As I get more experienced, I'm aiming to write more of each project myself and use AI more narrowly (for specific problems I'm stuck on).

## What I'd do next

- Add a "favourites" list stored in localStorage.
- Filter by year, genre, or rating.
- Add pagination for long result sets.
- Make the whole thing responsive for mobile.
- Rebuild the search with debouncing so it queries as you type without spamming the API.

## About me

I'm 14, based in the UK, working toward a Level 6 software engineering apprenticeship after sixth form.

<img width="1887" height="1031" alt="image" src="https://github.com/user-attachments/assets/fb14a5c7-02b6-4e4c-8ec2-819113a31764" />
<img width="1913" height="1043" alt="image" src="https://github.com/user-attachments/assets/c59aa9a7-cf1a-4966-a2cc-e67bf4cfb01b" />
