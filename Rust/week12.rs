// Function that returns the square of a number
fn square(x: i32) -> i32 {
    x * x
}

fn main() {
    // Assigning value of one variable to another
    let num1 = 5;
    let num2 = num1;

    // Passing value to a function
    let result = square(num2);

    // Returning value from a function
    println!("Square of {} is {}", num2, result);
}
