//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class MakeNetflixTVShow {
    constructor(actors,title,genre,numOfEp,year,runtime,targetaudience){
        this.actors=actors
        this.title=title
        this.genre=genre
        this.numOfEp=numOfEp
        this.year=year
        this.runtime=runtime
        this.targetaudience=targetaudience
    }
    play(){
        console.log('Playing...')
    }
    stop(){
        console.log('Stopping...')
    }
    saveToList(){
        console.log('Saved to List')
    }
}

let brigerton = new MakeNetflixTVShow(['jessie b','joey h','alan b','erin h'],'Bridgerton','Period Romantic Drama',12,2020,'2:43','young adult')
