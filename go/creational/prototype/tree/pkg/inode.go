package pkg

type Inode interface {
	Print(string)
	Clone() Inode
}