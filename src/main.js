// UI logic starts here.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { toRomans } from './roman-numerals';

$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    $(".output").hide();
    var userInput = parseInt($("#number").val());

    var output = toRomans(userInput);
    $(".romanNumeral").text(output);

    $(".output").show();
  });
});
