package pkg

type iBuilder interface {
	setWindowType()
	setDoorType()
	setFloor()
	getHouse() House
}

func GetBuilder(builderType string) iBuilder {
	if builderType == "normal" {
		return newNormalBuilder()
	}
	if builderType == "igloo" {
		return newIglooBuilder()
	}
	return nil
}
