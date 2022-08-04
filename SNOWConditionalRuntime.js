//Condition to tell this job not to run from 11pm central time until 1am (7 days a week)

(function() {

    var runHours = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]; //Hour of day to send (24 hour time)
    var runWeekdays = [1, 2, 3, 4, 5, 6, 7]; //Days of week - (Mon = 1, Tues = 2... Sun = 7)
    var answer = false; //Default to false

    var shouldRunToday = checkRunWeekday(runWeekdays);
    var shouldRunThisHour = checkRunHour(runHours);

    if (shouldRunToday && shouldRunThisHour) answer = true;

    return answer;

})();

function checkRunWeekday(runDays) {
    //Return true if we should send today. Otherwise, return false
    var currentDayOfWeek = getCurrentDayOfWeek();
    if (runDays.indexOf(currentDayOfWeek) > -1) return true;
    return false;
}

function getCurrentDayOfWeek() {
    var gdt = new GlideDateTime();
    var dayOfWeek = gdt.getDayOfWeekLocalTime();
    return dayOfWeek;
}

function checkRunHour(runHours) {
    //Return true if we should send this hour. Otherwise, return false
    var hour = getCurrentHour();
    if (runHours.indexOf(hour) > -1) return true;
    return false;
}

function getCurrentHour() {
    var gt = new GlideTime();
    var hour = gt.getHourOfDayLocalTime();
    return hour;
}