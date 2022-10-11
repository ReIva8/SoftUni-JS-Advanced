function createAssemblyLine() {
    return {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if(temp < tempSettings) {
                    temp++;
                } else if(temp > tempSettings) {
                    temp--;
                }
            }
        },
 
        hasAudio: (car) => {
            car.currentTrack = {name: '', artist: ''};
            car.nowPlaying = () => {
                if(currentTrack != null) {
                    console.log(`Now playing ${this.currentTrack.name} by ${this.currentTrack.artist}`);
                }
            };
        },
 
        hasParktronic: (car) => {
            car.checkDistance = (distance) => {
                if(distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if(distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if(distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!')
                } else {
                    console.log('');
                }
            }
        }
    }
}