fn main() {
    let mut num1 = 5;
    let mut num2 = 10;

    println!("Before swapping: num1 = {}, num2 = {}", num1, num2);

    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    println!("After swapping: num1 = {}, num2 = {}", num1, num2);
}
