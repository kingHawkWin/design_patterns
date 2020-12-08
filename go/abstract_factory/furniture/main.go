package main

import (
	"fmt"

	"kingHawkWin/pkg"
)

func main() {
	artDecoFactory, _ := pkg.GetFurniture("art deco")
	victorianFactory, _ := pkg.GetFurniture("victorian")
	modernFactory, _ := pkg.GetFurniture("modern")

	artDecoChair := artDecoFactory.MakeChair()
	artDecoTable := artDecoFactory.MakeTable()
	artDecoSofa := artDecoFactory.MakeSofa()

	victorianChair := victorianFactory.MakeChair()
	victorianTable := victorianFactory.MakeTable()
	victorianSofa := victorianFactory.MakeSofa()

	modernChair := modernFactory.MakeChair()
	modernTable := modernFactory.MakeTable()
	modernSofa := modernFactory.MakeSofa()

	chairDetails(artDecoChair)
	tableDetails(artDecoTable)
	sofaDetails(artDecoSofa)
	fmt.Println()

	chairDetails(victorianChair)
	tableDetails(victorianTable)
	sofaDetails(victorianSofa)
	fmt.Println()

	chairDetails(modernChair)
	tableDetails(modernTable)
	sofaDetails(modernSofa)
	fmt.Println()
}

func chairDetails(chair pkg.IChair) {
	fmt.Println(chair.GetName())
}

func tableDetails(table pkg.ITable) {
	fmt.Println(table.GetName())
}

func sofaDetails(sofa pkg.ISofa) {
	fmt.Println(sofa.GetName())
}
