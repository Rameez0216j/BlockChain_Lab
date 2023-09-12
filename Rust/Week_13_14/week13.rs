use rand::Rng;

fn week_13() {
    let random_number = rand::thread_rng().gen_range(1..=100);
    println!("Random number: {}", random_number);
}
