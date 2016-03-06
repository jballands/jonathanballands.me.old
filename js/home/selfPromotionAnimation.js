/*
 *  /js/home/resumeAnimation.js
 *  © 2016 Jonathan Ballands
 */

export default function () {

  const THINGS_I_KNOW = [
    'Node',
    'Swift',
    'Sketch',
    'Release Mgmt',
    'React.js',
    'Express',
    'Core Data',
    'Poached Eggs',
    'Redux',
    'Agile',
    'Unix',
    'Sass',
    'Angular',
    'Gulp.js',
    'SXSW',
    'Redis',
    'Scrum Mastering',
    'Fluxxor',
    'Tricky Golf Shots',
    'Handlebars',
    'Agile',
    'Austin, TX',
    'MongoDB',
    'SAAS',
    'A lot of stuff'
  ];

  $('#self-promotion-tty').typed({
    strings: THINGS_I_KNOW,
    typeSpeed: 160,
    loop: true,
    showCursor: false,
    backSpeed: 50
  })
}
