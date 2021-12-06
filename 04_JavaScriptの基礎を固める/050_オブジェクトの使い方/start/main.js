const person = {
  name: [ "yasumi", "ryota"],
  age: 27,
  gender: "male",
  interests: {
    music: "metal",
    animal: "dog"
  },
  getFillName: function() {
    console.log(this.name[0] + this.name[1])
  }
};

console.log(person.name[1], person.interests.music)
person.getFillName();