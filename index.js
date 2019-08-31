"use strict";

window.onload = function () {
    //document.onclick = create;
    setInterval(create, 500)
    //create();
};

function trim(data) {
    var start;
    var whitespace;
    var end;
    var result;

    if (typeof data === "string") {
        whitespace = " \n\r\t\f";
        start = 0;
    } else {
        result = data;
    }

    while ((start < data.length) && (whitespace.indexOf(data.charAt(start)))) {
        start = start + 1;
    };
    end = data.length - 1;

    while ((end >= 0) && (whitespace.indexOf(data.charAt(end)))) {
        end = end - 1;
    };

    if (end < start) {
        result = "";
    } else {
        result = data.substring(1 + start, end);
    }
    return result;
};


function getRandomInteger(upperLimit) {
    return Math.floor(Math.random() * (upperLimit + 1));
};

function getRandomRGB() {
    var blue;
    var green;
    var red;
    red = getRandomInteger(255);
    blue = getRandomInteger(255);
    green = getRandomInteger(255);
    return "rgb(" + red + "," + green + "," + blue + ")";
};

function createHTMLElement(elementType, id, classInfo, content) {
    if (elementType === null) {
        elementType = "";
    };

    trim(elementType);

    if (id === null) {
        id = "";
    }

    trim(id);

    if (id.length > 0) {
        id = " " + "id=" + '"' + id + '"' + " ";
    };

    if (classInfo === null) {
        classInfo = "";
    }

    trim(classInfo);

    if (classInfo.length > 0) {
        classInfo = " " + "class=" + '"' + classInfo + '"';
    }

    if (content === null) {
        content = "";
    };

    trim(content);

    return '<' + elementType +
        id + classInfo +
        '>' + content +
        '</' + elementType + '>';
};

function createConfetti(containerId, howMany) {
    var element;
    var i;
    var idPrefix;
    var result;


    result = "";
    idPrefix = "circles";
    i = 0;
    element = document.getElementById(idPrefix + i);
    while (i < howMany) {
        result = result + createHTMLElement("span", idPrefix + i, "confetti", "");
        i = i + 1;
    } //while

    document.getElementById(containerId).innerHTML = result;

    i = 0;
    while (i < howMany) {
        document.getElementById(idPrefix + i).style.color = getRandomRGB();
        //document.getElementById(idPrefix + i).style.top ="0px";
        document.getElementById(idPrefix + i).style.top = getRandomInteger(document.getElementById(containerId).offsetHeight - 4) + "px";
        document.getElementById(idPrefix + i).style.left = getRandomInteger(document.getElementById(containerId).offsetWidth - 4) + "px";
        i = i + 1;
    } //while

    
};

function create() {
    createConfetti("container", 50);
    var i =0;
    // setInterval(()=>{
    //     let height = document.getElementById("container").offsetHeight - 4;
    //     while (i < 50) {
    //         for(var j=0;j<height;j++){
    //             document.getElementById("circles" + i).style.top = document.getElementById("circles" + i).offsetHeight + j + "px";
    //         }
            
    //         i = i + 1;
    //     }
    // },100)
};