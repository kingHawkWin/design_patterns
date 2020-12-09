package pkg

type normalBuilder struct {
	windowType string
	doorType   string
	floor      int
}

func newNormalBuilder() *normalBuilder {
	return &normalBuilder{}
}

func (n *normalBuilder) setWindowType() {
	n.windowType = "Wooden Window"
}

func (n *normalBuilder) setDoorType() {
	n.doorType = "Wooden Door"
}

func (n *normalBuilder) setFloor() {
	n.floor = 2
}

func (n *normalBuilder) getHouse() House {
	return House{
		WindowType: n.windowType,
		DoorType:   n.doorType,
		Floor:      n.floor,
	}
}
