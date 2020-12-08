package pkg

import (
	"fmt"
)

type iFurniture interface {
	MakeChair() IChair
	MakeTable() ITable
	MakeSofa() ISofa
}

func GetFurniture(style string) (iFurniture, error) {
	if style == "art deco" {
		return &artDeco{}, nil
	}
	if style == "victorian" {
		return &victorian{}, nil
	}
	if style == "modern" {
		return &modern{}, nil
	}
	return nil, fmt.Errorf("Wrong style type passed")
}
