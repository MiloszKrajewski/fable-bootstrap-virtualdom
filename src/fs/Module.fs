namespace Playground

module Module = 
    let multiply x y = x * y

    let rec sum s l = match l with | [] -> s | h :: tail -> sum (s + h) tail 

    let rec fibSeq a b = seq { 
        yield a 
        yield! fibSeq b (a + b) 
    }
