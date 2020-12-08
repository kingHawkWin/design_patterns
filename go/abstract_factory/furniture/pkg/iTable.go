package pkg

type ITable interface {
	setName(name string)
	GetName() string
}

type table struct {
	name string
}

func (t *table) setName(name string) {
	t.name = name
}

func (t *table) GetName() string {
	return t.name
}
