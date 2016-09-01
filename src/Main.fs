namespace Playground

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import.Browser

module Main =
    let Helpers = importAll<obj> "HelpersTS"

    let mul2 = Helpers ? give2() |> unbox<int> |> Module.multiply

    let main () =
        let fibSeq' = Module.fibSeq 0 1 |> Seq.take 10 |> Seq.toList 
        let message = sprintf "Hello from Fable (2 * (sum %A) = %d)" fibSeq' (fibSeq' |> Seq.sum |> mul2)
        let element = document.getElementById "main"
        element.innerText <- message
