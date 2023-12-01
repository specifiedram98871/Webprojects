<?php
class Person {
    // Properties
    public $name;
    public $age;
    public $gender;

    // Constructor
    public function __construct($name, $age, $gender) {
        $this->name = $name;
        $this->age = $age;
        $this->gender = $gender;
    }

    // Method to print details
    public function printDetails() {
        echo "Name: " . $this->name . "<br>";
        echo "Age: " . $this->age . "<br>";
        echo "Gender: " . $this->gender . "<br>";
    }
}

// Create an object of the Person class
$person = new Person("John Doe", 25, "Male");

// Print out the details
$person->printDetails();
?>
