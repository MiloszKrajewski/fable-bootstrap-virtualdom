class Greeter {
    greet() {
        document.write("Hello from TypeScript<br>");
    }
}

export function greet() {
    let greeter = new Greeter();
    greeter.greet();
}

export function give2() {
    return 2;
}
