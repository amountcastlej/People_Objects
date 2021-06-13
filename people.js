// array of people with a name, favorite color, birth year

// 1. get the names of all people whose favorite color is blue
// 2. get the names of all people whose name doesn't start with the letter S
// 3. get the names of all people who were born after 2000
// 4. add a new property, "age", to every person based on their birth year
// 5. change any person whose favorite color is blue to green
// 6. sort the array by age

people = [
    {name: 'Brad', favorite_color: 'Blue', birth_year: 1996},
    {name: 'Sarah', favorite_color: 'Yellow', birth_year: 1985},
    {name: 'Chet', favorite_color: 'Green', birth_year: 1957},
    {name: 'Big Mike', favorite_color: 'Purple', birth_year: 1945},
    {name: 'Little Mike', favorite_color: 'Green', birth_year: 2001},
    {name: 'Sammy', favorite_color: 'Blue', birth_year: 1993},
    {name: 'Brittany', favorite_color: 'Brown', birth_year: 1994},
    {name: 'Moderate Mike', favorite_color: 'Beige', birth_year: 1986},
    {name: 'Ryan', favorite_color: 'Xanadu', birth_year: 1998},
    ]

function get_favorite_color(input) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i].favorite_color == 'Blue') {
            output.push(input[i].name);
        }
    }
    return output;
}


function names_without_starting_S(input) {
    var output = [];
    for (var i = 0; i <= input.length - 1; i++) {
        if (input[i].name[0] != 'S') {
            output.push(input[i].name);
        }
    }
    return output;
}

function names_after_year(input, year) {
    var output = [];
    for (var i= 0; i < input.length; i++) {
        if(input[i].birth_year > year) {
            output.push(input[i].name);
        }
    }
    return output;
}

function add_age(input){
    for (var i=0; i < input.length; i++) {
    input[i].age = 2021 - input[i].birth_year;
    }
}

function change_color(input, old_color, new_color) {
    for (var i = 0; i < input.length; i++) {
        if (input[i].favorite_color == old_color) {
            input[i].favorite_color = new_color;
        }
    }
}

function sort_by_age(input){
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input.length - 1 - i; j++) {
            if (input[j].age > input[j + 1].age) {
                var temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
            }
        }
    }
}

  // console.log(get_favorite_color(people));
  // console.log(names_without_starting_S(people));
  // console.log(names_after_year(people, 2000));
  // add_age(people);
  // console.log(people);
  // change_color(people, "Blue", "Green");
  // console.log(people);
  // sort_by_age(people);
  // console.log(people)
