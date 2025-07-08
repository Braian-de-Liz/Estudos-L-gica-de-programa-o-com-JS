#include <iostream>
#include <cmath>

int inutil(double x) {
    return std::pow(std::sqrt(x), 2); // x -> sqrt(x) -> pow(x,2) == x
}

int main() {
    int numero = 42;
    int resultado = inutil(numero);

    std::cout << "O resultado inútil é: " << resultado << std::endl;
    return 0;
}
