alert( null || 2 || undefined ); //2

alert( alert(1) || 2 || alert(3) ); //1, 2

alert(1 && null && 2); //null

alert( alert(1) && alert(2) ); //1, undef

alert( null || 2 && 3 || 4 ); //3 

if (age >= 14 && age <= 90)

if (!(age >= 14 && age <= 90));

// Runs
if (-1 || 0) alert( 'first' );

// Doesn't run
if (-1 && 0) alert( 'second' );

// Executes
if (null || -1 && 1) alert( 'third' );

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}