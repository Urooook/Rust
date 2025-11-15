pub fn calculate(a: i32, b: i32, operation: char) -> i32 {
    match operation {
        '+' => a.saturating_add(b),
        '-' => a.saturating_sub(b),
        '*' => a.saturating_mul(b),
        _ => 0,
    }
}