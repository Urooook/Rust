mod calculator;
mod format;

fn main() {
    assert_eq!(calculator::calculate(10, 20, '+'), 30);
    assert_eq!(calculator::calculate(100, 200, '+'), 300);
    assert_eq!(calculator::calculate(i32::MAX, 1, '+'), i32::MAX);

    assert_eq!(calculator::calculate(50, 30, '-'), 20);
    assert_eq!(calculator::calculate(i32::MIN, 1, '-'), i32::MIN);

    assert_eq!(calculator::calculate(5, 6, '*'), 30);
    assert_eq!(calculator::calculate(i32::MAX, 2, '*'), i32::MAX);

    assert_eq!(calculator::calculate(10, 20, '/'), 0);

    println!("Все тесты прошли успешно!");

    let formated_string = format::format_message("Юрец", 1000, 22);
    println!("{}", formated_string);

    let build_string = format::build_greeting("Юре", "ц");
    println!("{}", build_string);
}
