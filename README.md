# PARKING LOT PROBLEM

**<h3>List of User Command</h3>**
<hr>

* create_parking_lot: create_parking_lot 6 will create a parking lot with 6 slots.

* park <REGISTRATION NUMBER>: park KA-01-HH-1234 will allocate the nearest slot from entry gate.

* leave <REGISTRATION NUMBER> <HOURS>: leave KA-01-HH-1234 4 will leave car by registration number and charge by hours

* status: status will display cars and their slot details

```
Slot No.  Registration 
1         KA-01-HH-1234  
2         KA-01-HH-9999  
3         KA-01-BB-0001  
5         KA-01-HH-2701  
6         KA-01-HH-3141  
```
**<h3>Test Scripts</h3>**
<hr>

Tests are written using Mocha and can be run using npm test

* npm run test-unit : Run unit tests only (Tests for functions in Parking Class)

**<h3>How to running file</h3>**
<hr>

**1. Go to directory parking lot**

```
cd parking_lot_2.0.0
```

**2. Install all dependencies**

```
npm install
```

**3. Run index.js file**

```
node src/index.js
```

**4. For running with txt file**

```
node src/index.js data/parking_lot2.txt
```

**5. Testing**

```
For unit testing I made new folder named "tests" and using mocha and chai for testing. For testing : 
open new terminal 

cd tests

npm run test : Runs all the tests.

npm run test-unit : Runs all the unit tests.
```