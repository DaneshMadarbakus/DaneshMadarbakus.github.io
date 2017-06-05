console.log('working');

var Portfolio = Portfolio || {};

Portfolio.init = function(){
  this.apiKey = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';
  this.startpage();
  this.$main = $('#page-content-wrapper');
  // $('.aboutMe').on('click', this.aboutMe.bind(this));
  $('.whoiamButton').on('click', this.whoiam.bind(this));
};

$(Portfolio.init.bind(Portfolio));

Portfolio.startpage = function(){
  $.get(this.apiKey)
  .done(function(data){
    $.each(data.data, function(index, post){
      $('.gifs').append('<li><embed src="' + post.embed_url + '"></li>');
    });
  })
  .fail(function(){
    console.log('error');
  });
};

Portfolio.whoiam = function(e){
  console.log('clicked');
  if (e) e.preventDefault();
  this.$main.html(`        
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 whoiam">
              <h1>Danesh Madarbakus</h1>
              <hr>
              <span>Web Developer</span>
              <div class="whoiam-content">
                <div class="col-md-4 colnum1">
                  <img src="http://i.imgur.com/Ae30LxX.jpg?1" alt="me">
                </div>
                <div class="col-md-4 colnum2">
                  <p>After a successful run in the IT recruitment industry I am now pursuing a career change as a developer. My career in recruitment gave me heavy exposure to the IT industry as I was speaking to high level IT professionals on a daily basis. As a result I was required to understand the ins and outs of the candidates roles and this slowly led to me having a personal interest in becoming a developer myself. 
                  <br>
                  <br>  
                  After some time and careful thinking, I felt compelled to leave my career in recruitment and pursue what was becoming my new passion, web development. As a result, I have recently completed a 3 month Web Development Immersive course with General Assembly and I am now looking to kick start my career as a web developer.
                  </p>
                </div>
                <div class="col-md-4 colnum3">
                  <p>I like to keep it simple, I'm not a "web guru" or a "web ninja", I'm a Web Developer...
                    <br>
                    <br>
                    Why so simple you ask?
                    <br>
                    <br>
                    Well... if this guy is being introduced as "Web developer" I'm not sure if I can refer to myself as anything more than that</p>
                  <img src="http://i.imgur.com/21SI29N.jpg" alt="sir tim berners-lee">
                </div>
              </div>
            </div>
          </div>
        </div>
        `);

  // this.$main.html(`
  //         <h2>General Assembly Web Development Pojects</h2>
  //       <div class="wdiPortfolio">
  //          <div class="col-md-6">
  //           <h4>Fourth Project</h4>
  //           <img class="wdiProjectsIcon" data-toggle="modal" data-target=".suit-modal" src="http://i.imgur.com/g3Hx5sa.png" alt="suit homepage">
  //         </div>
  //         <div class="col-md-6">
  //           <h4>Third Project</h4>
  //           <img class="wdiProjectsIcon" src="http://i.imgur.com/BFWKzyA.png" alt="input homepage">
  //         </div>
  //         <div class="col-md-6">
  //           <h4>Second Project</h4>
  //           <img class="wdiProjectsIcon" src="http://i.imgur.com/Sizr7CC.png" alt="global photos homepage">
  //         </div>
  //         <div class="col-md-6">
  //           <h4>First Project</h4>
  //           <img class="wdiProjectsIcon" src="http://i.imgur.com/vthxHsJ.png" alt="conor mcgregor game homepage">
  //         </div>
  //       </div>
  // `);
};