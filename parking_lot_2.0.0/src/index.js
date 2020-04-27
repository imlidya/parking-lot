const fs = require('fs'),
    chalk = require('chalk'),
	readLine = require('readline')

var	commandLineInputs = process.argv, 
    interactiveMode = false

var Parking = require('./classes/parkingLot.js'),
	parkingLot = new Parking()

// to avoid memory leaks errors, default max listeners = 10
require('events').EventEmitter.defaultMaxListeners = 0

if (commandLineInputs[commandLineInputs.length - 1].endsWith('.txt')) {
    interactiveMode = false
    fs.readFile(commandLineInputs[2], 'utf-8', function (err, data) {
        if (err) {
            console.log('Error in reading file')
        }
        var arr = data.split('\n');
		for (var i = 0; i < arr.length; i++) {
			processUserCommands(arr[i])
        }
        process.exit(1)
    })
}
else {
    interactiveMode = true
    openInteractiveConsole()
}

function openInteractiveConsole () {

    var prompts = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    if (interactiveMode) {
        prompts.question('Input: ', function (data) {
            processUserCommands(data)
        });
    }
}

function processUserCommands (input) {
	var userCommand = input.split(' ')[0],
		totalParkingSlots,
		parkingSlotNumber,
        parkingSlotNumbers,
        hours;
    switch (userCommand) {
        case 'create_parking_lot':
            try {
                totalParkingSlots = parkingLot.createParkingLot(input)
                console.log(chalk.yellow.bold('Created a parking lot with ' + totalParkingSlots + ' slots.'))
            }
            catch (err) {
                console.log(chalk.red.bold(err.message))
            }

            break;
        case 'park':
            try {
                parkingSlotNumber = parkingLot.parkCar(input)
                console.log(chalk.green('Allocated slot number: ' + parkingSlotNumber))
            }
            catch (err) {
                console.log(chalk.red.bold(err.message))
            }
            break
        case 'status':
            try {
                var parkingSlotStatus = parkingLot.getParkingStatus();
                if (parkingSlotStatus.length > 1) {
                    console.log(parkingSlotStatus.join('\n'));
                }
                else {
                    console.log(chalk.yellow('Sorry, parking lot is empty')); // what if it's empty
                }
            }
            catch (err) {
                console.log(chalk.red.bold(err.message, 'errr'))
            }
            break
        case 'leave':
            try {
                parkingSlotNumbers = parkingLot.leaveCarByCarNumber(input)
                hours = parkingSlotNumbers[1]
                parkingSlotNumber = parkingSlotNumbers[0]
                //hours = parkingLot.leaveCarByCarNumber(input)[1]
                var registNumber = input.split(" ")[1]
                //console.log(parkingSlotNumber, 'hehehehehhee')
                console.log(chalk.blue('Registration number ' + registNumber + ' Slot number ' + parkingSlotNumber + ' is free with charge ' + hours))
            }
            catch (err) {
                console.log(chalk.red(`Registration number not found`))
            }
            break
        case 'exit':
			process.exit(0)
			break
        default:
            console.log(chalk.red.bold(input, 'is an invalid command'))
            break
    }
    openInteractiveConsole()
}
