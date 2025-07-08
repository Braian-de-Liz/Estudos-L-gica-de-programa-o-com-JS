package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    frasesDoPato := []string{
        "Quack... a vida é como um lago calmo, até cair uma pedra.",
        "Nem todo pato voa, mas todos sabem nadar nas dificuldades.",
        "Você já agradeceu hoje por não ser um pato de borracha?",
        "Às vezes, ser estranho é só ser um pato no galinheiro.",
        "Quack! Tradução: continue tentando.",
    }

    rand.Seed(time.Now().UnixNano())
    patoIndex := rand.Intn(len(frasesDoPato))

    fmt.Println("🐤 Mensagem do Pato Filosófico:")
    fmt.Println(frasesDoPato[patoIndex])
}

