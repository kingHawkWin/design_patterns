package main

import (
	"fmt"

	"kingHawkWin/pkg"
)

func main() {
	normalBuilder := pkg.GetBuilder("normal")
	iglooBuilder := pkg.GetBuilder("igloo")

	director := pkg.NewDirector(normalBuilder)

	normalHouse := director.BuildHouse()
	fmt.Printf("Normal House Window Type: %s\n", normalHouse.WindowType)
	fmt.Printf("Normal House Door Type: %s\n", normalHouse.DoorType)
	fmt.Printf("Normal House Floor: %d\n", normalHouse.Floor)

	director.SetBuilder(iglooBuilder)
	iglooHouse := director.BuildHouse()
	fmt.Printf("igloo House Window Type: %s\n", iglooHouse.WindowType)
	fmt.Printf("igloo House Door Type: %s\n", iglooHouse.DoorType)
	fmt.Printf("igloo House Floor: %d\n", iglooHouse.Floor)
}
