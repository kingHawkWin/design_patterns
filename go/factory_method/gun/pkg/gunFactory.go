package pkg

import (
	"fmt"
)

func GunFactory(name string) (IGun, error) {
	if name == "ak47" {
		return newAk47(), nil
	}
	if name == "musket" {
		return newMusket(), nil
	}
	return nil, fmt.Errorf("Wrong gun type passed")
}
