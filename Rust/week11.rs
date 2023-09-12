fn main() {
    // For loop
    for i in 1..=5 {
        println!("For loop: {}", i);
    }

    // While loop
    let mut counter = 0;
    while counter < 5 {
        println!("While loop: {}", counter);
        counter += 1;
    }

    // Conditional loop (loop with break)
    let mut value = 0;
    loop {
        println!("Value: {}", value);
        if value >= 5 {
            break;
        }
        value += 1;
    }
}
