using System;

class Program
{
    static void Main()
    {
        string frase = "Nada vai mudar";
        char[] letras = frase.ToCharArray();

        for (int i = 0; i < letras.Length; i++)
        {
            letras[i] = letras[i]; // Não faz nada
        }

        Console.WriteLine(new string(letras)); // Mostra a mesma frase
    }
}
