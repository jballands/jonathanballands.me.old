/*
 *  /js/home/desktop/resumeAnimation.js
 *  © 2016 Jonathan Ballands
 */

export default function () {

  const THINGS_I_KNOW = [
    'Node',
    'Swift',
    'Sketch',
    'React.js',
    'Express',
    'Photoshop',
    'Core Data',
    'Poached Eggs',
    'Scrum Mastering',
    'Redux',
    'Agile',
    'Unix',
    'Sass',
    'Angular',
    'Gulp.js',
    'SXSW',
    'Redis',
    'Fluxxor',
    'NPM',
    'Handlebars',
    'Agile',
    'Austin, TX',
    'MongoDB',
    'SAAS',
    'Illustrator',
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
