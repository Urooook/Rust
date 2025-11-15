pub fn format_message(name: &str, score: u32, level: u32) -> String {
    format!("Привет, {}! Ваш счёт: {}, уровень: {}.", name, score, level)
}

pub fn build_greeting(name: &str, suffix: &str) -> String {
    let mut res = name.to_string();
    res.push(' ');
    res.push_str(suffix);
    res
}