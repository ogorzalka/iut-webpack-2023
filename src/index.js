import './js/app.js';
import './css/app.css';

if (module.hot) {
    module.hot.accept('./js/app.js', function() {
        console.log('Accepting the updated printMe module!');
    })
}
