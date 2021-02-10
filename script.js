let sizeForm = document.querySelector('form[name=size]');
let sizeInputs = sizeForm.getElementsByTagName("input");

let colorForm = document.querySelector('form[name=color]');
let colorInputs = colorForm.getElementsByTagName('input');

let manufacturerForm = document.querySelector('form[name=manufacturer]');
let manufacturerOptions = manufacturerForm.getElementsByTagName('option');

let url = `http://любой_домен/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd`;
let updatedUrl = `http://любой_домен/filter?`;

const queryString = url.slice(url.indexOf('?'), url.length-1);
const urlParams = new URLSearchParams(queryString);

const size = urlParams.get('size');
const colors = urlParams.getAll('color');
const manufacturers = urlParams.getAll('manufacturer');

window.onload = function () {
    fillSizeForm();
    fillColorForm();
    fillManufacturerForm();
};

function fillSizeForm() {
    for (let i = 0; i < sizeInputs.length; i++) {
        if (size === sizeInputs[i].value) {
            sizeInputs[i].checked = true;
        }
    }
};


function fillColorForm() {
    colors.forEach( color => colorInputs[color--].checked = true );
};


function fillManufacturerForm() {
    manufacturers.forEach( (manufacturer, i) => manufacturerOptions[i].selected = true );
};

const onSizeChange = () => {
    let checkedSize = '';
    for (let i = 0; i < sizeInputs.length; i++) {
        if(sizeInputs[i].checked) {
            checkedSize += 'size=' + sizeInputs[i].value + '&';
        }
    }
    return checkedSize;
};

const onColorChange = () => {
    let checkedColor = '';
    for (let i = 0; i < colorInputs.length; i++) {
        if(colorInputs[i].checked) {
            checkedColor += 'color=' + colorInputs[i].value + '&';
        }
    }
    return checkedColor;
};

const onManufacturerChange = () => {
    let checkedManufacturer = '';
    for (let i = 0; i < manufacturerOptions.length; i++) {
        if(manufacturerOptions[i].selected) {
            checkedManufacturer += 'manufacturer=' + manufacturerOptions[i].value + '&';
        }
    }
    return checkedManufacturer;
};

function onInputChange() {
    console.log(updatedUrl + onSizeChange() + onColorChange() + onManufacturerChange());
}



