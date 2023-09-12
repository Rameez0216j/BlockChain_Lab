fn main() {
    let a = 0b1010; // Binary representation of 10
    let b = 0b1100; // Binary representation of 12

    let bitwise_and = a & b;
    let bitwise_or = a | b;
    let bitwise_xor = a ^ b;
    let logical_and = a > 0 && b > 0;
    let logical_or = a > 0 || b > 0;

    println!("Bitwise AND: {:04b}", bitwise_and);
    println!("Bitwise OR: {:04b}", bitwise_or);
    println!("Bitwise XOR: {:04b}", bitwise_xor);
    println!("Logical AND: {}", logical_and);
    println!("Logical OR: {}", logical_or);
}
