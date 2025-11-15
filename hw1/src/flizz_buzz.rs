pub fn flizz_buzz() {
    for i in 0..20 {
        let divisible_by_3 = i % 3 == 0;
        let divisible_by_5 = i % 5 == 0;

        if divisible_by_3 && divisible_by_5 {
            println!("FizzBuzz {}", i);
        } else if divisible_by_3 {
            println!("Fizz {}", i);
        } else if divisible_by_5 {
            println!("Buzz {}", i);
        } else {
            println!("{}", i);
        }
    }
}