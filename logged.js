

var timer = new Timer();
timer.start({countdown: true, startValues: {minutes: 60}});
$('#countdownExample .values').html(timer.getTimeValues().toString());
timer.addEventListener('secondsUpdated', function (e) {
    $('#countdownExample .values').html(timer.getTimeValues().toString());
});
timer.addEventListener('targetAchieved', function (e) {
    $('#countdownExample .values').html('KABOOM!!');
});
