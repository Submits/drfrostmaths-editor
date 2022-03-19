let SCHOOL_NAME = "School Name"
let STUDENT_FIRST_NAME = "First Name"
let STUDENT_LAST_NAME = "Last Name"
let STUDENT_EMAIL = "example@example.com"
let NOTIFICATION_COUNT = "99"
let ASSIGNMENT_COUNT = "10"
let ASSIGNMENT_DUE_DATE = "1 day ago"
let ASSIGNMENT_TASK = "Example assignment."
let ASSIGNMENT_MAX_SCORE = "1"
let ASSIGNMENT_ACHIEVED_SCORE = "1"
let ASSIGNMENT_COMPLETION_DATE = "1 second ago"
let POINTS_THIS_YEAR = "9999"
let GLOBAL_RANK = "1"
let STUDENT_IMAGE = "https://www.drfrostmaths.com/images/drfrostmathslogo.png"
let ASSIGNMENT_PERCENTAGE = Math.round(parseInt(ASSIGNMENT_ACHIEVED_SCORE) / parseInt(ASSIGNMENT_MAX_SCORE) * 100)
let FONT_FAMILY = "Lato"
let TEACHER_NAME = "Mr Example"
let KEY_SKILLS = "9999"
let TOPIC_MEDALS = "9999"
let TROPHIES = "9999"
let TIMESTABLES_SCORE = "9999"
let DFM_LOGO_TEXT = "dfm"


try{
document.documentElement.style.visibility = 'hidden';
document.addEventListener('DOMContentLoaded', async function() {
    console.log(window.location.hostname)

    if (window.location.href == "https://www.drfrostmaths.com/timestables.php") {
        document.querySelector("#timestable-leaderboard > div > ul").innerHTML = ""
        for (let i = 1; i < 25; i++) {
            document.querySelector("#timestable-leaderboard > div > ul").innerHTML += `<li><h1><em>#` + i + `</em> ` + STUDENT_FIRST_NAME + ` ` + STUDENT_LAST_NAME + `</h1><h2>` + TIMESTABLES_SCORE + ` correct - <em>` + SCHOOL_NAME + `</em></h2></li>`
        }

    }


    if (window.location.href == "https://www.drfrostmaths.com/account.php") {
        document.querySelector("#account-form > strong:nth-child(2)").innerHTML = STUDENT_FIRST_NAME
        document.querySelector("#account-form > strong:nth-child(5)").innerHTML = STUDENT_LAST_NAME
        document.querySelector("#account-form > strong:nth-child(8)").innerHTML = STUDENT_EMAIL
    }

    if (window.location.hostname == "www.drfrostmaths.com") {
        try {

            document.body.style.fontFamily = FONT_FAMILY
            document.querySelector("#mainmenu-user > a").innerHTML = STUDENT_FIRST_NAME
            document.querySelector("#logo > a").innerHTML = DFM_LOGO_TEXT
            document.querySelector("#mainmenu-resources > a > span").innerHTML = NOTIFICATION_COUNT
            document.querySelector("#mainmenu-resources > ul > li:nth-child(2) > a > span").innerHTML = NOTIFICATION_COUNT
        } catch {
            console.log("Cannot set elements for this page.")
        }
    }

    if (window.location.href == "https://www.drfrostmaths.com/assessment.php?mode=homework") {
        await sleep(500)
        document.querySelector("#assessment-activitylog-list").innerHTML = ""
        for (let i = 0; i < parseInt(ASSIGNMENT_COUNT); i++) {
            document.querySelector("#assessment-activitylog-list").innerHTML += `<li><div class="assessment-hwk-head" id="tskatt-116486-8264175" style="background-color: rgb(126, 230, 23);"><button class="menu-button">View</button><span class="assignment-status">✓ COMPLETE - <a href="#">View</a></span><br><span class="assignment-accuracies dfm-multiaccuracybar" style="width: 166px;"><span class="head overall-head" style="width:40px"></span><span class="head">Lvl1</span><span class="head">Lvl2</span><span class="head">Lvl3</span><span class="head">Lvl4</span><br><span class="overall-accuracy" style="width: 40px; font-size: 15px; background-color: rgb(126, 230, 23);">` + ASSIGNMENT_ACHIEVED_SCORE + `/` + ASSIGNMENT_MAX_SCORE + `</span><span style="background-color: rgb(221, 221, 221);">0/0</span><span style="background-color: rgb(221, 221, 221);">0/0</span><span style="background-color: rgb(221, 221, 221);">0/0</span><span style="background-color: rgb(221, 221, 221);">0/0</span></span></div><div class="assessment-hwk-body"><h2>Due ` + ASSIGNMENT_DUE_DATE + `</h2><h1>` + ASSIGNMENT_TASK + `</h1></div></li>`
        }


    }


    if (window.location.href == "https://www.drfrostmaths.com/dashboard.php") {
        await sleep(500)
        document.querySelector("#user-info > h1").innerHTML = STUDENT_FIRST_NAME + ` ` + STUDENT_LAST_NAME
        document.querySelector("#notification-main").innerHTML = ""
        for (let i = 0; i < parseInt(ASSIGNMENT_COUNT); i++) {
            document.querySelector("#notification-main").innerHTML += `<div class="notification-row" style="cursor: pointer;"><img class="icon" src="/homework/img/notification-topicmedal.png"><h2>You earned a Topic Medal with <span class="notification-accuracybar dfm-accuracybar" style="background-color: rgb(171, 230, 23);">` + ASSIGNMENT_PERCENTAGE + `%</span> on <strong>Standard</strong> difficulty.</h2><h3>` + ASSIGNMENT_COMPLETION_DATE + `</h3><p>"` + ASSIGNMENT_TASK + `"</p></div>`
        }
        document.querySelector("#user-info > h2").innerHTML = SCHOOL_NAME
        document.querySelector("#user-info > h3 > strong:nth-child(1)").innerHTML = POINTS_THIS_YEAR
        document.querySelector("#user-info > h3 > strong:nth-child(2)").innerHTML = GLOBAL_RANK
        document.querySelector("#user-info > img").src =STUDENT_IMAGE
        document.querySelector("#dashboard-homework").remove()
        document.querySelector("#dashboard-keyskills > h2:nth-child(2) > strong").innerHTML = KEY_SKILLS + "/" + KEY_SKILLS
        document.querySelector("#dashboard-keyskills > h2:nth-child(3) > strong").innerHTML = TOPIC_MEDALS + "/" + TOPIC_MEDALS
        document.querySelector("#dashboard-trophies > h1").innerHTML = `<img src="/homework/img/trophy-32.png"> Trophies: ` + TROPHIES + `/` + TROPHIES


    }






    document.documentElement.style.visibility = '';

})
}
catch{
    console.log("Something went wrong.")
}



function sleep(milisec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('')
        }, milisec);
    })
}


function calcDate(date) {
    dateNow = new Date();
    dateThen = new Date(date);
    const diffTime = Math.abs(dateThen - dateNow);
    let seconds = Math.round(diffTime / 1000)
    let minutes = Math.round(diffTime / 1000 / 60)
    let hours = Math.round(diffTime / 1000 / 60 / 60)
    let days = Math.round(diffTime / 1000 / 60 / 60 / 24)
    let years = Math.round(diffTime / 1000 / 60 / 60 / 24 / 365)


    if (seconds >= 1 && seconds < 60) {
        if (seconds == 1) {
            return seconds + " second ago"
        } else {
            return second + " seconds ago"
        }
    } else if (minutes >= 1 && minutes < 60) {
        if (minutes == 1) {
            return minutes + " minute ago"
        } else {
            return minutes + " minutes ago"
        }
    } else if (hours >= 1 && hours < 24) {
        if (hours == 1) {
            return hours + " hour ago"
        } else {
            return hours + " hours ago"
        }
    } else if (days >= 1 && days < 365) {
        if (days == 1) {
            return days + " day ago"
        } else {
            return days + " days ago"
        }
    } else if (years >= 1) {
        if (years == 1) {
            return years + " year ago"
        } else {
            return years + " years ago"
        }
    }

}

