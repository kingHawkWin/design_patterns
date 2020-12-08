package pkg

type modern struct {
}

func (m *modern) MakeChair() IChair {
	return &modernChair{
		chair: chair{
			name: "modern chair",
		},
	}
}

func (m *modern) MakeTable() ITable {
	return &modernTable{
		table: table{
			name: "modern table",
		},
	}
}

func (m *modern) MakeSofa() ISofa {
	return &modernSofa{
		sofa: sofa{
			name: "modern sofa",
		},
	}
}
