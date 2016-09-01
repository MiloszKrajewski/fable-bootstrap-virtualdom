namespace Playground

module Module = 
    let multiply x y = x * y

    let rec fibSeq a b = seq { 
        yield a 
        yield! fibSeq b (a + b) 
    }
