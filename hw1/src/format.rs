pub fn date_format() {
    let year = 2024;
    let month = 1;
    let day = 15;
    println!("📅 {}-{:02}-{:02}", year, month, day);
}

pub fn format_money() {
    let amount = 142.9765;
    println!("💵 {:.2} ₽", amount);
}

pub fn hex() {
    let r = 255;
    let g = 128;
    let b = 0;
    println!("#{r:02X}{g:02X}{b:02X}");
}

pub fn format_table() {
    let name = "Alice";
    let age = 25;
    let score = 95.543;

    println!("|{:<10}|{:^10}|{:>10.1}|", name, age, score);

}