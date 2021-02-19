let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("ahhh!");
  },
};

user.age; // O(1)
user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)

// Hash tables in different languages
// map is that it maintains insertion order 
// set stores only the keys, not values 
const a = new Map(); 
const b = new Set();
