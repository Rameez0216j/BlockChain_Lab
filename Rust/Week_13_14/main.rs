// mod week13;

use rand::Rng;
use std::io;


fn week_13() {
    let random_number = rand::thread_rng().gen_range(1..=100);
    println!("Random number: {}", random_number);
}


fn week_14() {
    let secret_number = rand::thread_rng().gen_range(1..=100);

    loop {
        println!("Guess the number (1-100): ");
        let mut guess = String::new();
        io::stdin().read_line(&mut guess).expect("Failed to read line");

        let guess: i32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Please enter a valid number.");
                continue;
            }
        };

        if guess == secret_number {
            println!("Congratulations! You guessed the number.");
            break;
        } else if guess < secret_number {
            println!("Try a higher number.");
        } else {
            println!("Try a lower number.");
        }
    }
}


fn main() {
    week_13();
    week_14();
}
