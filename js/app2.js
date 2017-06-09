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
  $('.block3').on('click', this.aboutMe.bind(this));
  $('.aboutMeButton').on('click', this.whoiam.bind(this));
  $('.whatIveDoneButton').on('click', this.whatIveDone.bind(this));
  $('.whatIDoButton').on('click', this.whatIDo.bind(this));
  $('.contactButton').on('click', this.contact.bind(this));
};

$(Portfolio.init.bind(Portfolio));

Portfolio.aboutMe = function(e){
  if (e) e.preventDefault();
  $('.block3').addClass('animated animated flipOutY');

};