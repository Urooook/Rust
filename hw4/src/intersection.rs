pub fn find_intersection<'a>(a: &'a [i32], b: &'a [i32]) -> &'a [i32] {
    let mut i = 0;
    let mut j = 0;
    let mut start = 0;

    while i < a.len() && j < b.len() {
        if a[i] == b[j] {
            if start == 0 {
                start = i + 1; // Начало пересечения
            }

            i += 1;
            j += 1;

        } else if a[i] < b[j] {
            if start > 0 {
                return &a[start - 1..i];
            }

            i += 1;

        } else {
            j += 1;
        }
    }

    if start > 0 {
        &a[start - 1..i]

    } else {
        &[]
    }
}