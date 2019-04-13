fn doSomething( b:& mut String ){
   print(b);
}
fn main(){ 

  let mut a = String::from("Zia");
  doSomething(a)

  println!(a);
}