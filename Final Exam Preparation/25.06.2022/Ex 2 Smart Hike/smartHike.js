class SmartHike {
    constructor(username, goals, listOfHikes, resources) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if(!this.goals[peak]) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        } else {
            return `${peak} has already been added to your goals`
        }
    };
    hike(peak, time, difficultyLevel) {
        if(!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        } else if (this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike");
        }
         if(this.resources - (time * 10) < 0) {
            return "You don't have enough resources to complete the hike";
         } else {
            this.resources -= time * 10;
            this.listOfHikes.push({peak, time, difficultyLevel});
            return `You hiked ${peak} peak for ${time} hours and you have ${resources}% resources left`;
         }
    };
    rest(time) {
        this.resources += (Number(time) * 10);
        if(this.resources < 100) {
            return `You have rested for ${time} hours and gained ${time*10}% resources`;
        } else {
            this.resources = Math.min(100, this.resources);
            return `Your resources are fully recharged. Time for hiking!`;
        }
    };
    showRecord(criteria) {
        if(!this.listOfHikes.length) {
            return `${username} has not done any hiking yet`;
        } 
        if(this.listOfHikes.includes(criteria)) {
            return `${username} has not done any hiking yet`;
        }
        if(criteria === 'hard' || criteria === 'easy') {
            let allHikes = this.listOfHikes.filter((hike) => hike.difficultyLevel == criteria);
            let sortedHikes = allHikes.sort((a,b) => a.time - b.time);
            let bestHike = sortedHikes[0];
        if(!bestHike) {
            return `${username} has not done any ${criteria} hiking yet`;
        }
            return `${username}'s best ${criteria} hike is ${peak} peak, for ${time} hours`;

        } else if (criteria === 'all') {
            let result = ['All hiking records:'];
            for(let item of this.listOfHikes) {
                let entries = Object.values(item);
                result.push(`${username} hiked ${peak} for ${time} hours`);
            }
            return result.join('\n');
        }
    }
   

}
const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.addGoal('Musala', 2925));
