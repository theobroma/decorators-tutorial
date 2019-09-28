import $ from 'jquery';
import Rx from 'rxjs';

const button = document.querySelector('.button');
const label = document.querySelector('h4');

const clickStream = Rx.Observable.fromEvent(button, 'click');
clickStream.subscribe(x => console.log(x));

// const doubleClickStream;

// doubleClickStream.subscribe(event => {
//   label.textContent = 'double click';
// });

// doubleClickStream.throttle(1000).subscribe(suggestion =>{
//   label.textContent='-';
// });
console.log('Hello123112312123123312312323');
