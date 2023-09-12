fn main() {
    // Arrays
    let numbers: [i32; 5] = [1, 2, 3, 4, 5];

    // Tuples
    let person: (String, i32, f64) = ("Alice".to_string(), 25, 5.8);

    println!("Array: {:?}", numbers);
    println!("Tuple: {:?}", person);
}
