let originalText = new Date()

function telltime() {
    let hr = originalText.getHours()
    let mnt = originalText.getMinutes()
    let scd = originalText.getSeconds()
    let time = hr + ":" + mnt + ":" + scd
    document.getElementById('output').innerHTML += "<br>" + '<span style= "font-weight: bolder;">' + 'You Clicked the Button @ ' + '</span>' + time
}

function clearOutput() {
    document.getElementById("output").innerHTML = ""
}


function ifElse() {

    clearOutput()
    document.getElementById('output').innerHTML += '<span style= "font-weight: bold; color: blue;">' + 'Using If else Statement' + '</span>' + '<br>' + '<br>'

    let ds = originalText.getDay()

    if(ds === 0 || ds === 6){
        document.getElementById('output').innerHTML += 'Today is OFF'
    }
    else if(ds === 1 || ds === 2){
        document.getElementById('output').innerHTML += 'Today is OFF'
    }
    else if(ds === 3 || ds === 4){
        document.getElementById('output').innerHTML += 'Today is OFF'
    }
    else{
        document.getElementById('output').innerHTML += 'Good Choice, Today is Friday'
    }
    telltime()

}

function Switch() {

    clearOutput()
    document.getElementById('output').innerHTML += '<span style= "font-weight: bold; color: blue;">' + 'Using switch Statement' + '</span>' + '<br>' + '<br>'

    let ds = originalText.getDay()
    // console.log(ds)
    switch (ds) {
        case 0:
        case 6:
            document.getElementById('output').innerHTML += 'Today is OFF'
            break
        case 1:
        case 2:
            document.getElementById('output').innerHTML += 'Today are First Days of week'
            break
        case 3:
        case 4:
            document.getElementById('output').innerHTML += 'Today are Last days of week'
            break
        default:
            document.getElementById('output').innerHTML += 'Good Choice, Today is Friday'
    }

    telltime()


    // let grade = +prompt("Please Enter  your marks")
    // grade = Number(grade)

    // switch (true) {
    //     case grade >= 90:
    //         document.getElementById('output').innerHTML = "You have Grade A+"
    //         break
    //     case grade >= 80:
    //         document.getElementById('output').innerHTML = "You have Grade A"
    //         break
    //     case grade >= 70:
    //         document.getElementById('output').innerHTML = "You have Grade B"
    //         break
    //     default:
    //         document.getElementById('output').innerHTML = "You are Average!"
    // }

}

function keepAskName() {

    // let n = 1

    // while(n<=10){

    //     let html = tbl + " * " + n + " = " + tbl * n + '<br>'
    //     document.getElementById('output').innerHTML += html
    //     n++ 
    // }


    clearOutput()
    do {
        var name = prompt("Enter your valid Name")
    }
    while (name === null || name === "" || name.length < 3)

    document.getElementById('output').innerHTML = name
    telltime()

}

