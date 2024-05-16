const { text } = require("express")

console.log("Welcome user")

function callTeamLeader(callback){
        setTimeout(()=>{
            teamLeader="AYush"
            callback(teamLeader)
        },2000)
}

function callManager(teamLeader,callback){
    setTimeout(() => {
        manger="Goku"
        teamjoin=`Manager ${manager} \tTeam Leader ${teamLeader}`
        callback(teamjoin)
    },2000);
}


