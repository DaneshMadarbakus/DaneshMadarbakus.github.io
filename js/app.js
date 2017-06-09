console.log('working');
var Portfolio = Portfolio || {};

Portfolio.init = function(){
  this.$main = $('#page-content-wrapper');
  // this.$main.html(`
  //           <div class="col-md-12 home">
  //             <div>
  //               <h2>Danesh Madarbakus</h2>
  //               <h3>London based web developer</h3>
  //             </div>
  //           </div>
  // `);
  $('.homeButton').on('click', this.startpage.bind(this));
  $('.aboutMeButton').on('click', this.whoiam.bind(this));
  $('.whatIveDoneButton').on('click', this.whatIveDone.bind(this));
  $('.whatIDoButton').on('click', this.whatIDo.bind(this));
  $('.contactButton').on('click', this.contact.bind(this));
};

$(Portfolio.init.bind(Portfolio));

Portfolio.startpage = function(e){
  if (e) e.preventDefault();
  this.$main.html(`
            <div class="col-md-12 home">
              <div>
                <h1>Danesh Madarbakus</h1>
                <h3>London based web developer</h3>
              </div>
            </div>
  `);
};


Portfolio.whoiam = function(e){
  if (e) e.preventDefault();
  $('.whoiamButton').css({'color': '#FA198B', 'border-right': '5px solid #FA198B' });
  this.$main.html(`        
            <div class="col-md-12 whoiam">
              <h1>About me</h1>
              <br>
              <br>
              <span>Web Developer</span>
              <div class="whoiam-content">
                <div class="col-md-4 colnum1">
                  <img src="http://i.imgur.com/Ae30LxX.jpg?1" alt="me">
                </div>
                <div class="col-md-4 colnum2">
                  <p>After a successful run in the IT recruitment industry I am now pursuing a career change as a developer. My career in recruitment gave me heavy exposure to the IT industry as I was speaking to high level IT professionals on a daily basis and this slowly led to me having a personal interest in becoming a developer myself. 
                  <br>
                  <br>  
                  After some time and careful thinking, I felt compelled to leave my career in recruitment and pursue what was becoming my new passion, web development. As a result, I have recently completed a 3 month Web Development Immersive course with General Assembly and I am now looking to kick start my career as a web developer.
                  </p>
                </div>
                <div class="col-md-4 colnum3">
                  <p>Passionate and enthusiastic about learning</p>
                </div>
              </div>
            </div>
        `);
};

Portfolio.whatIDo = function(e){
  if (e) e.preventDefault();
  this.$main.html(`        

        `);
};

Portfolio.whatIveDone = function(e){
  if (e) e.preventDefault();
  this.$main.html(`
  <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 whatIveDone">
              <h1>What I've done</h1>
              <hr>
              <div class="whatIveDone-content">
                  <div class="col-md-4 colnum1">                    
                    <img class="wdiProjectsIcon" src="http://i.imgur.com/g3Hx5sa.png?2" alt="suit homepage">
                    <div class="colnum1 coverr" data-toggle="modal" data-target=".suit-modal"><h3>Suit</h3></div>
                  </div>
                  <div class="col-md-4 colnum2">
                    <img class="wdiProjectsIcon" src="http://i.imgur.com/BFWKzyA.png?1" alt="input homepage">
                    <div class="colnum2 coverr" data-toggle="modal" data-target=".input-modal"><h3>Input</h3></div>
                  </div>
                  <div class="col-md-4 colnum3">
                    <img class="wdiProjectsIcon" src="http://i.imgur.com/Sizr7CC.png?1" alt="global photos homepage">
                    <div class="colnum3 coverr" data-toggle="modal" data-target=".global-modal"><h3>Global Photos</h3></div>
                  </div>
                  <div class="col-md-4 colnum1">
                    <img class="wdiProjectsIcon" src="http://i.imgur.com/qVTiOq1.png" alt="global photos homepage">
                    <div class="colnum1 coverr" data-toggle="modal" data-target=".conor-modal"><h3>Whack-A-Mole</h3></div>
                  </div>
              </div>

        <div class="modal fade suit-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <img src="http://i.imgur.com/10vuwND.png" alt="suit homepage">
              <br>
              <a href="https://suit-site.herokuapp.com">Visit the site</a>
              <a href="https://github.com/DaneshMadarbakus/WDI_PROJECT_4_API">Github API</a>
              <a href="https://github.com/DaneshMadarbakus/WDI_PROJECT_4_CLIENT">Github Client</a>
              <h2>The Suit Sharing Web App</h2>
              <h5>The Brief:</h5>
              <p>For the final project of the GENERAL ASSEMBLY web development immersive course, I was tasked to create a fully functional web app using ruby on rails and angularJS in under a week.</p>
              <h5>The Approach:</h5>
              <p>After coming up with the idea to create a suit sharing site, I quickly put together a Rails ERD and started developing the back end of the web app. Upon completing and testing my Rails API using Insomnia, I set up the environment of the front end of my site with the neccessary gulp files to make sure development ran smoothly and got to work on building an authentication system using AngularJS & JWT and then making calls to my API.</p>
              <h5>Proudest moment:</h5>
              <p>Being able to step back and see the progress I made in only 3 months. When first starting this course I had no prior web development experience but being able to see the progress I made in only 3 months made me feel really proud.</p>
              <h5>Tech used:</h5>
              <p>HTML5, CSS, Ruby on Rails, POSTGRES, Bootstrap.Js, Express, SCSS & AngularJS.</p>
            </div>
          </div>
        </div>
        <div class="modal fade input-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <img src="http://i.imgur.com/DP96QKO.png" alt="input homepage">
              <br>
              <a href="https://inputbltdcx.herokuapp.com">Visit the site</a>
              <a href="https://github.com/DaneshMadarbakus/WDI_PROJECT_3">Github</a>
              <h2>The Anonymous Suggestion Web App</h2>
              <h5>The Brief:</h5>
              <p>For the third project of the GENERAL ASSEMBLY web development immersive course, we were put into groups of 5 and were tasked with creating a fully functional web app using a MEAN STACK in one week.</p>
              <h5>The Approach:</h5>
              <p>After coming up with an idea to create a site which would allow people to give anonymous suggestions to businesses, we began dividing the workload amongst each other while also setting up a timetable and regular intervals for us to discuss progress in our work to make sure we were in sync with one another. My focus on this project was setting up the models for the back-end and also putting together AngularJS controllers for the front end of the site, making calls to our API and rendering the relevant information.</p>
              <h5>Proudest moment:</h5>
              <p>Being able to effectively work together with a team of developers to put together a fully functional website.</p>
              <h5>Tech used:</h5>
              <p>HTML5, SCSS, Node.Js, Express, MONGO, Bootstrap.Js & AngularJS.</p>
            </div>
          </div>
        </div>

        <div class="modal fade global-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <img src="http://i.imgur.com/p5FjqVN.png" alt="global photos homepage">
              <br>
              <a href="https://global-photos.herokuapp.com/">Visit the site</a>
              <a href="https://github.com/DaneshMadarbakus/WDI_PROJECT_2">Github</a>
              <h2>Global Photos Web App</h2>
              <h5>The Brief:</h5>
              <p>For the second project of the GENERAL ASSEMBLY web development immersive course, I was tasked to create a web app utilising two APIs and using jQuery. One of the APIs had to be the Google Maps API and the other was of our choice but we had to be able to use it to plot markers onto the map.</p>
              <h5>The Approach:</h5>
              <p>I decided to use the unsplash.com API to plot high definition photos from around the world onto the map in the area they were taken. To do this I took a step by step approach first by rendering the map onto the browser then plotting the photos onto the map and finally building an authentication system around it using JWT tokens.</p>
              <h5>Proudest moment:</h5>
              <p>The first time ever using an API and being to show my understanding of what an API is and getting my first taste of making calls to it and the possbilities they provide to build new apps.</p>
              <h5>Tech used:</h5>
              <p>HTML5, CSS, Node.Js, Express, MONGO, Bootstrap.Js, SCSS, & jQuery.</p>
            </div>
          </div>
        </div>

        <div class="modal fade conor-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <img src="http://i.imgur.com/vthxHsJ.png" alt="Conor homepage">
              <br>
              <a href="https://conor-whack-a-bum.herokuapp.com/">Visit the site</a>
              <a href="https://github.com/DaneshMadarbakus/WDI_PROJECT_1">Github</a>
              <h2>Conor McGregor Themed Whack-A-Mole game</h2>
              <h5>The Brief:</h5>
              <p>For the first project of the GENERAL ASSEMBLY web development immersive course, I was tasked to create a simple game using html, css and jquery.</p>
              <h5>The Approach:</h5>
              <p>After coming up with the idea of creating a Conor McGregor themed whack-a-mole game, I put together the board of the game using HTML and CSS to get a basic idea of how I want the game to look. I then continued to build the logic for the game using jQuery and gave some final finishing touches to the UI. </p>
              <h5>Proudest moment:</h5>
              <p>This was my first project at the very start of my Web Development journey after only having been coding for less than a month. Though it is rather simple, I was proud that I had taken the first step in my journey and it reaffirmed my passion to learn more and that the path I was on was the right one for me.</p>
              <h5>Tech used:</h5>
              <p>HTML5, CSS & JavaScript - jQuery.</p>
            </div>
          </div>
        </div>

            </div>
          </div>
        </div>
  `);
};

Portfolio.contact = function(e){
  console.log('hyaa');
  if (e) e.preventDefault();
  this.$main.html(`

          <div class="row">
            <div class="col-md-12 contact">
              <h1>Contact me</h1>
              <hr>
              <div class="contact-content">
                <div class="col-md-4 colnum1">
                  <p> Telephone: 07904225010 Email: daneshplt@hotmail.co.uk LinkedIn </p>
                  <a href="mailto:daneshplt@hotmail.co.uk?subject=Hello Danesh!">Email me! :)</a>
                  <p> Github </p>
                </div>
                <div class="col-md-8 colnum2">
                  <div id="map"></div>
                </div>
              </div>
            </div>
          </div>

  `);
  this.london = {lat: 51.481383, lng: -0.120850};
  this.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: this.london
  });
  this.marker = new google.maps.Marker({
    position: this.london,
    map: this.map
  });
};