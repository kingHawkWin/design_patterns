package main

import (
	"fmt"
	"kingHawkWin/pkg"
)

func main() {
	file1 := &pkg.File{Name: "File1"}
	file2 := &pkg.File{Name: "File2"}
	file3 := &pkg.File{Name: "File3"}

	folder1 := &pkg.Folder{
		Children: []pkg.Inode{file1},
		Name: "Folder1",
	}

	folder2 := &pkg.Folder{
		Children: []pkg.Inode{folder1, file2, file3},
		Name: "Folder2",
	}
	fmt.Println("\nPrinting hierarchy for Folder2")
	folder2.Print("    ")

	cloneFolder := folder2.Clone()
	fmt.Println("\nPrinting hierarchy for clone Folder")
	cloneFolder.Print("    ")
}