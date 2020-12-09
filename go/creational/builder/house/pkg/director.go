package pkg

type Director struct {
	builder iBuilder
}

func NewDirector(b iBuilder) *Director {
	return &Director{
		builder: b,
	}
}

func (d *Director) SetBuilder(b iBuilder) {
	d.builder = b
}

func (d *Director) BuildHouse() House {
	d.builder.setWindowType()
	d.builder.setDoorType()
	d.builder.setFloor()
	return d.builder.getHouse()
}
