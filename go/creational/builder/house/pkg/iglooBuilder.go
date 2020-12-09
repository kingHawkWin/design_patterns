package pkg

type iglooBuilder struct {
	windowType string
	doorType   string
	floor      int
}

func newIglooBuilder() *iglooBuilder {
	return &iglooBuilder{}
}

func (i *iglooBuilder) setWindowType() {
	i.windowType = "Snow Window"
}

func (i *iglooBuilder) setDoorType() {
	i.doorType = "Snow Door"
}

func (i *iglooBuilder) setFloor() {
	i.floor = 2
}

func (i *iglooBuilder) getHouse() House {
	return House{
		WindowType: i.windowType,
		DoorType:   i.doorType,
		Floor:      i.floor,
	}
}
