fn main() -> std::result::Result<(), std::io::Error>{
    use std::io;
    use std::io::prelude::*;

    let lines = io::stdin().lock().lines();
    let values: Vec<i32> = lines.map(x.parse().unwrap()).collect();
}
