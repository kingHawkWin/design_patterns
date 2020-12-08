package main

import (
	"fmt"

	"kingHawkWin/pkg"
)

func main() {
	adidasFactory, _ := pkg.GetSportsFactory("adidas")
	nikeFactory, _ := pkg.GetSportsFactory("nike")

	adidasShoe := adidasFactory.MakeShoe()
	adidasShirt := adidasFactory.MakeShirt()

	nikeShoe := nikeFactory.MakeShoe()
	nikeShirt := nikeFactory.MakeShirt()

	shoeDetails(adidasShoe)
	shirtDetails(adidasShirt)

	shoeDetails(nikeShoe)
	shirtDetails(nikeShirt)
}

func shoeDetails(shoe pkg.IShoe) {
	fmt.Println(shoe.GetLogo())
	fmt.Println(shoe.GetSize())
	fmt.Println()
}

func shirtDetails(shirt pkg.IShirt) {
	fmt.Println(shirt.GetLogo())
	fmt.Println(shirt.GetSize())
	fmt.Println()
}
