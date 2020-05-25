function init() {
}
let currentProgress = 0;
$('#onePercent').click(function() {
    currentProgress = currentProgress + 1;
    $('#progress').attr("style", "width: " + currentProgress + "%");
});
$(document).ready(init);

function init() {
}
let currentProgressThree = 1;
$('#threePercent').click(function() {
    currentProgressThree = currentProgressThree + 3;
    $('#progress').attr("style", "width: " + currentProgressThree + "%");
});
$(document).ready(init);

function init() {
}
let currentProgressSeven = 3;
$('#sevenPercent').click(function() {
    currentProgressSeven = currentProgressSeven + 7;
    $('#progress').attr("style", "width: " + currentProgressSeven + "%");
});
$(document).ready(init);

