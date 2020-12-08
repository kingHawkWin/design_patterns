package pkg

type IShirt interface {
	setLogo(logo string)
	setSize(size string)
	GetLogo() string
	GetSize() string
}

type shirt struct {
	logo string
	size string
}

func (s *shirt) setLogo(logo string) {
	s.logo = logo
}

func (s *shirt) setSize(size string) {
	s.size = size
}

func (s *shirt) GetLogo() string {
	return s.logo
}

func (s *shirt) GetSize() string {
	return s.size
}
