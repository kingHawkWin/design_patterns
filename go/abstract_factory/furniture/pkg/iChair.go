package pkg

type IChair interface {
	setName(name string)
	GetName() string
}

type chair struct {
	name string
}

func (c *chair) setName(name string) {
	c.name = name
}

func (c *chair) GetName() string {
	return c.name
}
