import _ from 'lodash';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';
import { sayHello } from './greeting';
import application from 'Stylesheets/application.scss';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Quill from 'quill';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

if (document.getElementById('ckeditor')){
    import('@ckeditor/ckeditor5-build-classic').then(function(ClassicEditor){
        ClassicEditor.default
            .create( document.querySelector( '#ckeditor' ))
            .then( editor => {
                console.log( editor );
            })
            .catch( error => {
                console.error( error );
            });

    });
}

var quill = new Quill('#editor', {
    theme: 'snow'
});
$( "#datepicker" ).datepicker();

function component() {
    var element = document.createElement('div');
    // Lodash, currently included via a script, is required for this
    // line to work
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    return element;
}
document.body.appendChild(component());
sayHello();
$('body').append('<div style="background:green;padding:10px;">Hello jQuery!</div>');

$('[data-toggle="tooltip"]').tooltip();

if (module.hot) {
    module.hot.accept(function(err) {
        console.log(err);
    });
}