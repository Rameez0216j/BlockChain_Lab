use std::io;

fn main() {
    println!("Enter two numbers:");
    
    let mut input = String::new();
    
    io::stdin().read_line(&mut input).expect("Failed to read line");
    
    let numbers: Vec<i32> = input
        .split_whitespace()
        .map(|num| num.parse().unwrap())
        .collect();

    let sum = numbers[0] + numbers[1];
    let difference = numbers[0] - numbers[1];
    let product = numbers[0] * numbers[1];
    let quotient = numbers[0] as f64 / numbers[1] as f64;
    
    println!("Sum: {}", sum);
    println!("Difference: {}", difference);
    println!("Product: {}", product);
    println!("Quotient: {:.2}", quotient);
}
