package main

import (
	"fmt"

	"kingHawkWin/pkg"
)

func main() {
	ak47, _ := pkg.GunFactory("ak47")
	musket, _ := pkg.GunFactory("musket")

	printDetails(ak47)
	printDetails(musket)
}

func printDetails(g pkg.IGun) {
	fmt.Println(g.GetName())
	fmt.Println(g.GetPower())
	fmt.Println()
}
