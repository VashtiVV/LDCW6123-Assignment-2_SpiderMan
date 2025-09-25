// Movie data for all ten live-action Spider-Man movies
const movies = [
    {
        id: 'spiderman1',
        title: 'Spider-Man (2002)',
        poster: '../images/spiderman1.jpg',
        backdrop: '../images/spiderman1-backdrop.jpg',
        synopsis: 'Average teenager Peter Parker is transformed into an extraordinary superhero after he is accidentally bitten by a radioactive spider. When his beloved uncle is savagely murdered during a robbery, young Peter vows to use his powers to avenge his death. Deeming himself "Spider-Man," he sets about ridding the streets of crime, bringing him into conflict with malevolent super-villain "Green Goblin.',
        cast: [
            { name: 'Tobey Maguire', photo: '../images/tobey.jpg' },
            { name: 'Kirsten Dunst', photo: '../images/kirsten.jpg' },
            { name: 'Willem Dafoe', photo: '../images/willem.jpg' }
        ],
        directors: ['Sam Raimi'],
        writers: ['David Koepp'],
        genre: 'Action, Adventure, Sci-Fi',
        length: '121 minutes',
        rating: 'PG-13',
        releaseDate: 'May 3, 2002'
    },
    {
        id: 'spiderman2',
        title: 'Spider-Man 2 (2004)',
        poster: '../images/spiderman2.jpg',
        backdrop: '../images/spiderman2-backdrop.jpg',
        synopsis: 'In Spider-Man 2,” Tobey Maguire returns as the mild-mannered Peter Parker, who is juggling the delicate balance of his dual life as college student and a superhuman crime fighter. Peters life becomes even more complicated when he confronts a new nemesis, the brilliant Otto Octavius who has been reincarnated as the maniacal and multi-tentacled Doc Ock. When Doc Ock kidnaps MJ, Spider-Man must swing back into action as the adventure reaches new heights of unprecedented excitement.',
        cast: [
            { name: 'Tobey Maguire', photo: '../images/tobey.jpg' },
            { name: 'Kirsten Dunst', photo: '../images/kirsten.jpg' },
            { name: 'Alfred Molina', photo: '../images/alfred.jpg' }
        ],
        directors: ['Sam Raimi'],
        writers: ['Alvin Sargent'],
        genre: 'Action, Adventure, Sci-Fi',
        length: '127 minutes',
        rating: 'PG-13',
        releaseDate: 'June 30, 2004'
    },
    {
        id: 'spiderman3',
        title: 'Spider-Man 3 (2007)',
        poster: '../images/spiderman3.jpg',
        backdrop: '../images/spiderman3-backdrop.jpg',
        synopsis: 'Peter Parker finally has the girl of his dreams, Mary Jane Watson, and New York City is in the throes of Spider-mania! But when a strange alien symbiote turns Spider-Mans suit black, his darkest demons come to light, changing Spider-Man inside as well as out. Spider-Man is in for the fight of his life against a lethal mix of villains—the deadly Sandman, Venom, and the New Goblin—as well as the enemy within himself.',
        cast: [
            { name: 'Tobey Maguire', photo: '../images/tobey.jpg' },
            { name: 'Kirsten Dunst', photo: '../images/kirsten.jpg' },
            { name: 'Thomas Haden Church', photo: '../images/thomas.jpg' },
            { name: 'Topher Grace', photo: '../images/topher.jpg' },
            { name: 'James Franco', photo: '../images/james.jpg' }
        ],
        directors: ['Sam Raimi'],
        writers: ['Sam Raimi', 'Ivan Raimi'],
        genre: 'Action, Adventure, Sci-Fi',
        length: '139 minutes',
        rating: 'PG-13',
        releaseDate: 'May 4, 2007'
    },
    {
        id: 'theamazingspiderman',
        title: 'The Amazing Spider-Man (2012)',
        poster: '../images/spiderman4.jpg',
        backdrop: '../images/theamazingspiderman-backdrop.jpg',
        synopsis: 'In this contemporary re-imagining of the superhero\'s origin, Peter Parker, a socially awkward and highly intelligent teenager, is searching for clues about his past and his parents\' disappearance. When he discovers a mysterious briefcase belonging to his father, it leads him to Oscorp and the lab of his father\'s former partner, Dr. Curt Connors. After a fateful encounter with a genetically-altered spider, Peter gains extraordinary abilities. He soon finds himself balancing the typical high school struggles with his new powers as Spider-Man, while also confronting the monstrous Lizard, an alter-ego of Dr. Connors, to save the city from a sinister plot connected to his family\'s past.',
        cast: [
            { name: 'Andrew Garfield', photo: '../images/andrewgarfield.jpg' },
            { name: 'Emma Stone', photo: '../images/emmastone.jpg' }
        ],
        directors: ['Marc Webb'],
        writers: ['James Vanderbilt', 'Alvin Sargent', 'Steve Kloves'],
        genre: 'Action, Adventure, Sci-Fi',
        length: '136 minutes',
        rating: 'PG-13',
        releaseDate: 'July 3, 2012'
    },
    {
        id: 'theamazingspiderman2',
        title: 'The Amazing Spider-Man 2 (2014)',
        poster: '../images/spiderman5.jpeg',
        backdrop: '../images/theamazingspiderman2-backdrop.jpg',
        synopsis: 'For Peter Parker, life is a delicate balance between his duties as Spider-Man and his personal life with Gwen Stacy. He feels a deep responsibility for keeping the people of New York safe from formidable villains who threaten the city. However, Peter\'s biggest challenge is yet to come. With the emergence of the powerful and unstable villain Electro, and the return of an old friend, Harry Osborn, who becomes the ruthless Green Goblin, Peter realizes that all of his enemies have a dangerous link to the Oscorp corporation. As the danger escalates, Spider-Man must confront an alliance of super-villains and the full extent of his parents\' secrets, leading to a heroic sacrifice that will change his life forever.',
        cast: [
            { name: 'Andrew Garfield', photo: '../images/andrewgarfield.jpg' },
            { name: 'Emma Stone', photo: '../images/emmastone.jpg' }
        ],
        directors: ['Marc Webb'],
        writers: ['Alex Kurtzman', 'Roberto Orci', 'Jeff Pinkner'],
        genre: 'Action, Adventure, Sci-Fi',
        length: '142 minutes',
        rating: 'PG-13',
        releaseDate: 'May 2, 2014'
    },
    {
        id: 'spidermanhomecoming',
        title: 'Spider-Man: Homecoming (2017)',
        poster: '../images/spiderman6.jpg',
        backdrop: '../images/spidermanhomecoming-backdrop.jpg',
        synopsis: 'A young Peter Parker/Spider-Man, who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging superhero. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May under the watchful eye of his new mentor Tony Stark. Peter tries to fall back into his normal daily routine, but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.',
        cast: [
            { name: 'Tom Holland', photo: '../images/tomholland.jpg' },
            { name: 'Michael Keaton', photo: '../images/michaelkeaton.jpg' }
        ],
        directors: ['Jon Watts'],
        writers: ['Jonathan Goldstein', 'John Francis Daley'],
        genre: 'Action, Adventure, Sci-Fi',
        length: '133 minutes',
        rating: 'PG-13',
        releaseDate: 'July 7, 2017'
    },
    {
        id: 'spidermanfarfromhome',
        title: 'Spider-Man: Far From Home (2019)',
        poster: '../images/spiderman7.jpg',
        backdrop: '../images/spidermanfarfromhome-backdrop.jpg',
        synopsis: 'Following the events of Avengers: Endgame, a grief-stricken Peter Parker goes on a European summer school trip, hoping to escape his responsibilities as Spider-Man. However, his vacation is cut short when Nick Fury appears, recruiting him to fight a new threat: the Elementals, who are causing chaos across the continent. Peter teams up with a mysterious new hero named Mysterio, a master of illusion from a parallel Earth. As Peter struggles to live up to the legacy of Tony Stark, he must decide who he can trust and confront a harsh reality about heroism and sacrifice, all while the world is watching.',
        cast: [
            { name: 'Tom Holland', photo: '../images/tomholland.jpg' },
            { name: 'Samuel L. Jackson', photo: '../images/samuelljackson.jpg' },
            { name: 'Zendaya', photo: '../images/zendaya.jpg' },
            { name: 'Cobie Smulders', photo: '../images/cobie.jpg' },
            { name: 'Jon Favreau', photo: '../images/jon.jpg' },
            { name: 'JB Smoove', photo: '../images/jb.jpg' },
            { name: 'Jacob Batalon', photo: '../images/jacob.jpg' },
            { name: 'Martin Starr', photo: '../images/martin.jpg' },
            { name: 'Marisa Tomei', photo: '../images/marisa.jpg' },
            { name: 'Jake Gyllenhaal', photo: '../images/jake.jpg' }
        ],
        directors: ['Jon Watts'],
        writers: ['Chris McKenna', 'Erik Sommers'],
        genre: 'Action, Adventure, Sci-Fi',
        length: '129 minutes',
        rating: 'PG-13',
        releaseDate: 'July 2, 2019'
    },
    {
        id: 'spidermannowayhome',
        title: 'Spider-Man: No Way Home (2021)',
        poster: '../images/spiderman8.jpg',
        backdrop: '../images/spidermannowayhome-backdrop.jpg',
        synopsis: 'For the first time in cinematic history, Spider-Man\'s identity is revealed, putting his personal life at risk. As his world is turned upside down, Peter Parker seeks help from Doctor Strange to make everyone forget that he is Spider-Man. However, the spell goes horribly wrong, tearing open the multiverse and pulling in dangerous super-villains from other realities, including Doc Ock, Green Goblin, and Electro. As Peter confronts these powerful foes, he must come to terms with the true meaning of being a hero, forcing him to make his most difficult decision yet and face a grim future on his own.',
        cast: [
            { name: 'Tom Holland', photo: '../images/tomholland.jpg' },
            { name: 'Zendaya', photo: '../images/zendaya.jpg' },
            { name: 'Jacob Batalon', photo: '../images/jacob.jpg' }
        ],
        directors: ['Jon Watts'],
        writers: ['Chris McKenna', 'Erik Sommers'],
        genre: 'Action, Adventure, Sci-Fi',
        length: '148 minutes',
        rating: 'PG-13',
        releaseDate: 'December 17, 2021'
    },
    {
        id: 'spidermanintothespiderverse',
        title: 'Spider-Man: Into the Spider-Verse (2018)',
        poster: '../images/spiderman9.jpg',
        backdrop: '../images/spidermanintothespiderverse-backdrop.jpg',
        synopsis: 'Miles Morales is a smart, artistic, and rebellious teenager from Brooklyn who is struggling to fit in at his new boarding school. His life changes forever after he is bitten by a radioactive spider and begins developing strange new abilities. During a late-night graffiti session with his uncle, he stumbles upon a secret super-collider built by the menacing crime lord Kingpin, who is trying to bring his deceased family back from a parallel universe. In the chaos that ensues, the original Spider-Man of Miles\' universe is killed, but not before passing on a crucial device to Miles. As a result of the super-collider\'s activation, a group of other Spider-People from different dimensions—including a jaded, older Peter B. Parker, a cool and confident Gwen Stacy, and others—are pulled into Miles\' world. Now, Miles must embrace his new powers, step up as the new Spider-Man, and lead this unlikely team of heroes to stop Kingpin from tearing the multiverse apart and find a way to get everyone back to their own realities.',
        cast: [
            { name: 'Shameik Moore', photo: '../images/shameikmoore.jpg' },
            { name: 'Jake Johnson', photo: '../images/jakejohnson.jpg' }
        ],
        directors: ['Bob Persichetti', 'Peter Ramsey', 'Rodney Rothman'],
        writers: ['Phil Lord', 'Rodney Rothman'],
        genre: 'Animation, Action, Adventure',
        length: '117 minutes',
        rating: 'PG',
        releaseDate: 'December 14, 2018'
    },
    {
        id: 'spidermanacrossthespiderverse',
        title: 'Spider-Man: Across the Spider-Verse (2023)',
        poster: '../images/spiderman10.jpg',
        backdrop: '../images/spidermanacrossthespiderverse-backdrop.jpg',
        synopsis: 'After reuniting with Gwen Stacy, Miles Morales is catapulted across the Multiverse, where he encounters a team of Spider-People tasked with protecting the very existence of the different universes. This team, known as the Spider Society, is led by the imposing Miguel O\'Hara, a.k.a. Spider-Man 2099. Miles soon finds himself at odds with Miguel and the other heroes over what they believe is the "correct" way to handle threats and protect the multiverse. As Miles is forced to confront a new, powerful villain known as The Spot, he realizes that the fate of his own universe, and the people he loves, may be at risk if he follows the Spider Society\'s strict rules. Pitted against the heroes he once admired, Miles must redefine what it truly means to be a hero and take a leap of faith to save his world and everything he holds dear.',
        cast: [
            { name: 'Shameik Moore', photo: '../images/shameikmoore.jpg' },
            { name: 'Hailee Steinfeld', photo: '../images/haileesteinfeld.jpg' }
        ],
        directors: ['Joaquim Dos Santos', 'Kemp Powers', 'Justin K. Thompson'],
        writers: ['Phil Lord', 'Christopher Miller', 'David Callaham'],
        genre: 'Animation, Action, Adventure',
        length: '140 minutes',
        rating: 'PG',
        releaseDate: 'June 2, 2023'
    }
];

//utility to create element with classes & attributes
function createElement(tag, classNames, attributes = {}) {
    const el = document.createElement(tag);
    if (classNames) el.className = classNames;
    for (const attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }
    return el;
}

//global references
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsSection = document.getElementById('results-section');
const loadingIndicator = document.getElementById('loading-indicator');
const sideNavLinks = document.querySelectorAll('#side-nav li');
const mainContent = document.getElementById('main-content');
const searchSpinner = document.getElementById('search-spinner');

//GSAP loading rotation tween reference
let loadingTween = null;

function showLoading() {
    searchSpinner.style.display = 'inline-block';
    loadingTween = gsap.to(searchSpinner, {
        rotation: 360,
        duration: 1,
        ease: 'linear',
        repeat: -1,
        transformOrigin: "50% 50%"
    });
}

function hideLoading() {
    if (loadingTween) loadingTween.kill();
    searchSpinner.style.display = 'none';
}

// Show movie list cards
function renderMovieList(movieArray) {
    // Reset the background to the main one when viewing the movie list
    const mainContainer = document.getElementById('container');
    mainContainer.style.backgroundImage = 'url(\'../images/background1.jpg\')';
    mainContainer.style.backgroundSize = 'cover';
    mainContainer.style.backgroundPosition = 'center top';
    mainContainer.style.backgroundRepeat = 'no-repeat';

    // Ensure the overlay is removed
    mainContent.style.backgroundColor = 'transparent';

    resultsSection.innerHTML = '';
    if (movieArray.length === 0) {
        showNoResults();
        return;
    }
    const listContainer = createElement('div', 'movie-list');
    movieArray.forEach((movie) => {
        const card = createElement('div', 'movie-card');
        // Accessibility
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-pressed', 'false');

        // FIXED: The template literal for the alt attribute was incorrect.
        // It should use backticks (``) and not be part of the `createElement` arguments in this way.
        const poster = createElement('img', 'movie-poster', {
            src: movie.poster,
            alt: `${movie.title} poster` // Corrected template literal
        });
        const title = createElement('div', 'movie-title');
        title.textContent = movie.title;

        card.appendChild(poster);
        card.appendChild(title);

        card.addEventListener('click', () => {
            location.hash = `#${movie.id}`;
            renderSynopsisPage(movie.id);
        });

        card.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                card.click();
            }
        });

        listContainer.appendChild(card);
    });
    resultsSection.appendChild(listContainer);
}

//no results found with scroll suggestion to show all movies
function showNoResults() {
    resultsSection.innerHTML = '';
    const noResultDiv = createElement('div', 'no-results');
    noResultDiv.textContent = 'No search results';
    resultsSection.appendChild(noResultDiv);

    //show full movie list when user scrolls to bottom
    function onScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
            renderMovieList(movies);
            window.removeEventListener('scroll', onScroll);
        }
    }
    window.addEventListener('scroll', onScroll);
}

//Render synopsis page for a movieeeeee
function renderSynopsisPage(movieId) {
    const movie = movies.find((m) => m.id === movieId);
    if (!movie) {
        resultsSection.innerHTML = 'Movie information not available.';
        return;
    }

    //Set the backdrop to the default image, instead of the movie's specific one
    const mainContainer = document.getElementById('container');
    mainContainer.style.backgroundImage = 'url(\'../images/background1.jpg\')';
    mainContainer.style.backgroundSize = 'cover';
    mainContainer.style.backgroundPosition = 'center';
    mainContainer.style.backgroundRepeat = 'no-repeat';
    mainContent.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    mainContent.style.transition = 'background-color 0.8s ease-in-out';

    resultsSection.innerHTML = '';

    //create the new grid layout
    const synopsisGrid = createElement('div', 'synopsis-grid');

    //movie Poster
    const poster = createElement('img', 'synopsis-poster', {
        src: movie.poster,
        alt: `${movie.title} poster`
    });

    //Movie Title
    const title = createElement('h1', 'synopsis-title');
    title.textContent = movie.title;

    //Synopsis Section
    const synopsisSection = createElement('div', 'synopsis-item synopsis-section');
    synopsisSection.innerHTML = `
        <h2>Synopsis</h2>
        <p>${movie.synopsis}</p>
    `;

    //Function to create a list of clickable links
    const createClickableList = (names) => {
        return names.map(name => {
            const encodedName = encodeURIComponent(name);
            return `<a href="https://www.google.com/search?q=${encodedName}" target="_blank" class="search-link">${name}</a>`;
        }).join(', ');
    };

    // Create the container for the details and crew
    const detailsAndCrew = createElement('div', 'synopsis-item details-and-crew');
    detailsAndCrew.innerHTML = `
        <h2>Cast</h2>
        <p>${createClickableList(movie.cast.map(actor => actor.name))}</p>
        <h2>Directors</h2>
        <p>${createClickableList(movie.directors)}</p>
        <h2>Writers</h2>
        <p>${createClickableList(movie.writers)}</p>
        <h2>Genre</h2>
        <p>${movie.genre}</p>
        <h2>Movie Length</h2>
        <p>${movie.length}</p>
        <h2>PG Rating</h2>
        <p>${movie.rating}</p>
        <h2>Release Date</h2>
        <p>${movie.releaseDate}</p>
    `;

    // Append elements to the grid in the new order
    synopsisGrid.appendChild(poster);
    synopsisGrid.appendChild(detailsAndCrew);
    synopsisGrid.appendChild(title);
    synopsisGrid.appendChild(synopsisSection);

    resultsSection.appendChild(synopsisGrid);

}

//render home page content
function renderHome() {
    //hide the coming soon content and show the main content sections
    document.getElementById('coming-soon-section').style.display = 'none';
    document.getElementById('search-bar-section').style.display = 'flex';
    document.getElementById('results-section').style.display = 'block';
    const mainContainer = document.getElementById('container');
    mainContainer.style.backgroundImage = 'url(\'../images/background1.jpg\')';
    mainContainer.style.backgroundSize = 'cover';
    mainContainer.style.backgroundPosition = 'center top';
    mainContainer.style.backgroundRepeat = 'no-repeat';

    //reset main content background
    mainContent.style.backgroundColor = 'transparent';

    resultsSection.innerHTML = '';

    const welcome = createElement('div', 'home-message');
    welcome.style.textAlign = 'center';
    welcome.style.color = 'var(--light-gray)';
    welcome.innerHTML = `
        Use the search bar above to find Spider-Man movies and their details.<br />
        Or use the navigation panel to browse movies or discover what's coming soon.
    `;
    resultsSection.appendChild(welcome);
}

//render coming soon placeholder
function renderComingSoon() {
    //hide the other content sections and show the coming soon content
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('search-bar-section').style.display = 'none';
    document.getElementById('coming-soon-section').style.display = 'block';

    //reset the background to the main one
    const mainContainer = document.getElementById('container');
    mainContainer.style.backgroundImage = 'url(\'../images/background1.jpg\')';
    mainContainer.style.backgroundSize = 'cover';
    mainContainer.style.backgroundPosition = 'center top';
    mainContainer.style.backgroundRepeat = 'no-repeat';

    //reset main content background
    mainContent.style.backgroundColor = 'transparent';

    gsap.from("#animated-title", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });
}

//list all Spider-Man movies
function renderListAll() {
    // Hide the coming soon content and show the main content sections
    document.getElementById('coming-soon-section').style.display = 'none';
    document.getElementById('search-bar-section').style.display = 'flex';
    document.getElementById('results-section').style.display = 'block';

    renderMovieList(movies);
}

//hash change handler for direct movie links
function handleHashChange() {
    const hash = location.hash.substring(1);
    if (!hash) {
        renderHome ();
    }else{
        const movie = movies.find((m) => m.id === hash);
        if (movie) {
            renderSynopsisPage(hash);
        } else {
            renderHome();
        }
    }
}

window.addEventListener('hashchange', handleHashChange);
window.addEventListener('load', handleHashChange);

//search function with loading spinner
function normalize(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ''); 
}

function performSearch() {
    const query = searchInput.value.trim();
    if (!query) {
        renderHome();
        return;
    }

    showLoading();

    setTimeout(() => {
        hideLoading();
        const normalizedQuery = normalize(query);

        const results = movies.filter((m) =>
            normalize(m.title).includes(normalizedQuery)
        );

        if (results.length > 0) {
            renderMovieList(results);
        } else {
            showNoResults();
        }
        searchInput.value = '';
    }, 1200);
}

// Event listeners for search button and Enter key
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Sidebar navigation event listeners
sideNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        sideNavLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');

        const page = link.getAttribute('data-page');
        if (page === 'home') {
            renderHome();
            location.hash = '';
        } else if (page === 'coming-soon') {
            renderComingSoon();
        } else if (page === 'list-all') {
            renderListAll();
        }
    });
});
