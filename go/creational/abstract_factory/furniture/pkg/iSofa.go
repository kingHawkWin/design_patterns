package pkg

type ISofa interface {
	setName(name string)
	GetName() string
}

type sofa struct {
	name string
}

func (s *sofa) setName(name string) {
	s.name = name
}

func (s *sofa) GetName() string {
	return s.name
}
