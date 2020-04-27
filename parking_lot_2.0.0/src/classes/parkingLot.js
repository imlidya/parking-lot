class Car {
    constructor(number, hours) {
        this.number = number
        this.hours = hours
    }
}


class ParkingLot {
    constructor() {
        this.max_parking_space = 0
        this.parking_slots = new Array()
        this.hours = 0
    }
    
    createParkingLot(input) {
        // get only number from input
        this.max_parking_space = parseInt(input.split(" ")[1])
        //console.log(num, 'number')
        //console.log(this.max_parking_space)
        if(this.max_parking_space <= 0) {
            throw new Error("Minimum one slot is required to create parking slot")
        }
        for (let i = 0; i < this.max_parking_space; i++) {
            this.parking_slots.push(null)
        }
        return this.max_parking_space
    }

    findNearestSpace() {
        let check = false;
        for(let i = 0; i < this.parking_slots.length; i++) {
            if(this.parking_slots[i] == null) {
                check = true
                //console.log(check)
            }
        }
        return check
    }

    parkCar(input) {
        let len = this.parking_slots.length
    	if (this.max_parking_space > 0) {
			var car, carNumber
	    	if (this.findNearestSpace(this.parking_slots) == true) {
		  		for (let i = 0; i < len; i++) {
		  			if (this.parking_slots[i] == null) {
                        carNumber = input.split(' ')[1]
						if (carNumber) {
							car = new Car(carNumber)
							this.parking_slots[i] = car
							i = i + 1
							return i
						}
						else {
							throw new Error('Please provide registration number')
						}
		  			}
		  		}
			  }
			else {
		  		throw new Error('Sorry, parking lot is full')
		  	}
          }
          else {
	  		throw new Error('Minimum one slot is required to create parking slot')
	  	}
	}

    // leaveCar(input) {
    //     if(this.max_parking_space > 0) {
    //         let index = input.split(" ")[2]
    //         let charge
    //          //console.log(index)
    //         if(index <= 2){
    //             charge = index * 10
    //             //console.log(charge)
    //         } else if(index > 2) {
    //             charge = ((index-2) * 10) + 10
    //         }
    //         return charge
    //     }
    // }

    getParkingStatus() {
        let arr = []
        if(this.max_parking_space > 0) {
            arr.push('Slot No. Registration ')
            for(let i = 0; i < this.parking_slots.length; i++) {
                if(this.parking_slots[i] !== null) {
                    var e = i + 1
                    arr.push(e + '.  ' + this.parking_slots[i].number)
                    //console.log(arr)
                }
            }
            return arr
        } else {
            throw new Error("Sorry, parking lot is empty")
        }
    }

    leaveCarByCarNumber(input) {
        let carNumber = input.split(' ')[1]
		if (this.max_parking_space > 0) {
            let hours = input.split(' ')[2]
            let charge
            let result = []
            //console.log(hours)
            //console.log(input)
		    for (var index = 0; index < this.max_parking_space; index++) {
                //console.log(this.parking_slots, 'nooooooooooooh')
				if (this.parking_slots[index].number === carNumber) {
                    this.parking_slots[index].hours = hours
                    //console.log(this.parking_slots, 'mashooooq')
                    if(hours <= 2) {
                        charge = hours * 10
                    } else if(hours > 2) {
                        //console.log(hours, 'houuuuurs')
                        charge = ((hours-2) * 10) + 10
                    }
                    //console.log(this.parking_slots[index])
                    this.parking_slots[index] = null
                    var slot = index+1
                    result.push(slot, charge)
                    //console.log(result, 'resuuuult')
                    return result
				}
			}
		}
		else {
			throw new Error(`Registration number ${carNumber} is not found`);
		}
	}
}

const coba = new ParkingLot(6)
// coba.createParkingLot("create_parking_lot 6")
// coba.findNearestSpace()
// coba.parkCar("park KA-01-HH-1234")
// coba.leaveCar("leave KA-01-HH-3141 4")
//coba.leaveCarByCarNumber("leave KA-01-HH-3141 4")

module.exports = ParkingLot