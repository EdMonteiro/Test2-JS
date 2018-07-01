/*
    INSTRUCTIONS

    The below jQuery snippet has been partially optimized to use a native javasctipt for loop to make some alterations to the html instead of using the jQuery .each() method. What further techniques could be used to make the click event more performant? Please make your changes to the click event below, fork and send us the new link. It's open book, feel free to hit Google but be prepared to explain your improvements.

*/

// $('.table__button').click(function() {

//   for (var i = 0; i < $('table.table td').length; i++) {

//     if (!$($('table.table td')[i]).hasClass('table__cell--disabled')) {
//       $($('table.table td')[i]).css(
//         'background', $($('table.table td')[i]).attr('data-colour')
//       );
//       $($('table.table td')[i]).css('text-decoration','underline');
//       $($('table.table td')[i]).css('font-weight','bold');
//       $($('table.table td')[i]).css('text-align','center');
//       $($('table.table td')[i]).addClass('is--coloured');
//       $($('table.table td')[i]).html('I am now ' + $($('table.table td')[i]).attr('data-colour'));
//     }
    
//     $('.table__button').attr('disabled', 'disabled');

//   }
// });


////////////
/*re-code the above jQuery in plain ES6*/
// target button
const clickBtn = document.getElementsByClassName("table__button")[0];
// // target table__cells
const tableCells = document.getElementsByClassName("table__cell");

// function executed if button is clicked
const btnEvent = ()=> {
  // the default action of the event will not be triggered
  // event.preventDefault();
  for (let i = 0; i < tableCells.length; i++) {
    // if td element is NOT disabled then execute code block
    if (!tableCells[i].classList.contains("table__cell--disabled")) {
      // color from the attribute
      const color = tableCells[i].getAttribute("data-colour");
      // add styles
      tableCells[i].style.cssText += `background: ${color}; 
                text-decoration: underline; 
                font-weight: bold;
                text-align: center;`;
      // add class
      tableCells[i].classList.add("is--coloured");
      // change text content
      tableCells[i].textContent = `I am now ${color}`;
    }
  }
  // disable button
  clickBtn.setAttribute("disabled", "disabled");
};

// add event listener to button
clickBtn.addEventListener("click", btnEvent, false);