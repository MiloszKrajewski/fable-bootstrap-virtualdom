namespace Playground

open Fable.Core

module Option = 
    let def v o = defaultArg o v
    let alt a o = match o with | None -> a | _ -> o
