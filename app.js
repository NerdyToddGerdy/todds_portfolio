console.log('app.js is running');
$(function(){
   const $homePage = $('.home-page');
   const $bio = $('.bio');
   const $homeBtnBio = $('.home-button-bio');
   const $contact = $('.contact');
   const $homeBtnContact = $('.home-button-contact');
   const $resume = $('.resume');
   const $homeBtnResume = $('.home-button-resume');
   const $projects = $('.projects');
   const $homeBtnProjects = $('.home-button-projects');


   // const resetAllPages = function(thisItem){
   //    // if($('body').css('max-width') >= '600px'){
   //       $homePage.addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
   //          $homePage.removeClass('animated bounce').addClass('animated slideInDown')
   //    // }
   //       $contact.addClass('hidden');
   //       $bio.addClass('hidden');
   //       $resume.addClass('hidden');
   //       $projects.addClass('hidden');
   //       thisItem.removeClass('hidden')
   //    });
   // }
   // ==============================
   // *** BIO PAGE ***
   // ==============================

   const mainPageJumpsUp = function(){
      $homePage.removeClass('animated bounceInDown').addClass('animated bounceOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $homePage.removeClass('animated bounceOutUp');
         $homePage.addClass('hidden');
      });
   };

   const goHome = function(){
      $homePage.removeClass('hidden').addClass('animated bounceInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $homePage.removeClass('animated bounceInDown hidden');
         $bio.removeClass('animated bounceOutDown');
         // resetAllPages();
      });

   };

   $('.bio-page').on('click', function(){
      // resetAllPages($bio);
      setTimeout(function(){
         $bio.removeClass('hidden').addClass('animated bounceInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $bio.removeClass('hidden animated bounceInUp');
         });
      },400);
      $contact.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $contact.addClass('hidden').removeClass('animated fadeOut');
      });
      $resume.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $resume.addClass('hidden').removeClass('animated fadeOut');
      });
      $projects.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $projects.addClass('hidden').removeClass('animated fadeOut');
      });
      mainPageJumpsUp();
   });

   $homeBtnBio.on('click', function(){
      $bio.addClass('animated bounceOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $bio.removeClass('animated bounceOutDown').addClass('hidden');
      });
      setTimeout(function(){
         goHome();
      },200);
   });

   // ==============================
   // *** END BIO PAGE ***
   // ==============================

   // ==============================
   // *** CONTACT ME PAGE ***
   // ==============================

   const mainPageJumpsLeft = function(){
      $homePage.removeClass('animated bounceInRight').addClass('animated bounceOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $homePage.removeClass('animated bounceOutLeft');
         $homePage.addClass('hidden');
      });
   };

   const goHomeRight = function(){
      $homePage.removeClass('hidden').addClass('animated bounceInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $homePage.removeClass('animated bounceInLeft hidden');
         $contact.removeClass('animated bounceOutRight');
         // resetAllPages();
      });

   };

   $('.contact-page').on('click', function(){
      setTimeout(function(){
         $contact.removeClass('hidden').addClass('animated bounceInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $contact.removeClass('hidden animated bounceInLeft');
         });
      },400);
      $bio.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $bio.addClass('hidden').removeClass('animated fadeOut');
      });
      $resume.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $resume.addClass('hidden').removeClass('animated fadeOut');
      });
      $projects.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $projects.addClass('hidden').removeClass('animated fadeOut');
      });
      mainPageJumpsUp();
   });

   $homeBtnContact.on('click', function(){
      $contact.addClass('animated bounceOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $contact.removeClass('animated bounceOutRight').addClass('hidden');
      });
      setTimeout(function(){
         goHomeRight();
      },200);
   });


   // ==============================
   // *** END CONTACT ME PAGE ***
   // ==============================


   // ==============================
   // *** RESUME PAGE ***
   // ==============================

   const mainPageJumpsRight = function(){
      $homePage.removeClass('animated bounceInLeft').addClass('animated bounceOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $homePage.removeClass('animated bounceOutRight');
         $homePage.addClass('hidden');
      });
   };

   const goHomeLeft = function(){
      $homePage.removeClass('hidden').addClass('animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $homePage.removeClass('animated bounceInRight hidden');
         $contact.removeClass('animated bounceOutLeft');
         // resetAllPages();
      });

   };

   $('.resume-page').on('click', function(){
      // resetAllPages();
      setTimeout(function(){
         $resume.removeClass('hidden').addClass('animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $resume.removeClass('hidden animated bounceInRight');
         });
      },400);
      $contact.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $contact.addClass('hidden').removeClass('animated fadeOut');
      });
      $bio.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $bio.addClass('hidden').removeClass('animated fadeOut');
      });
      $projects.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $projects.addClass('hidden').removeClass('animated fadeOut');
      });
      mainPageJumpsUp();
   });

   $homeBtnResume.on('click', function(){
      $resume.addClass('animated bounceOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $resume.removeClass('animated bounceOutLeft').addClass('hidden');
      });
      setTimeout(function(){
         goHomeLeft();
      },200);
   });


   // ==============================
   // *** END RESUME ME PAGE ***
   // ==============================


   // ==============================
   // *** PROJECTS PAGE ***
   // ==============================

   const mainPageJumpsDown = function(){
      $homePage.removeClass('animated bounceInUp').addClass('animated bounceOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $homePage.removeClass('animated bounceOutDown');
         $homePage.addClass('hidden');
      });
   };

   const goHomeUp = function(){
      $homePage.removeClass('hidden').addClass('animated bounceInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $homePage.removeClass('animated bounceInUp hidden');
         $projects.removeClass('animated bounceOutDown');
         // resetAllPages();
      });

   };

   $('.projects-page').on('click', function(){
      // resetAllPages();
      setTimeout(function(){
         $projects.removeClass('hidden').addClass('animated bounceInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $projects.removeClass('hidden animated bounceInUp');
         });
      },400);
      $contact.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $contact.addClass('hidden').removeClass('animated fadeOut');
      });
      $resume.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $resume.addClass('hidden').removeClass('animated fadeOut');
      });
      $bio.addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $bio.addClass('hidden').removeClass('animated fadeOut');
      });
      mainPageJumpsUp();   });

   $homeBtnProjects.on('click', function(){
      $projects.addClass('animated bounceOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         $projects.removeClass('animated bounceOutUp').addClass('hidden');
      });
      setTimeout(function(){
         goHomeUp();
      },200);
   });


   // ==============================
   // *** END PROJECTS PAGE ***
   // ==============================

});
