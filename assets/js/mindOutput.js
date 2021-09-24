//Declaring search variables here to work with event listener below
var musicClick = $("#musicClick");
var mindClick = $("#mindClick");
var restartClick = $("#restartClick");
const container1 = $(".container1");


//This function will give us the artist name. 
function getArtistName() {
  artistList = ["10cc", "2Pac", "50 Cent", "A Thousand Horses", "ABBA", "ABC", "Aerosmith", "Agnetha Fältskog", "Alan Jackson", "Albert King", "Alice Cooper", "Alison Krauss", "The All-American Rejects", "The Allman Brothers Band", "Amy Winehouse", "Andre Rieu", "Andrea Bocelli", "Andrew W.K.", "Anthrax", "Antonio Carlos Jobim", "Apache Indian", "Arcade Fire", "Ariana Grande", "Arrested Development", "Ashley Campbell", "Astrud Gilberto", "Aswad", "Atlanta Rhythm Section", "Audioslave", "B.B. King", "Badfinger", "The Band", "Barclay James Harvest", "Barry White", "The Beach Boys", "Beastie Boys", "The Beatles", "Beck", "Bee Gees", "Belinda Carlisle", "Ben Harper", "Ben Howard", "Benny Andersson", "Big Country", "Big Star", "Bill Evans", "Billie Holiday", "Billy Currington", "Billy Fury", "Billy Preston", "Björk", "Black Eyed Peas", "Black Sabbath", "Black Uhuru", "Blind Faith", "Blink-182", "Blondie", "Blue Cheer", "Bo Diddley", "Bob Dylan", "Bob Marley", "Bon Jovi", "Bonnie Raitt", "Booker T", "Boyz II Men", "Brantley Gilbert", "Brenda Holloway", "Brian Eno", "The Brothers Johnson", "Bruce Springsteen", "Bryan Adams", "Bryan Ferry", "Buddy Guy", "Buddy Holly", "Burning Spear", "Burt Bacharach", "The Cadillac Three", "Camel", "Canned Heat", "Captain Beefheart", "Caravan", "Carpenters", "Cat Stevens", "Charlie Parker", "Cheap Trick", "The Chemical Brothers", "Cher", "Chris Cornell", "Chris Stapleton", "Chuck Berry", "Cinderella", "The Clash", "Climax Blues Band", "Coleman Hawkins", "Commodores", "Common", "The Common Linnets", "Corinne Bailey Rae", "Count Basie", "Counting Crows", "Craig Armstrong", "The Cranberries", "Cream", "Creedence Clearwater Revival", "Crowded House", "Culture Club", "The Cure", "Cutting Crew", "D’Angelo", "DMX", "The Damned", "Daniel Hope", "Danny Wilson & Gary Clark", "David Bowie", "Dean Martin", "Debarge", "Deep Purple", "Def Leppard", "Demi Lovato", "Demis Roussos", "Derek And The Dominos", "Desmond Dekker", "Diana Krall", "Diana Ross", "Diana Ross & The Supremes", "Dierks Bentley", "Dinah Washington", "Dio", "Dire Straits", "Disclosure", "Don Henley", "Donna Summer", "The Doors", "Dr Dre", "Drake", "Duke Ellington", "Dusty Springfield", "EELS", "EPMD", "Eagles", "Eagles Of Death Metal", "Eazy-E", "Eddie Cochran", "Elbow", "Ella Fitzgerald", "Elliott Smith", "Elton John", "Elvis Costello", "Elvis Presley", "Emeli Sandé", "Eminem", "Enigma", "Eric B. & Rakim", "Eric Church", "Eric Clapton", "Etta James", "Evanescence", "Eve", "Extreme", "Fairport Convention", "Fats Domino", "Faust", "Fergie", "Florence + The Machine", "The Flying Burrito Brothers", "Four Tops", "Foxy Brown", "Frank Sinatra", "Frank Zappa", "Frankie Goes To Hollywood", "Freddie Mercury", "Free", "Frida Lyngstad", "The Game", "Gang Starr", "Gary Moore", "Gene Krupa", "Gene Vincent", "Genesis", "Gentle Giant", "George Benson", "George Harrison", "George Michael", "George Strait", "George Thorogood", "Georgie Fame", "Ghostface Killah", "Ginger Baker", "Glen Campbell", "Gong", "Grace Jones", "Graham Parker", "Grand Funk Railroad", "Gregory Isaacs", "Gregory Porter", "Guns N’ Roses", "Gwen Stefani", "Hank Williams", "Heart", "Heaven 17", "Helmet", "Herbie Hancock", "Hoobastank", "Howlin Wolf", "Hoyt Axton", "Huey Lewis & The News", "The Human League", "Humble Pie", "INXS", "Ice Cube", "Iggy Pop", "Imagine Dragons", "Iron Maiden", "Isaac Hayes", "The Isley Brothers", "It Bites", "J.J. Cale", "Jack Bruce", "Jack Johnson", "Jackson 5", "Jacques Brel", "Jadakiss", "The Jam", "James", "James Bay", "James Blake", "James Brown", "James Morrison", "James Taylor", "Jane’s Addiction", "Janet Jackson", "Japan & David Sylvian", "Jay-Z", "Jeezy", "Jeru the Damaja", "Jessie J", "Jimi Hendrix", "Jimmy Buffett", "Jimmy Cliff", "Jimmy Eat World", "Jimmy Ruffin", "Jimmy Smith", "Joan Armatrading", "Joan Baez", "Joe Cocker", "Joe Jackson", "Joe Sample", "Joe Walsh / The James Gang", "John Coltrane", "John Fogerty", "John Lee Hooker", "John Lennon", "John Martyn", "John Mayall", "John Mellencamp", "John Williams", "Johnny Cash", "Johnny Gill", "Joni Mitchell", "Jonny Lang", "Joss Stone", "Jr. Walker & The All Stars", "Julie London", "Jurassic 5", "Justin Bieber", "Kacey Musgraves", "Kaiser Chiefs", "Kanye West", "Kate Bush", "Katy Perry", "Keane", "Keith Jarrett", "Keith Richards", "Keith Urban", "Kendrick Lamar", "Kenny Burrell", "Kevin Coyne", "The Killers", "Killing Joke", "Kim Carnes", "The Kinks", "Kip Moore", "Kiss", "The Kooks", "Kool And The Gang", "LL Cool J", "Lady A", "Lady GaGa", "Lana Del Rey", "Laura Marling", "Led Zeppelin", "Lee ‘Scratch’ Perry", "Lenny Kravitz", "Leon Russell", "Lester Young", "Level 42", "The Libertines", "Lightnin’ Hopkins", "Lil Wayne", "Linton Kwesi Johnson", "Lionel Richie", "Little Big Town", "Little Richard", "Lloyd Cole", "Lorde", "Louis Armstrong", "Lucinda Williams", "Ludacris", "Ludovico Einaudi", "Luke Bryan", "Lulu", "The Lumineers", "Lynyrd Skynyrd", "Maddie & Tae", "Madonna", "Magazine", "The Mamas & The Papas", "Marc Almond", "Marilyn Manson", "Mark Knopfler", "Maroon 5", "Martha Reeves & The Vandellas", "The Marvelettes", "Marvin Gaye", "Mary Hopkin", "Mary J. Blige", "Mary Wells", "Massive Attack", "Master P", "The Mavericks", "Maxi Priest", "McCoy Tyner", "Meat Loaf", "Megadeth", "Melody Gardot", "Metallica", "Method Man", "Michael Jackson", "Michael Nyman", "Mike & the Mechanics", "Mike Oldfield", "Miles Davis", "Minnie Riperton", "The Moody Blues", "Morrissey", "Motörhead", "Muddy Waters", "Mumford & Sons", "Mötley Crüe", "N.W.A", "Nanci Griffith", "Nas", "Nat King Cole", "Nazareth", "Ne-Yo", "Neil Diamond", "Neil Young", "Nelly", "Neneh Cherry", "New Edition", "New York Dolls", "Nick Drake", "Nicki Minaj", "Nik Kershaw", "Nina Simone", "Nine Inch Nails", "Nirvana", "The Nitty Gritty Dirt Band", "No Doubt", "Norah Jones", "OMD", "Ocean Colour Scene", "OneRepublic", "Onyx", "Oscar Peterson", "Otis Redding", "The Ozark Mountain Daredevils", "PJ Harvey", "Papa Roach", "Pat Benatar", "Pato Banton", "Patsy Cline", "Patty Griffin", "Paul McCartney and Wings", "Paul Simon", "Paul Weller", "Peaches & Herb", "Pearl Jam", "Peggy Lee", "Pete Townshend", "Peter Frampton", "Phil Collins", "Phil Manzanera", "PiL (Public Image Ltd)", "Pink Floyd", "Placebo", "Poco", "Poison", "The Police", "Portishead", "Prince", "Public Enemy", "Pulp", "Queen", "Queens Of The Stone Age", "Quicksilver Messenger Service", "Quincy Jones", "R.E.M.", "Rainbow", "Rammstein", "Ray Charles", "Reba McEntire", "Red Hot Chili Peppers", "Redman", "Richie Havens", "Rick James", "Rick Nelson", "Rick Ross", "Rick Wakeman", "The Righteous Brothers", "Rihanna", "Ringo Starr", "Rise Against", "Rob Zombie", "Robbie Williams", "Robert Cray", "Robert Glasper", "Robert Palmer", "Robert Plant", "Rod Stewart", "Roger Daltrey", "The Rolling Stones", "Ronnie Lane", "Ronnie Wood", "Rory Gallagher", "The Roots", "Rosanne Cash", "Roxy Music", "Roy Orbison", "Ruff Ryders", "Rufus Wainwright", "Rush", "The Ruts", "Saint Etienne", "Salt-n-Pepa", "Sam Cooke", "Sam Hunt", "Sam Smith", "Sammy Hagar", "Sandy Denny", "Schiller", "Scorpions", "Scott Walker", "Secret Garden", "Sensational Alex Harvey Band", "Serge Gainsbourg", "Sergio Mendes", "Sex Pistols", "Shaggy", "Sham 69", "Shania Twain", "Sheryl Crow", "Simple Minds", "Siouxsie & The Banshees", "Slayer", "Slick Rick", "Sly & Robbie", "Small Faces", "The Smashing Pumpkins", "Smokey Robinson", "Smokey Robinson & The Miracles", "Snoop Dogg", "Snow Patrol", "Soft Cell", "Sonic Youth", "Sonny Boy Williamson", "Soul II Soul", "Soundgarden", "Spandau Ballet", "Sparks", "Spice Girls", "Stan Getz", "The Statler Brothers", "Status Quo", "Steel Pulse", "Steely Dan", "Steppenwolf", "Stereo MCs", "Stereophonics", "Steve Earle", "Steve Hackett", "Steve Hillage", "Steve Miller Band", "Steve Winwood", "Steven Tyler", "Stevie Wonder", "Sting", "The Style Council", "Styx", "Sublime", "Sum 41", "Supertramp", "Suzanne Vega", "T-Bone Walker", "T. Rex", "Take That", "Tammi Terrell", "Tangerine Dream", "Taylor Swift", "Tears For Fears", "Teena Marie", "Temple Of The Dog", "The Temptations", "Tesla", "Texas", "Thelma Houston", "Thelonious Monk", "Thin Lizzy", "Thomas Rhett", "Three Dog Night", "Tim McGraw", "Toby Keith", "Tom Jones", "Tom Petty", "Tom Waits", "Toots & The Maytals", "Tori Amos", "Traffic", "Traveling Wilburys", "The Tubes", "U2", "UB40", "Ultravox", "Underworld", "Van der Graaf Generator", "Vangelis", "The Velvet Underground", "The Verve", "Vince Gill", "The Walker Brothers", "Weezer", "Wes Montgomery", "Wet Wet Wet", "will.i.am", "Whitesnake", "The Who", "William Orbit", "Willie Nelson", "Wilson Pickett", "Wishbone Ash", "Wolfmother", "Yeah Yeah Yeahs", "Yello", "Yes", "Zucchero"];
  var selectRandom = Math.floor(Math.random() * 555);
  return artistList[selectRandom];
}

//This will bring a giphy back of the artist
function displayArtistGiphy(artistSearchParam) {
  var artistGiphyURL = "https://api.giphy.com/v1/gifs/search?q=" + artistSearchParam + '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1';
  fetch(artistGiphyURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.data[0]);

      var artistGiphyContainer = $(".container1");
      artistGiphyContainer.html("");

      var artistGifEl = document.createElement('img');
      artistGifEl.setAttribute('src', response.data[0].images.fixed_height.url);

      artistGiphyContainer.append(artistGifEl);
    });
}

//This function will call the API and get the artist data and then append it to the page.
function displayArtistData(artistSearchParam) {

  var artistDataURL = "https://theaudiodb.com/api/v1/json/1/search.php?s=" + artistSearchParam;

  fetch(artistDataURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //Here we get the data back and store it.
      var artistName = data.artists[0].strArtist;
      var artistGenre = data.artists[0].strGenre;
      var artistBio = data.artists[0].strBiographyEN;
      var artistWebsite = data.artists[0].strWebsite;
      var artistFacebook = data.artists[0].strFacebook;
      var artistTwitter = data.artists[0].strTwitter;

      //Here we are creating our DOM elements that will be added to the page.
      var container2SubDiv1 = $(".container2SubDiv1");
      container2SubDiv1.html("");
      var container2SubDiv2 = $(".container2SubDiv2");
      container2SubDiv2.html("");


      var artistNameEl = document.createElement("p");
      var artistGenreEl = document.createElement("p");
      var artistBioEl = document.createElement("p");
      var artistWebsiteEl = document.createElement("p");
      var artistFacebookEl = document.createElement("p");
      var artistTwitterEl = document.createElement("p");

      //Here we are adding data to our DOM elements.
      artistNameEl.textContent = "Artist: " + artistName;
      artistGenreEl.textContent = "Genre: " + artistGenre;
      artistBioEl.textContent = "Biography: " + artistBio;
      artistWebsiteEl.textContent = "Website: " + artistWebsite;
      artistFacebookEl.textContent = "Facebook: " + artistFacebook;
      artistTwitterEl.textContent = "Twitter: " + artistTwitter;

      container2SubDiv1.append(artistNameEl);
      container2SubDiv1.append(artistGenreEl);
      container2SubDiv2.append(artistBioEl);
      container2SubDiv1.append(artistWebsiteEl);
      container2SubDiv1.append(artistFacebookEl);
      container2SubDiv1.append(artistTwitterEl);

    });
}

//This will display a restart click
function displayRestartGiphy() {
  var restartGiphyURL = "https://api.giphy.com/v1/gifs/search?q=restart&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1";
  fetch(restartGiphyURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.data[0]);

      restartClick.html("");

      var restartClickEl = document.createElement('img');
      restartClickEl.setAttribute('src', response.data[0].images.fixed_height.url);

      restartClick.append(restartClickEl);
    });
}
//On function to call with out event listener that we will be implementing. 
function displayArtist() {
  var artistSearchParam = getArtistName();
  displayArtistGiphy(artistSearchParam);
  displayArtistData(artistSearchParam);
}

//This will run the JS for music options.
musicClick.click(function () {
  displayArtist();
  displayRestartGiphy();
})

mindClick.click(function () {
  container1.html("");

  var downForMaintenence = document.createElement('img');
  downForMaintenence.setAttribute('src', "../assets/images/Down-for-Maintenance.jpg");
  downForMaintenence.setAttribute('width', "300");
  downForMaintenence.setAttribute('height', "300");
  container1.append(downForMaintenence);

  displayRestartGiphy();
})

restartClick.click(function () {
  window.location.reload();
})