package main

import (
	"fmt"
	"kingHawkWin/pkg"
)

func main() {
	for i := 0; i < 30; i++ {
		go pkg.GetInit()
	}

	_, _ = fmt.Scanln()
}